"use client";

import { Card, CardBody, Button } from "@nextui-org/react";

import { RESERVATION_ENDPOINT } from "@/consts";
import { Reserve } from "@/app/api/booking/reserve";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import localeEn from 'air-datepicker/locale/en';

export default function ReservationCard() {
  new AirDatepicker("#AirDatepicker", {
    range: true,
    multipleDatesSeparator: ' - ',
    dateTimeSeparator: "/",
    locale: localeEn
  });

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 h-4/5 w-[600px]"
      shadow="sm"
    >
      <CardBody>
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-xl font-bold">Ingresar rango de fecha</h2>
            <input type="text" id="AirDatepicker" className="form-control" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10 w-44"
              color="primary"
              variant="solid"
              /* onClick={() => Reserve(RESERVATION_ENDPOINT,"")} */
            >
              Reservar
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
