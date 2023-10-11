"use client";

import NavBar from "@/components/UI/NavBar";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Pagination, Button, Spinner } from "@nextui-org/react";

import { PROPERTIES_ENDPOINT } from "../../consts/index";
import PropertyCard from "@/components/Hotel/PropertyCard";
import { Propiedad } from "@/types/Propiedad";

export default function Propietario() {
  const { userId } = useAuth();

  const [propiedades, setPropiedades] = useState<Propiedad[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(PROPERTIES_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        const misPropiedes = data.filter(
          (hotel: Propiedad) => hotel.propietarioId == userId
        );
        setPropiedades(misPropiedes);
      });
  }, []);

  return (
    <div>
      <section className="h-full flex flex-col justify-center items-center mt-10">
        <div>
          {!propiedades || propiedades.length === 0 ? (
            <div className="flex flex-col justify-center items-center gap-8">
              <h1 className="text-xl">¡Hazte Propietario de manera fácil!</h1>
              <Button color="success" className="font-bold">
                Subir propiedades
              </Button>
            </div>
          ) : (
            <div>
              <h1 className="text-xl">Mis propiedades</h1>
              <div>
                {isLoading ? (
                  <div className="fixed w-screen h-screen flex justify-center items-center m-auto inset-0">
                    <Spinner color="secondary" />
                  </div>
                ) : Array.isArray(propiedades) && propiedades.length > 0 ? (
                  propiedades.map((hotel) => (
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
                  <p className="mt-20">No hay propiedades disponibles.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
