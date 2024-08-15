import React, { ReactNode } from "react";
import { JetBrains_Mono } from "next/font/google";
import Headers from "../Headers";
import PageTransition from "../PageTransition";
import StairTransition from "../StairTransition";

interface ChildrenProps {
  children: ReactNode;
}

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="text-white">
      <Headers></Headers>
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </div>
  );
};

export default Layout;
