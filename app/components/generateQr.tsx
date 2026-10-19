import React from 'react'
import QRCode from "qrcode"
const generateQr = (qr: string) => {
  return (
    QRCode.toDataURL(qr,
      {
        width: 1024,
        margin: 2,
        errorCorrectionLevel: "H"
      }
    )
  )
}

export default generateQr