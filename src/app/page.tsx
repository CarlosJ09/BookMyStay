import React from "react";
import NavBar from "@/components/UI/NavBar";
import Home from "../components/Hotel/Home";
import Hotel from "./hotel/page";

export default function Page(): JSX.Element {
  return (
    <div>
      <NavBar isActive={"hotel"} />
      <main className="flex flex-col justify-center">
        <section className="flex justify-center my-10">
          <Hotel />
        </section>
      </main>
    </div>
  );
}
