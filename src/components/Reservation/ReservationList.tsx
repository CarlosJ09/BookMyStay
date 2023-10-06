"use client";

import { Reservacion } from "@/types/Reservacion";
import { RESERVATION_ENDPOINT } from "../../consts/index";
import ReservationCard from "./ReservationCard";

import { useState, useEffect } from "react";

export default function ReservationList() {
  const [reservations, setReservations] = useState<Reservacion[]>();

  useEffect(() => {
    fetch(RESERVATION_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
      });
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div>
        {reservations?.map((reservation) => (
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
        ))}
      </div>
    </div>
  );
}
