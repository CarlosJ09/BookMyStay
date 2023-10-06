"use client";

import { Card, CardBody, Button } from "@nextui-org/react";

export default function ReservationCard() {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[210px]"
      shadow="sm"
    >
      <CardBody>
        <div className="flex gap-6 items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10 w-44"
              color="primary"
              variant="solid"
            >
              Reservar
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
