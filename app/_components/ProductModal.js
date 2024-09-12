"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ProductImages from "./ProductImages";

export default function ProductModal({ product }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { name, category, description, images } = product;

  return (
    <>
      <Button
        size="sm"
        className="mr-1"
        color="success"
        variant="flat"
        onPress={onOpen}
      >
        產品介紹
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody>
                {/* <Image
                  alt="Card background"
                  className="rounded-xl object-cover"
                  src={images[0]}
                  width={400}
                /> */}
                <ProductImages product={product} />
                <p className="mt-4">{description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" variant="light" onPress={onClose}>
                  Ok!
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
