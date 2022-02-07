import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Card } from "react-bootstrap";
import moment from "moment";
import {
  reservationAccept,
  reservationReject,
} from "../../store/action/reservationActions";

const RequestCard = ({ reservation }) => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);
  const _user = useSelector((state) => state.user.user);

  const loading = useSelector((state) => state.user.loading);

  if (loading) return <h1>loading .. </h1>;

  const user = users.filter((user) => user._id === reservation.userId)[0];

  const handelAccept = (event) => {
    event.preventDefault();
    dispatch(reservationAccept({ reservationId: reservation._id }));
  };

  const handelReject = (event) => {
    event.preventDefault();
    dispatch(reservationReject({ reservationId: reservation._id }));
  };

  return (
    <>
      <Card
        bg="Light"
        text="dark"
        style={{ width: "35%", margin: "20px" }}
        className="mb-2"
      >
        <Card.Header>
          {_user.name}
          <Badge bg="secondary" style={{ marginLeft: "30px" }}>
            {reservation.Status}
          </Badge>
        </Card.Header>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <br />
          <Card.Text>
            Date :
            {moment(reservation.date).utc().format("MMMM Do YYYY, h:mm:ss a")}
            <Card.Text>
              Reservation Contact Info :{reservation.contact}
            </Card.Text>
          </Card.Text>
          <Button
            variant="success"
            style={{ marginRight: "10px" }}
            onClick={handelAccept}
          >
            Accept
          </Button>
          <Button variant="danger" onClick={handelReject}>
            Reject
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default RequestCard;
