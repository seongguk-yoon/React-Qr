import React from "react";
import QRCode from "qrcode.react"
import { css } from '@emotion/css';


function Qrcode() {
  return (
    <div className={css`text-align: center`}>
      <h1>스캔용 QR </h1>
      <div>
        <QRCode
         value='https://github.com/'
         style = {{ width : "280px"  , height : "280px"}}
        />
      </div>
     
    </div>
  );
}

export default Qrcode;
