"use client";

import { Propiedad } from "@/types/Propiedad";
import ReservationCard from "@/components/Hotel/ReservationCard";

import { PROPERTIES_ENDPOINT } from "../../../consts/index";

import { COMMENTS_ENDPOINT } from "@/consts";
import { Comentario } from "@/types/Comentario";

import { useState, useEffect } from "react";

import { Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import HorizontalDivider from "@/components/UI/HorizontalDivider";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

export default function Hotel({ params }: any) {
  const [property, setProperty] = useState<Propiedad>();

  useEffect(() => {
    fetch(`${PROPERTIES_ENDPOINT}/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
      });
  }, []);

  const [comments, setComments] = useState<Comentario[]>();

  useEffect(() => {
    fetch(`${COMMENTS_ENDPOINT}?propiedadId=${property?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full flex-wrap grid grid-cols-2 gap-4">
        <div className="w-full flex flex-col justify-center gap-8 items-center col-span-1 mt-12">
          <div className="flex justify-center items-center gap-4">
            <h1 className=" text-3xl text-center">{property?.nombre}</h1>
            <Chip className="w-60" color="secondary" variant="solid">
              <p className="w-full flex-nowrap">{property?.tipo}</p>
            </Chip>
          </div>
          <div className="w-96">
            <Image
              width={400}
              height={350}
              className="w-full bg-cover"
              src={property?.imagen}
              alt={property?.nombre}
            />
          </div>
          <div className="w-6/12 mx-12 h-fit my-10 text-base flex flex-col justify-center gap-8 overflow-clip overflow-x-hidden overflow-y-auto">
            <p className="text-justify">{property?.descripcion}</p>
            <HorizontalDivider />
            <p>Núm. Habitaciones: {property?.numeroDeHabitaciones}</p>
            <HorizontalDivider />
            <p>Dirección: {property?.direccion}</p>
            <HorizontalDivider />
            <p>Precio por noche: RD${property?.precioPorNoche}</p>
          </div>
          <div className="w-full mb-8">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="flex justify-center items-center gap-2 mb-8">
                <h1 className="text-xl">Comentarios</h1>
                <Popover
                  className="mt-2"
                  color="warning"
                  placement="bottom"
                  showArrow={true}
                >
                  <PopoverTrigger>
                    <Button
                      variant="solid"
                      radius="full"
                      size="sm"
                      isIconOnly
                      color="warning"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 192 512"
                      >
                        <style>color: #fff</style>
                        <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-xs">
                        Para agregar un comentario debe haber reservado esta
                        propiedad al menos una vez, podrá hacerlo en la sección
                        de Reservaciones.
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-11/12 h-fit min-h-unit-8 max-h-60 text-base flex flex-col items-start justify-start gap-x-8 overflow-y-auto border-1 rounded-lg">
                {comments && comments.length > 0 ? (
                  comments
                    .filter((comment) => comment.propiedadId == property?.id)
                    .map((comentario, index) => (
                      <div key={index}>
                        <h3 className="font-bold p-2">
                          {comentario?.clienteId}
                        </h3>
                        <p className="py-4 text-justify px-2">
                          {comentario?.texto}
                        </p>
                        {index < comments.length - 1 && <HorizontalDivider />}
                      </div>
                    ))
                ) : (
                  <p className="my-8 self-center">
                    {"No hay comentarios aquí todavía :)"}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full fixed flex items-center left-1/2 ml-36 mb-8 my-auto col-span-1 z-50">
          {property && (
            <ReservationCard
              propiedadId={property.id}
              total={property.precioPorNoche}
            />
          )}
        </div>
      </div>
    </div>
  );
}
