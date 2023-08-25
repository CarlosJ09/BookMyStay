import React from "react";
import { hotelList } from "@/utils/HotelList";
import HotelCard from "@/components/Hotel/HotelCard";

import Categories from "../components/Hotel/Categories";

export default function Page(): JSX.Element {
  return (
    <div>
      <main className="flex flex-col justify-center">
        <section className="flex justify-center my-10">
          <Categories />
        </section>
      </main>
    </div>
  );
}
