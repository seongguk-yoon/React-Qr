import { Link } from "react-router-dom";
import { css } from '@emotion/css';

const Navigation = () => {
  return (
    <nav
      className={css`
        display: flex;
        height: 100px;
        max-width: 400px;
        justify-items: center;
        justify-content: space-between;
      `}
    >
      <div>
        <Link to="/">
          <h2> QR 코드</h2>
        </Link>
      </div>
      <div>
        <Link to="/QRscan">
          <h2> QR 스캔</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;