import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "300px",
        height: "70px",
      }}
    >
    <div>
      <Link to="/">QR 코드</Link>
    </div>
    <div>
      <Link to="/QRscan">QR 스캔</Link>
    </div>
    </nav>
  );
};

export default Navigation;