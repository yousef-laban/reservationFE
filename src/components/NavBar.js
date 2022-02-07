import { NavB, Logo, FlexStyle } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/action/authActions";

const NavBar = (props) => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handelLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <NavB className="navbar navbar-expand-lg navbar-light bg-light">
      <FlexStyle>
        <Logo to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Apple_Logo.svg/1719px-Apple_Logo.svg.png"
            alt="logo"
          ></img>
        </Logo>
        <h3> Authorised Service Provider</h3>
      </FlexStyle>
      <div>
        {user ? (
          <FlexStyle>
            {user.type === "USER" ? (
              <>
                <Link
                  to="/stores"
                  style={{
                    margin: "15px",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Stores
                </Link>

                <Link
                  to="/reservations"
                  style={{
                    margin: "15px",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Reservations
                </Link>
              </>
            ) : (
              <Link
                to="/requests"
                style={{
                  margin: "15px",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Requests
              </Link>
            )}
            <Link
              style={{ margin: "15px", color: "black", textDecoration: "none" }}
              onClick={handelLogout}
              to="/"
            >
              Logout
            </Link>
          </FlexStyle>
        ) : (
          <FlexStyle>
            <Link
              to="/signin"
              style={{ margin: "15px", color: "black", textDecoration: "none" }}
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              style={{ margin: "15px", color: "black", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </FlexStyle>
        )}
      </div>
    </NavB>
  );
};

export default NavBar;
