import VerticalDivider from "../../components/UI/VerticalDivider";
import NavBar from "@/components/UI/NavBar";

import ReservationList from "@/components/Reservation/ReservationList";
import ActiveReservation from "@/components/Reservation/ActiveReservations";
import { currentUser } from "@clerk/nextjs";

export default async function Reservations() {
  const user = await currentUser();

  return (
    <div>
      <NavBar isActive={"reservacion"} />
      <div className="w-full flex justify-center">
        <div className="w-1/2 h-full text-center my-10">
          <h2 className="text-xl">Past Reservations</h2>
          <div className="my-10">
            <ReservationList clienteId={user?.id} />
          </div>
        </div>
        <div className="h-screen">
          <VerticalDivider />
        </div>
        <div className="w-1/2 h-full text-center my-10">
          <h2 className="text-xl">Now</h2>
          <div className="my-10">
            <ActiveReservation clienteId={user?.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
