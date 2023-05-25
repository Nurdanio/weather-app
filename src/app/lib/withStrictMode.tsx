import { StrictMode } from "react";

export const withStrictMode = (component: () => JSX.Element) => () =>
  <StrictMode>{component()}</StrictMode>;
