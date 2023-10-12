"use client";

import HorizontalDivider from "../UI/HorizontalDivider";
import { COMMENTS_ENDPOINT } from "@/consts";
import { Comentario } from "@/types/Comentario";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import { useState, useEffect } from "react";

export default function Comments() {
  const [comments, setComments] = useState<Comentario[]>();

  useEffect(() => {
    fetch(COMMENTS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2 mb-8">
        <h1 className="text-xl">Comentarios</h1>
        <Popover className="mt-2" color="warning" placement="bottom" showArrow={true}>
          <PopoverTrigger>
            <Button variant="solid" radius="full" size="sm" isIconOnly color="warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 192 512"
              >
                <style>color: #fff</style>
                <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
              </svg>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-xs">
                Para agregar un comentario debe haber reservado esta propiedad
                al menos una vez.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="w-11/12 h-fit min-h-unit-8 max-h-60 text-base flex flex-col items-start justify-start gap-x-8 overflow-y-auto border-1 rounded-lg">
        {comments && comments.length < 0 ? (
          comments.map((comentario, index) => (
            <div key={index}>
              <h3 className="font-bold p-2">{comentario?.nombre}</h3>
              <p className="py-4 text-justify px-2">{comentario?.texto}</p>
              {index < comments.length - 1 && <HorizontalDivider />}
            </div>
          ))
        ) : (
          <p className="my-8 self-center">
            {"No hay comentarios aquí todavía :)"}
          </p>
        )}
      </div>
    </div>
  );
}
