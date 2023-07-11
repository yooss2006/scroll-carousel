import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="max-w-screen-sm h-full mx-auto overflow-hidden bg-white">
      {children}
    </div>
  );
}
