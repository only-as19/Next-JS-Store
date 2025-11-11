"use client";

import { ThemeProvider } from "./theme-provider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        enableSystem
        attribute="class"
        disableTransitionOnChange
        defaultTheme="system"
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default Provider;
