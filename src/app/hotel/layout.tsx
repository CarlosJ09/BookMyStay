import React from "react";

import NavBar from "@/components/UI/NavBar";

import { currentUser } from "@clerk/nextjs";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    children;
  }
  {
    return (
      <div>
        <NavBar />
        {children}
      </div>
    );
  }
}
