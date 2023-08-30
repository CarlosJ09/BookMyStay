"use client";

import { Button } from "@nextui-org/react";
import { CategoryList } from "../../utils/CategoryList";
import { useEffect, useState } from "react";

import PropertyCard from "@/components/Hotel/PropertyCard";

import * as constants from "../../consts/index";
import { Propiedad } from "@/types/Propiedad";

export default function Categories(): JSX.Element {
  const [properties, setProperties] = useState<Propiedad[]>();

  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch(constants.PROPERTIES_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);

  const filteredProperties = properties?.filter((property: Propiedad) =>
    selectedCategory.length === 0
      ? properties
      : property.tipo === selectedCategory
  );

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mx-10">
        {CategoryList.map((category: string, index) => (
          <Button
            key={index}
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
        {filteredProperties?.map((hotel) => (
          <PropertyCard
            key={hotel.id}
            id={hotel.id}
            nombre={hotel.nombre}
            imagen={hotel.imagen}
            descripcion={hotel.descripcion}
            direccion={hotel.direccion}
            tipo={hotel.tipo}
            propietarioId={hotel.propietarioId}
            precioPorNoche={hotel.precioPorNoche}
            numeroDeHabitaciones={hotel.numeroDeHabitaciones}
          ></PropertyCard>
        ))}
      </div>
    </div>
  );
}
