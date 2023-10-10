import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { DELETE_RESERVATION_ENDPOINT } from "../../consts";

import { deleteReservation } from "@/app/api/booking/delete";

import { Textarea } from "@nextui-org/react";

export default function ModalDelete(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { reservationId } = props;

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
                    deleteReservation(
                      `${DELETE_RESERVATION_ENDPOINT}/${reservationId}`
                    )
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
