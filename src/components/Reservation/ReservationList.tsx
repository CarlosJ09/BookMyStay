"use client";

import { Reservacion } from "@/types/Reservacion";
import { RESERVATION_ENDPOINT } from "../../consts/index";
import ReservationCard from "./ReservationCard";

import { useState, useEffect } from "react";

export default function ReservationList(props: any) {
  const { clienteId } = props;
  const [reservations, setReservations] = useState<Reservacion[]>();

  useEffect(() => {
    fetch(`${RESERVATION_ENDPOINT}/${clienteId}`)
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
      });
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div>
        {reservations?.length === 0 || !reservations ? (
          <p className="mt-32 text-lg">
            No cuenta con ninguna reservación hasta la fecha.
          </p>
        ) : (
          reservations
            ?.filter((reservation) => reservation.estado != "Disfruta el viaje")
            .map((reservation) => (
              <div>
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
              </div>
            ))
        )}
      </div>
    </div>
  );
}
