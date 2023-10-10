import { currentUser } from "@clerk/nextjs";
import Home from "../../components/Hotel/Home";

export default async function Reservations() {
  const user = await currentUser();

  return (
    <div>
      <Home idd={user?.id} />
    </div>
  );
}
