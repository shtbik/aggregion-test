import React from "react";
import { render } from "@testing-library/react";

import Log from "./";

test("dummy render test", () => {
  const { getByText } = render(<Log />);
  const linkElement = getByText(/Logs/i);
  expect(linkElement).toBeInTheDocument();
});
