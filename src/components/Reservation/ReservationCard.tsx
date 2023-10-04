"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Reservacion } from "@/types/Reservacion";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

export default function ReservationCard(props: Reservacion): JSX.Element {
  const { id, clienteId, propiedadId,  fechaInicio, fechaFin, estado, total } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  const router = useRouter();

  const toggleLoad: any = () => {
    setIsLoaded(!isLoaded);
  };

  return (
    <Card
      onPress={() => router.push(`/reservation/${id}`)}
      isPressable
      className="w-96 py-4"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{clienteId}</h4>
        <small className="text-default-500">${propiedadId} noche</small>
        <p className="text-tiny uppercase font-bold">{fechaInicio}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {/* <Skeleton isLoaded={isLoaded} className="object-cover rounded-xl">
          <{Image
            onLoad={toggleLoad}
            alt={`Hotel ${nombre}`}
            className="object-cover rounded-xl"
            src={imagen}
            width={270}
          />}
        </Skeleton> */}
      </CardBody>
    </Card>
  );
}
