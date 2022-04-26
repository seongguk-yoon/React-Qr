import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { css } from "@emotion/css";

function Qrscantest(props) {
  const [qrdata, setQrdata] = useState("loading...");
  console.log("확인", qrdata);

  return (
    <div
      className={css`
        text-align: center;
        padding: 2rem;
        background: lightgray;
      `}
    >
      <h1>QR 카메라스캔</h1>

      <QrReader
        //   카메라 전면 전환  (environment), 기기별 지원하는 경우에만 확인가능  
        constraints={{ facingMode: "environment" }}
        scanDelay={500}
        containerStyle={{ width: "100%", background: "white" }}
        videoContainerStyle={{ width: "100%", background: "white" }}
        onResult={(result, error) => {
          if (!!result) {
            setQrdata(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />

      <p>{qrdata}</p>
    </div>
  );
}

export default Qrscantest;
