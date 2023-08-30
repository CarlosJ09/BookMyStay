import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import NavBar from "@/components/UI/NavBar";

export default function Hotel({ params }: Params) {
  return (
    <div>
      <NavBar />
      <div>hotel {params.id}</div>
    </div>
  );
}
