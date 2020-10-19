import React, { useState, useMemo, useCallback, FC, ReactElement } from "react";

import useQueue from "../../hooks/use-queue";

import styles from "./styles.module.scss";

interface ILog {
  timeoutId: ReturnType<typeof setTimeout>;
  delay: number;
  actionTime: Date;
  resultTime: Date;
}

const Log: FC = (): ReactElement => {
  const [logs, setLogs] = useState<ILog[]>([]);

  const addToLog = useCallback(
    (record: ILog) => {
      const nextLogs = [...logs];
      nextLogs.push(record);
      setLogs(nextLogs);
    },
    [logs]
  );

  const { addJob, clearJobs } = useQueue({
    onJobFinished: addToLog,
  });

  const [activeTimeout, setActiveTimeout] = useState<ILog["timeoutId"]>();

  const handleAddJob = (delay: ILog["delay"]) => (): void => {
    const actionTime = new Date();

    addJob({
      task: () =>
        new Promise((resolve) => {
          const timeoutId = setTimeout(() => {
            resolve({
              timeoutId,
              delay,
              actionTime,
              resultTime: new Date(),
            });
          }, delay * 1000);

          setActiveTimeout(timeoutId);
        }),
    });
  };

  const reset = (): void => {
    if (activeTimeout) {
      clearTimeout(activeTimeout);
      setActiveTimeout(undefined);
    }

    setLogs([]);
    clearJobs();
  };

  const preparedValue = useMemo(
    () =>
      logs.reduce((message, record) => {
        message += `${record.resultTime}: ${record.delay} / ${record.actionTime}\n\n`;
        return message;
      }, ""),
    [logs]
  );

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        {[1, 2, 3].map((delay) => (
          <button key={delay} onClick={handleAddJob(delay)}>
            Button {delay}
          </button>
        ))}
        <button onClick={reset}>Reset</button>
      </div>

      <div>
        <h3>Logs</h3>
        <textarea value={preparedValue} readOnly className={styles.textarea} />
      </div>
    </div>
  );
};

export default Log;
