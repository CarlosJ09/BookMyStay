"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Propiedad } from "@/types/Propiedad";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

export default function PropertyCard(props: Propiedad): JSX.Element {
  const { id, nombre, imagen,  descripcion, direccion, tipo, propietarioId, precioPorNoche, numeroDeHabitaciones } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  const router = useRouter();

  const toggleLoad: any = () => {
    setIsLoaded(!isLoaded);
  };

  return (
    <Card
      onPress={() => router.push(`/hotel/${id}`)}
      isPressable
      className="w-72 py-4"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{nombre}</h4>
        <small className="text-default-500">${precioPorNoche} noche</small>
        <p className="text-tiny uppercase font-bold overflow">{direccion}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Skeleton isLoaded={isLoaded} className="object-cover rounded-xl">
          <Image
            onLoad={toggleLoad}
            alt={`Hotel ${nombre}`}
            className="bg-cover rounded-xl"
            src={imagen}
            width={270}
          />
        </Skeleton>
      </CardBody>
    </Card>
  );
}
