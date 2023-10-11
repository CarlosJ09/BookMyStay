import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

import { CLIENTS_ENDPOINT } from "@/consts";

import { saveClient } from "../client/save";
import { updateClient } from "../client/update";
import { deleteClient } from "../client/delete";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new SVIX instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the type
  const eventType = evt.type;

  switch (eventType) {
    case "user.created":
      const clientData = new FormData();
      clientData.append("Id", evt.data.id);
      clientData.append("Nombre", evt.data.first_name);
      clientData.append("Apellido", evt.data.last_name || "a");
      clientData.append("Email", evt.data.email_addresses[0].email_address);
      clientData.append("PhoneNumber", "0000000000");
      clientData.append(
        "FechaRegistro",
        new Date().toISOString().split("T")[0]
      );
      
      saveClient(`${CLIENTS_ENDPOINT}/Register`, clientData);
      return new Response(`Cliente ${evt.data.id} creado con exito`, {
        status: 201,
      });

    case "user.updated":
      const clientData2 = {
        id: evt.data.id,
        nombre: evt.data.first_name,
        apellido: evt.data.last_name || "",
        email: evt.data.email_addresses[0].email_address,
        phoneNumber: "",
      };
      updateClient(CLIENTS_ENDPOINT, clientData2, clientData2.id);
      return new Response(`Cliente ${clientData2.id} actualizado con exito`, {
        status: 200,
      });

    case "user.deleted":
      const id = evt.data.id;
      deleteClient(CLIENTS_ENDPOINT, id);
      return new Response(`Cliente ${id} eliminado con exito`, { status: 200 });

    default:
      return new Response("Error occured", {
        status: 500,
      });
  }
}
