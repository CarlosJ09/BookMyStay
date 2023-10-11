import { Card, CardBody, Button } from "@nextui-org/react";
import { CREATE_RESERVATION_ENDPOINT } from "@/consts";
import { Reserve } from "@/app/api/booking/reserve";
import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";

import Datepicker from "react-tailwindcss-datepicker";

import { useAuth } from "@clerk/nextjs";

export default function ReservationCard(props: any) {
  const { id, propiedadId, total } = props;
  const { userId, sessionId, getToken } = useAuth();

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const [selectedNights, setselectedNights] = useState<any>(0);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();

    const startCopy = new Date(value.startDate)

    const endDateCopy = new Date(value.startDate);
    const numNights = Number(selectedNights);

    if (!isNaN(numNights) && numNights > 0) {
      endDateCopy.setDate(startCopy.getDate() + numNights);
    }

    const startDateFormatted = startCopy.toISOString();
    const endDateFormatted = endDateCopy.toISOString();

    setStartDate(startDateFormatted);
    setEndDate(endDateFormatted);
  }, [selectedNights, value, startDate]);

  const handleDateSelection = (e: any) => {
    setselectedNights(e.target.value);
  };

  const reservationData = {
    clienteId: userId,
    propiedadId: propiedadId,
    fechaInicio: startDate ? startDate : "",
    fechaFin: endDate.split("T")[0],
    estado: "Disfruta el viaje",
  };

  return (
    <Card
      className="z-40 relative border-none bg-background/60 dark:bg-default-100/50 h-4/5 max-h-96 w-[400px]"
      shadow="sm"
    >
      <CardBody>
        <form className="h-full flex flex-col gap-6 justify-center items-center ">
          <Input
            isRequired
            type="number"
            min={0}
            label="Cantidad de noches"
            placeholder="0"
            labelPlacement="outside"
            value={selectedNights}
            onChange={(e) => handleDateSelection(e)}
          />
          <div>
            <div className="fixed my-2 z-50 flex flex-col overflow-visible">
              <p className="text-center">Fecha de entrada:</p>
              <Datepicker
                useRange={false}
                asSingle
                value={value}
                onChange={handleValueChange}
              />
            </div>
            <p className="mt-20">
              Fecha de salida: <b>{endDate ? endDate.split("T")[0] : new Date().toISOString()}</b>
            </p>
          </div>
          <p>Total: RD${(total * selectedNights).toFixed(2)}</p>
          <Button
            type="submit"
            disabled={selectedNights <= 0 || startDate == "1970-01-01T00:00:00.000Z" ? true : false}
            disableAnimation={selectedNights <= 0 || startDate == "1970-01-01T00:00:00.000Z" ? true : false}
            isIconOnly
            className={selectedNights <= 0 || startDate == "1970-01-01T00:00:00.000Z" ? "opacity-50 w-full" : "data-[hover]:bg-foreground/10 w-full"}
            color="primary"
            variant="solid"
            onClick={() => {
              if (startDate !== endDate) {
                Reserve(CREATE_RESERVATION_ENDPOINT, reservationData);
              }
            }}
          >
            Reservar
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
