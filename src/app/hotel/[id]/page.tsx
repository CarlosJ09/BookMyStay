"use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Propiedad } from "@/types/Propiedad";
import ReservationCard from "@/components/Hotel/ReservationCard";
import Comments from "@/components/Hotel/Comments";

import { PROPERTIES_ENDPOINT } from "../../../consts/index";

import { useState, useEffect } from "react";

import { Image } from "@nextui-org/react";

export default function Hotel({ params }: Params) {
  const [property, setProperty] = useState<Propiedad>();

  useEffect(() => {
    fetch(`${PROPERTIES_ENDPOINT}/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
      });
  }, []);

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="w-full flex flex-col justify-center gap-8 items-center col-span-1 mt-12">
          <h1 className=" text-3xl">{property?.nombre}</h1>
          <div className="w-96">
            <Image src={property?.imagen} alt={property?.nombre} />
          </div>
          <div className="w-10/12 mx-12 h-fit my-10 text-base flex justify-center gap-x-8 overflow-clip overflow-x-hidden overflow-y-auto">
            <p className="text-justify">{property?.descripcion}</p>
          </div>
          <div className="w-full mb-8">
            <Comments />
          </div>
        </div>

        <div className="w-full flex justify-center items-center col-span-1">
          <ReservationCard />
        </div>
      </div>
    </div>
  );
}
