import TransitionWrapper from "@/components/page-transition-wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio page of portfolio website",
};

export default function PortfolioPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TransitionWrapper className="">{children}</TransitionWrapper>;
}
