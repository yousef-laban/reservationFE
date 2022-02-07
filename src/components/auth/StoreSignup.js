import { FormCenter } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

//Actions
import { signup } from "../../store/action/authActions";

const StoreSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newUser = {
    username: "",
    password: "",
    email: "",
    name: "",
    location: "",
    image: "",
    type: "AASP",
  };

  const [user, setUser] = useState(newUser);
  const [show, setShow] = useState(false);

  const resetForm = () => {
    setUser({
      username: "",
      password: "",
      email: "",
      name: "",
      location: "",
      image: "",
      type: "AASP",
    });
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setUser({ ...user, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signup(user, navigate, setShow));

    resetForm();
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <FormCenter onSubmit={handleSubmit}>
        <h3> Creat New Store</h3>
        <br />

        <div class="col-auto">
          <label class="sr-only" for="inlineFormInputGroup">
            Username :
          </label>
          <div class="input-group ">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroup"
              placeholder="Username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Store name : </label>
          <input
            className="form-control"
            placeholder="Enter your name "
            type="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>E-mail: </label>
          <input
            className="form-control"
            placeholder="Enter youe email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>password : </label>
          <input
            className="form-control"
            placeholder="Enter the Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Location : </label>
          <input
            className="form-control"
            type="location"
            name="location"
            value={user.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Image : </label>
          <input
            className="form-control"
            type="file"
            name="image"
            onChange={handleImage}
            alt="store image"
          />
        </div>

        <br />
        <button type="submit" className="btn btn-secondary" value="Creat">
          Creat
        </button>
      </FormCenter>

      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Something Went Wrong !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pleas try again</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StoreSignup;
