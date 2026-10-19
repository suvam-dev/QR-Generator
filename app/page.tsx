"use client"
import { Navbar } from "./components/navbar"
import { useState, useEffect } from "react"
import generateQr from "./components/generateQr"
import StrokeText from "@/components/StrokeText";

const page = () => {
  const [url, setUrl] = useState("https//suvam-dev.me")
  const [qrCode, setQrCode] = useState("");
  useEffect(() => {
    if (url.trim()) {
      generateQr(url).then(setQrCode);
    }
  }, [url])

  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="min-h-screen flex items-center flex-col">
        <StrokeText text="QR Scanner Generator" className="my-10 text-9xl" />
        <input className="my-10 text-2xl px-7 py-4 rounded-4xl w-1/2 border-1 border-white/30 bg-white/05 border-dashed  focus:outline-none  backdrop-blur-2xl shadow-lg focus:shadow-white/10 font-mono" type="text" placeholder="Enter URL to generate QR code" value={url} onChange={(e) => setUrl(e.target.value)} />
        <div className="w-120 h-120 bg-white/10 border-double border-3 rounded-4xl mt-10 flex items-center justify-center p-2">
          {qrCode && <img src={qrCode} alt="QR Code" className="w-full rounded-4xl" />}
        </div>
      </div>
      <div className="flex justify-center">
        {qrCode && <a href={qrCode} download="QRcode.png" className="bg-white border-2 border-dashed border-slate-600 hover:border-white/80  text-black px-5  py-3 rounded-2xl hover:shadow-lg w-1/4 hover:shadow-gray-400/50 font-bold hover:scale-105 transition-all duration-400 ease-in-out hover:bg-blue-600 hover:text-white  mt-10 mb-20 flex justify-center">
          Download QR Code
        </a>}
      </div>
    </div >
  )
}

export default page;