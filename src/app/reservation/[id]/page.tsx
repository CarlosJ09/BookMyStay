"use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Reservacion } from "@/types/Reservacion";

import { RESERVATION_ENDPOINT } from "../../../consts/index";

import { useState, useEffect } from "react";

export default function Reservation({ params }: Params) {
  const [reservation, setreservation] = useState<Reservacion>();

  useEffect(() => {
    fetch(`${RESERVATION_ENDPOINT}/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setreservation(data);
      });
  }, []);
 
  return (
    <div className="my-10 flex flex-col justify-center gap-8">
      <div className="text-xl text-center">Propiedad: {reservation?.estado}</div>
      <div className="text-justify mx-16">{reservation?.fechaInicio}</div>
      <div className="text-justify mx-16">{reservation?.fechaFin}</div>
    </div>     
  );
}
