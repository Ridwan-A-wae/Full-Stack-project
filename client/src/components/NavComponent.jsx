import { Link } from "react-router-dom";
import { authenticate,logout } from "../service/authorize";

const NavComponent = () => {

  const handleLogout = () => {
    logout(() => (window.location.href = "/login"));
  };

  return (
    <nav>
      <ul style={{ justifyContent: "space-between" }} className="nav nav-tabs">
        <div style={{ display: "flex" }}>
          <li className="navitem pr-3 pt-3 pb-3">
            <Link to={"/"} className="nav-link">
              หน้าแรก
            </Link>
          </li>
          <li className="navitem pr-3 pt-3 pb-3">
            <Link to={"/blogs"} className="nav-link">
              อ่านบทความ
            </Link>
          </li>
          <li className="navitem pr-3 pt-3 pb-3">
            <Link to={"/create"} className="nav-link">
              เขียนบทความ
            </Link>
          </li>
        </div>
        <div>
          {!sessionStorage.token && ( // เช็คสถานะการเข้าสู่ระบบ
            <li style={{ justifyContent: "end" }} className="navitem pr-3 pt-3 pb-3">
                <Link className="btn btn-primary" to={"/login"} style={{ color: "white" }}>
                  เข้าสู่ระบบ
                </Link>
            </li>
          )}
          {sessionStorage.token && ( // เช็คสถานะการเข้าสู่ระบบ
            <li style={{ justifyContent: "end" }} className="navitem pr-3 pt-3 pb-3">
                <Link className="btn btn-primary"  onClick={handleLogout}  style={{ color: "white" }}>ออกจากระบบ</Link>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavComponent;
