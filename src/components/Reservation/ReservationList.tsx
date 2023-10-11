"use client";

import { Reservacion } from "@/types/Reservacion";
import { RESERVATION_ENDPOINT } from "../../consts/index";
import ReservationCard from "./ReservationCard";
import { Spinner } from "@nextui-org/react";

import { useState, useEffect } from "react";

export default function ReservationList(props: any) {
  const { clienteId } = props;
  const [reservations, setReservations] = useState<Reservacion[]>();
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    setIsLoading(true); // Set loading state to true when fetching data
    fetch(`${RESERVATION_ENDPOINT}/${clienteId}`)
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
        setIsLoading(false); // Set loading state to false after data is fetched
      });
  }, [clienteId]); // Add clienteId as a dependency to the useEffect

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-6">
        {isLoading ? (
          <Spinner />
        ) : reservations?.length === 0 || !reservations ? (
          <p className="mt-32 text-lg text-danger-500">
            No cuenta con ninguna reservación hasta la fecha.
          </p>
        ) : (
          reservations
            ?.filter(
              (reservation) =>
                reservation.estado === "Eliminado" ||
                reservation.estado === "Cancelada" ||
                reservation.estado === "Expirada"
            )
            .map((reservation) => (
              <ReservationCard
                key={reservation.id}
                id={reservation.id}
                clienteId={reservation.clienteId}
                propiedadId={reservation.propiedadId}
                fechaInicio={reservation.fechaInicio}
                fechaFin={reservation.fechaFin}
                estado={reservation.estado}
                total={reservation.total}
              ></ReservationCard>
            ))
        )}
      </div>
    </div>
  );
}
