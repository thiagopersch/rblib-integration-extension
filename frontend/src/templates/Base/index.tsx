"use client";

import Navbar from "@/components/Navbar";

type BaseProps = {
  children?: React.ReactNode;
};

export default function Base({ children }: BaseProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
