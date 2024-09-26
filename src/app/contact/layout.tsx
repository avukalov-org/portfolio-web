import TransitionWrapper from "@/components/transition-wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page of portfolio website",
};

export default function ContactPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TransitionWrapper className="">{children}</TransitionWrapper>;
}
