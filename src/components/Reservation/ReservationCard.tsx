"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Reservacion } from "@/types/Reservacion";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

import { Chip } from "@nextui-org/react";

export default function ReservationCard(props: Reservacion): JSX.Element {
  const { id, clienteId, propiedadId, fechaInicio, fechaFin, estado, total } =
    props;

  return (
    <Card className="w-96 py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-lg mb-1">Reservación: {id}</h4>
        <small className="text-default-500 my-1">
          Propiedad: {propiedadId}
        </small>
        <p className="text-tiny uppercase my-1">
          Fecha Inicio: <b>{fechaInicio.split("T")[0]}</b>
        </p>
        <p className="text-tiny uppercase my-1">
          Fecha Fin: <b>{fechaFin.split("T")[0]}</b>
        </p>
      </CardHeader>
      <CardBody className="overflow-visible py-2"></CardBody>
      <div className="flex justify-center items-center">
        {estado != "Expirada" ? (
          <Chip className="text-white font-bold" color="success">
            {estado}
          </Chip>
        ) : (
          <Chip className="text-black font-bold" color="warning">
            {estado}
          </Chip>
        )}
      </div>
    </Card>
  );
}
