import VerDivider from "../../components/UI/VerDivider";

export default function Reservation() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 h-full text-center my-10">
        <h2 className="text-xl">Past Reservations</h2>
      </div>
      <div className="h-screen">
        <VerDivider />
      </div>
      <div className="w-1/2 h-full text-center my-10">
        <h2 className="text-xl">Now</h2>
      </div>
    </div>
  );
}
