import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Main from "./router/main";
import Qrscan from './router/qrscan';
import { css } from '@emotion/css';


function App() {

  return (
    <div
      className={css`
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
      `}
    >
      <h1>React QR 테스트</h1>

      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="QRscan" element={<Qrscan />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;