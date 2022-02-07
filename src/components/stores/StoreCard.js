import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import ReservationModal from "../reservations/ReservationModal";

const StoreCard = ({ store }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem", margin: "20px" }}>
        <Card.Img
          variant="top"
          src={store.image}
          style={{ width: "18rem", height: "18rem" }}
        />
        <Card.Body>
          <Card.Title>{store.name}</Card.Title>
          <Card.Text>{store.location}</Card.Text>
          <Button variant="outline-secondary" onClick={handleShow}>
            Make a reservation
          </Button>
        </Card.Body>
      </Card>

      <ReservationModal show={show} handleClose={handleClose} store={store} />
    </>
  );
};

export default StoreCard;
