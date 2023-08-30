import React from "react";
import NavBar from "@/components/UI/NavBar";
import Home from "../components/Hotel/Home";

export default function Page(): JSX.Element {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col justify-center">
        <section className="flex justify-center my-10">
          <Home />
        </section>
      </main>
    </div>
  );
}
