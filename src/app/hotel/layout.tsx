import React from "react";

import NavBar from "@/components/UI/NavBar";

export default function layout({children}: {children: React.ReactNode;}) {
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
