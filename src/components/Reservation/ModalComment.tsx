import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { COMMENTS_ENDPOINT } from "../../consts";

import { saveComment } from "@/app/api/comment/comment";

import { Textarea } from "@nextui-org/react";

import { useState } from "react";

export default function ModalDelete(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { propiedadId, clienteId } = props;

  const [comentario, setComentario] = useState('');

  const handleChangeComentario = (event: any) => {
    setComentario(event.target.value);
    console.log(comentario)
  };

  const commentData = {
    id: {},
    clienteId: clienteId,
    texto: comentario,
    propiedadId: propiedadId,
    fecha: "2023-10-10T15:06:12.338Z",
  };

  return (
    <>
      <Button variant="bordered" color="success" onPress={onOpen}>
        Comentar
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Agregar Comentario
              </ModalHeader>
              <ModalBody>
                <Textarea
                  label="Comentario"
                  labelPlacement="outside"
                  placeholder="Introduce tu comentario aquí"
                  className="max-w-xs"
                  onChange={(e) => handleChangeComentario(e)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="success"
                  variant="light"
                  onPress={() =>
                    saveComment(COMMENTS_ENDPOINT, commentData)
                  }
                >
                  Agregar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
