import instance from "./instance";

// Action Types
import * as actionType from "./types";

export const fetchReservations = () => async (dispatch) => {
  try {
    const res = await instance.get("/reservations");
    dispatch({
      type: actionType.FETCH_RESERVATIONS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createReservation =
  (reservation, navigate, handleClose) => async (dispatch) => {
    try {
      const res = await instance.post("/reservation", reservation);
      handleClose();
      navigate("/reservations");
      dispatch({
        type: actionType.CREATE_RESERVATION,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const reservationAccept = (reservationId) => async (dispatch) => {
  try {
    const res = await instance.post("/reservation/accept", reservationId);

    dispatch({
      type: actionType.ACCEPT_RESERVATION,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const reservationReject = (reservationId) => async (dispatch) => {
  try {
    const res = await instance.post("/reservation/reject", reservationId);

    dispatch({
      type: actionType.REJECT_RESERVATION,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
