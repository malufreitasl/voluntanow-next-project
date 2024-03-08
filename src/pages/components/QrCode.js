import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCode = () => {
  const [url, setUrl] = useState("");
  const [value, setValue] = useState();

  const downloadQRCode = (e) => {
    e.preventDefault();
    setUrl(value);
  };

  const qrCodeEncoder = (e) => {
    setValue(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={200}
      level={"H"}
    />
  );

  return (
    <div className="qrcode__container">
      <div>{qrcode}</div>
      <div className="input__group">
        <form onSubmit={downloadQRCode}>
            <button type="submit" disabled={!value}></button>
        </form>
      </div>
    </div>
  );
};

export default QrCode;
