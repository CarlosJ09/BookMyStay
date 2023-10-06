"use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Propiedad } from "@/types/Propiedad";
import ReservationCard from "@/components/Hotel/ReservationCard";

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
          <div className="max-w-96 mx-12 h-28 text-base flex justify-center gap-x-8 overflow-clip overflow-x-clip overflow-y-auto">
            <p>{property?.descripcion}</p>
          </div>
          <div className="w-full flex flex-col justify-center gap-8 items-center">
            <h1>Comentarios: </h1>
            <div className="max-w-96 mx-12 h-52 text-base flex justify-center gap-x-8 overflow-x-clip overflow-y-auto">
              <h3>Carlos</h3>
              <p>
                dqwndiqw dqwdqwd qwd qw dqwd qwd qwdq qwdqwdqwdqwd qwdq dqw qwd
                qwdqwdqdq dqwndiqw dqwdqwd qwd qw dqwd qwd qwdq qwdqwdqwdqwd
                qwdq dqw qwd qwdqwdqdq
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center col-span-1">
          <ReservationCard />
        </div>
      </div>
    </div>
  );
}
