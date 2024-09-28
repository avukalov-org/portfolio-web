import TransitionWrapper from "@/components/page-transition-wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "About page of portfolio website",
};

export default function AboutPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TransitionWrapper>{children}</TransitionWrapper>;
}
