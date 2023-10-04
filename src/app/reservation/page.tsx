import VerticalDivider from "../../components/UI/VerticalDivider";
import NavBar from "@/components/UI/NavBar";

import ReservationList from "@/components/Reservation/ReservationList";

export default function Reservations() {

  return (
    <div>
      <NavBar isActive={"reservacion"} />
      <div className="w-full flex justify-center">
        <div className="w-1/2 h-full text-center my-10">
          <h2 className="text-xl">Past Reservations</h2>
          <div>
            <ReservationList />
          </div>
        </div>
        <div className="h-screen">
          <VerticalDivider />
        </div>
        <div className="w-1/2 h-full text-center my-10">
          <h2 className="text-xl">Now</h2>
        </div>
      </div>
    </div>
  );
}
