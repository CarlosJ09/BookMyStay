"use client";

import { Button } from "@nextui-org/react";
import { CategoryList } from "../../utils/CategoryList";
import { useState } from "react";

import { hotelList } from "@/utils/HotelList";
import HotelCard from "@/components/Hotel/HotelCard";

export default function Categories(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredHotels = hotelList.filter(
    (hotel) => hotel.category === selectedCategory
  );

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  let hotels = filteredHotels.length === 0 ? hotelList : filteredHotels;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mx-10">
        {CategoryList.map((category: string) => (
          <Button
            onClick={() => handleCategoryClick(category)}
            color="secondary"
            variant={selectedCategory == category ? "solid" : "bordered"}
            className="hover:opacity-70 hover:duration-1000"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="gap-12 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto my-10">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            id={hotel.id}
            hotelName={hotel.hotelName}
            location={hotel.location}
            price={hotel.price}
            category={hotel.category}
            image={hotel.image}
          ></HotelCard>
        ))}
      </div>
    </div>
  );
}
