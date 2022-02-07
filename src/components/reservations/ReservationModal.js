import { Modal } from "react-bootstrap";

import Form from "./Form";

const ReservationModal = ({ show, handleClose, store }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>New Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form show={show} handleClose={handleClose} store={store} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReservationModal;
