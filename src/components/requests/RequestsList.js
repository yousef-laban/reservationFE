//components

//
import { useSelector } from "react-redux";
import { FlexStyleVer, Headers } from "../../styles";
import RequestCard from "./RequestCard";

const RequestsList = (props) => {
  const user = useSelector((state) => state.user.user);

  const reservations = useSelector((state) => state.reservations.reservations);
  const loading = useSelector((state) => state.reservations.loading);

  if (loading) return <h1>loading .. </h1>;

  const filteredRequests = reservations
    .filter((reservation) => reservation.storeId === user.id)
    .map((reservation) => (
      <RequestCard key={reservation._id} reservation={reservation} />
    ));

  return (
    <>
      <Headers>Requests : </Headers>
      <FlexStyleVer>{filteredRequests}</FlexStyleVer>
    </>
  );
};

export default RequestsList;
