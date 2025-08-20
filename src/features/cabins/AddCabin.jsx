import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="">
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add New Cabin
      </Button>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(isOpen => !isOpen)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(isOpen => !isOpen)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
