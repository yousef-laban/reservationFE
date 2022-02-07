import * as actionType from "../action/types";

const initialState = {
  reservations: [],
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
        loading: false,
      };

    case actionType.CREATE_RESERVATION:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };

    case actionType.ACCEPT_RESERVATION:
      const updateReservation = action.payload;
      return {
        ...state,
        reservations: state.reservations.map((reservation) =>
          reservation._id === updateReservation._id
            ? updateReservation
            : reservation
        ),
      };

    case actionType.REJECT_RESERVATION:
      const updateReservation1 = action.payload;
      return {
        ...state,
        reservations: state.reservations.map((reservation) =>
          reservation._id === updateReservation1._id
            ? updateReservation1
            : reservation
        ),
      };

    default:
      return state;
  }
};

export default authReducer;
