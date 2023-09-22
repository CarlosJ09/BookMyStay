"use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Propiedad } from "@/types/Propiedad";

import * as constants from "../../../consts/index";

import { useState, useEffect } from "react";

export default function Hotel({ params }: Params) {
  const [property, setProperty] = useState<Propiedad>();

  useEffect(() => {
    fetch(`${constants.PROPERTIES_ENDPOINT}/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
      });
  }, []);

  return (
    <div className="my-10 flex flex-col justify-center gap-8">
      <div className="text-xl text-center">Propiedad: {property?.nombre}</div>
      <div className="text-justify mx-16">{property?.descripcion}</div>
    </div>     
  );
}
