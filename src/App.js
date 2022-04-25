import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Main from "./router/main";
import Reader from './router/reader';


function App() {

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
      }}
    >
        <h1>React QR 테스트</h1>
  
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="QRscan" element={<Reader />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;