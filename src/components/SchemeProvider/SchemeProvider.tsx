// --------------------------------------------
//
// SchemeProvider
// -> Component
//
// --------------------------------------------

import { ReactNode } from "react";

export interface SchemeProviderProps {
  children: ReactNode;
  scheme?: "dark" | string;
}

const SchemeProvider = ({
  children,
  scheme = "default",
}: SchemeProviderProps) => {
  return (
    <div
      data-component="SchemeProvider"
      data-scheme={scheme}
      className={`scheme--${scheme}`}
    >
      {children}
    </div>
  );
};

export default SchemeProvider;
