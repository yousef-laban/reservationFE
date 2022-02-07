//components

//
import { useSelector } from "react-redux";
import { FlexStyleVer, Headers } from "../../styles";
import ReservationCard from "./ReservationCard";

const ReservationList = (props) => {
  const user = useSelector((state) => state.user.user);

  const reservations = useSelector((state) => state.reservations.reservations);
  const loading = useSelector((state) => state.reservations.loading);

  if (loading) return <h1>loading .. </h1>;

  const filteredStores = reservations
    .filter((reservation) => reservation.userId === user.id)
    .map((reservation) => (
      <ReservationCard key={reservation._id} reservation={reservation} />
    ));

  return (
    <>
      <Headers>Reservations : </Headers>
      <FlexStyleVer>{filteredStores}</FlexStyleVer>
    </>
  );
};

export default ReservationList;
