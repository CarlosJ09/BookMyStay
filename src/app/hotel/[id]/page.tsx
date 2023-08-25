import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Hotel({ params }: Params) {
  return <div>hotel {params.id}</div>;
}
