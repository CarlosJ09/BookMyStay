"use client";

import { Reservacion } from "@/types/Reservacion";
import { RESERVATION_ENDPOINT } from "../../consts/index";
import ReservationCard from "./ReservationCard";
import { Spinner } from "@nextui-org/react";

import { useState, useEffect } from "react";

export default function ActiveReservation(props: any) {
  const { clienteId } = props;
  const [reservations, setReservations] = useState<Reservacion[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${RESERVATION_ENDPOINT}/${clienteId}`)
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
        setIsLoading(false);
      });
  }, [clienteId]);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-6">
        {isLoading ? (
          <Spinner />
        ) : reservations?.filter(
            (reservation) => reservation.estado === "Disfruta el viaje"
          ).length === 0 || !reservations ? (
          <p className="mt-32 text-lg text-danger-500">
            No hay reservaciones activas.
          </p>
        ) : (
          reservations
            ?.filter(
              (reservation) =>
                reservation.estado === "Disfruta el viaje" ||
                reservation.estado === "Prepara tus maletas"
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
