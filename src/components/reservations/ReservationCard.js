import { useSelector } from "react-redux";
import { Badge, Card } from "react-bootstrap";
import moment from "moment";

const ReservationCard = ({ reservation }) => {
  const stores = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);

  if (loading) return <h1>loading .. </h1>;

  const store = stores.filter((store) => store._id === reservation.storeId)[0];

  return (
    <>
      <Card
        bg="Light"
        text="dark"
        style={{ width: "35%", margin: "20px" }}
        className="mb-2"
      >
        <Card.Header>
          {store.name}
          <Badge bg="warning" style={{ marginLeft: "30px" }}>
            {reservation.Status}
          </Badge>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {moment(reservation.date).utc().format("MMMM Do YYYY, h:mm:ss a")}
          </Card.Title>
          <Card.Text>Reservation Contact Info :{reservation.contact}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ReservationCard;
