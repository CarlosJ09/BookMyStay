"use client";

import { useEffect, useState } from "react";
import { Hotel } from "@/types/Hotel";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

export default function BooknigCard(props: Hotel): JSX.Element {
  const { hotelName, location, price, image } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  const toggleLoad: any = () => {
    setIsLoaded(!isLoaded);
  };

  return (
    <Card isPressable className="w-72 py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{hotelName}</h4>
        <small className="text-default-500">${price}</small>
        <p className="text-tiny uppercase font-bold">{location}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Skeleton isLoaded={isLoaded} className="object-cover rounded-xl">
          <Image
            onLoad={toggleLoad}
            alt={hotelName}
            className="object-cover rounded-xl"
            src={image}
            width={270}
          />
        </Skeleton>
      </CardBody>
    </Card>
  );
}
