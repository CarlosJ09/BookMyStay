import { NextApiRequest, NextApiResponse } from "next";
import { currentUser } from "@clerk/nextjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const user = await currentUser();
      res.status(200).json(user);
    } catch (error) {
      console.error("Error obteniendo el usuario actual:", error);
      res.status(500).json({ error: "Error obteniendo el usuario actual" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
