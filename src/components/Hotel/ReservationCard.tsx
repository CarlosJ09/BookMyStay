import { Card, CardBody, Button } from "@nextui-org/react";
import { RESERVATION_ENDPOINT } from "@/consts";
import { Reserve } from "@/app/api/booking/reserve";
import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function ReservationCard(props: any) {
  const { id, propiedadId, total } = props;

  const [selectedDate, setSelectedDate] = useState<any>(0);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();

    const startDateCopy = new Date(today);

    const endDateCopy = new Date(today);
    const numNights = Number(selectedDate);

    if (!isNaN(numNights) && numNights > 0) {
      endDateCopy.setDate(today.getDate() + numNights);
    }

    const startDateFormatted = startDateCopy.toISOString();
    const endDateFormatted = endDateCopy.toISOString();

    setStartDate(startDateFormatted);
    setEndDate(endDateFormatted);
  }, [selectedDate]);

  const handleDateSelection = (e: any) => {
    setSelectedDate(e.target.value);
  };

  const reservationData = {
    id: id,
    clienteId: "",
    propiedadId: propiedadId,
    fechaInicio: startDate, // Usar startDate en lugar de ""
    fechaFin: endDate, // Usar endDate en lugar de ""
    estado: "activo",
    total: total,
  };

  return (
    <Card
      className="border-none bg-background/60 dark:bg-default-100/50 h-4/5 max-h-96 w-[400px]"
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
            value={selectedDate}
            onChange={(e) => handleDateSelection(e)}
          />
          <div>
            <p>
              Fecha de entrada: <b>{startDate.split("T")[0]}</b>
            </p>
            <p>
              Fecha de entrega: <b>{endDate.split("T")[0]}</b>
            </p>
          </div>
          <p>Total: RD${(total * selectedDate).toFixed(2)}</p>
          <Button
            type="submit"
            isIconOnly
            className="data-[hover]:bg-foreground/10 w-full"
            color="primary"
            variant="solid"
            onClick={() => {
              if (startDate !== endDate) {
                Reserve(RESERVATION_ENDPOINT, reservationData);
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
