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

export default function ModalDelete(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { reservationId } = props;

  return (
    <>
      <Button variant="bordered" color="danger" onPress={onOpen}>
        Cancelar
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cancelar Reservación
              </ModalHeader>
              <ModalBody>
                <p>
                  Esta a punto de cancelar esta reservación, si la cancela no
                  podrá deshacer este cambio y su dinero no será rembolsado.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() =>
                    deleteReservation(
                      `${DELETE_RESERVATION_ENDPOINT}/${reservationId}`
                    )
                  }
                >
                  Eliminar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
