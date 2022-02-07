import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createReservation } from "../../store/action/reservationActions";

const Form = ({ show, handleClose, store }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const newReservation = {
    storeId: store._id,
    userId: user.id,
    date: "",
    contact: "",
  };

  const resetForm = () => {
    setReservation({
      storeId: "store._id",
      userId: "user.id",
      date: "",
      contact: "",
    });
  };

  const [reservation, setReservation] = useState(newReservation);

  const handleChange = (event) => {
    setReservation({ ...reservation, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createReservation(reservation, navigate, handleClose));
    resetForm();
  };
  return (
    <>
      <form onSubmit={handleSubmit} style={{ padding: "15px" }}>
        <h5> Reservation at {store.name}</h5>
        <br />

        <div className="form-group">
          <label> Choose Date</label>
          <input
            className="form-control"
            type="datetime-local"
            name="date"
            value={reservation.date}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="form-group">
          <label> Contact Information</label>
          <input
            className="form-control"
            placeholder="+9267********"
            type="text"
            name="contact"
            onChange={handleChange}
          />
        </div>

        <br />
        <br />

        <button type="submit" className="btn btn-secondary" value="create">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
