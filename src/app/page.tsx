import NavBar from "@/components/NavBar";
import { hotelList } from "@/utils/HotelList";
import HotelCard from "@/components/HotelCard";
import React from "react";

export default function Page(): JSX.Element {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col justify-center">
        <section className="gap-12 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto">
          {hotelList.map((hotel, index) => (
            <HotelCard
              key={index}
              hotelName={hotel.hotelName}
              location={hotel.location}
              price={hotel.price}
              image={hotel.image}
            ></HotelCard>
          ))}
        </section>
      </main>
    </div>
  );
}
