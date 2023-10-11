"use client";

import { useEffect, useState } from "react";
import PropertyCard from "@/components/Hotel/PropertyCard";
import { Pagination, Button, Spinner } from "@nextui-org/react";
import { PROPERTIES_ENDPOINT } from "../../consts/index";
import { Propiedad } from "@/types/Propiedad";

export default function Categories(): JSX.Element {
  const [properties, setProperties] = useState<Propiedad[]>();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [CategoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${PROPERTIES_ENDPOINT}?pageNumber=${currentPage}&pageSize=${20}&tipo=${selectedCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setProperties([]);
        console.error("Error:", error);
      });
  }, [currentPage, selectedCategory]);

  useEffect(() => {
    fetch(`${PROPERTIES_ENDPOINT}/tipos`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryList(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
      <div
        className={
          isLoading
            ? "w-full h-full flex justify-center items-center mx-auto my-auto"
            : !(Array.isArray(properties) && properties.length > 0)
            ? "w-full h-full flex justify-center items-center mx-auto my-auto"
            : "gap-12 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto my-10"
        }
      >
        {isLoading ? (
          <div className="fixed w-screen h-screen flex justify-center items-center m-auto inset-0">
            <Spinner color="secondary" />
          </div>
        ) : Array.isArray(properties) && properties.length > 0 ? (
          properties.map((hotel) => (
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
          ))
        ) : (
          <p className="mt-20">
            No hay propiedades disponibles with esas caracteristicas.
          </p>
        )}
      </div>
      <div className="fixed bottom-4 inset-x-0 flex justify-center z-50">
        <Pagination
          page={currentPage}
          onChange={setCurrentPage}
          total={20}
          initialPage={1}
        />
      </div>
    </div>
  );
}
