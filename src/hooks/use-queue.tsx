import { useReducer, useEffect } from "react";

// A task to be performed.
export interface Job {
  task: () => Promise<any>;
}

enum ActionType {
  ADD,
  SHIFT,
  CLEAR,
}

type Action = {
  type: ActionType;
  job?: Job;
};

// TODO: can add onComplete props for future
export interface IQueueProps {
  /**
   * @description Action that will call after each job is completed
   * @param {result} result The Job to be performed when this task is executed
   */
  onJobFinished: (result: any) => void;
}

export interface IQueueReturnProps {
  /**
   * @description Adds a job to the end of the queue
   * @param {Job} job The Job to be performed when this task is executed
   */
  addJob: (job: Job) => void;
  /**
   * @description Clear all jobs in queue
   */
  clearJobs: () => void;
  /**
   * @description Is queue currently busy
   */
  isExecutingTask: boolean;
}

const jobsReducer = (jobs: Job[], action: Action): Job[] => {
  switch (action.type) {
    case ActionType.ADD:
      return [...jobs, action.job] as Job[];

    case ActionType.SHIFT:
      const next = [...jobs];
      next.shift();
      return next;

    case ActionType.CLEAR:
      return [];

    default:
      return jobs;
  }
};

const isExecutingTaskReducer = (status: boolean, action: boolean) => {
  return action;
};

const useQueue = ({ onJobFinished }: IQueueProps): IQueueReturnProps => {
  const [jobs, dispatch] = useReducer(jobsReducer, []);
  const [isExecutingTask, setIsExecutingTask] = useReducer(
    isExecutingTaskReducer,
    false
  );

  const addJob = (job: Job) => {
    dispatch({ type: ActionType.ADD, job });
  };

  const shiftJob = () => {
    dispatch({ type: ActionType.SHIFT });
  };

  const clearJobs = () => {
    dispatch({ type: ActionType.CLEAR });
    setIsExecutingTask(false);
  };

  useEffect(() => {
    const runJobs = async () => {
      if (jobs.length > 0 && !isExecutingTask) {
        setIsExecutingTask(true);

        const job = jobs[0];
        const result = await job.task();

        onJobFinished(result);
        shiftJob();

        setIsExecutingTask(false);
      }
    };

    runJobs();
  }, [jobs, isExecutingTask, onJobFinished]);

  return { isExecutingTask, addJob, clearJobs };
};

export default useQueue;
