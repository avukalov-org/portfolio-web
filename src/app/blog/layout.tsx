import TransitionWrapper from "@/components/page-transition-wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page contains all blog posts",
};

export default function BlogPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TransitionWrapper className="">{children}</TransitionWrapper>;
}
