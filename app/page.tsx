"use client"
import { Navbar } from "./components/navbar"
import { useState, useEffect } from "react"
import generateQr from "./components/generateQr"
import StrokeText from "@/components/StrokeText";

const page = () => {
  const [url, setUrl] = useState("https://suvam-dev.me")
  const [qrCode, setQrCode] = useState("");
  useEffect(() => {
    if (url.trim()) {
      generateQr(url).then(setQrCode);
    }
  }, [url])

  return (
    <div>
      <div className="flex flex-col px-2">
        <Navbar />
        <div className=" flex items-center flex-col">
          <StrokeText text="QR Scanner Generator" className="my-10 md:text-9xl max-md:text-3xl max-md:text-nowrap" />

          <input className="my-10 max-md:my-5 max-md:text-sm text-2xl px-7 py-4 rounded-4xl w-1/2 border-1 border-white/30 bg-white/05 border-dashed  mx-2 focus:outline-none  backdrop-blur-2xl shadow-lg focus:shadow-white/10 font-mono max-md:w-5/6 md:w-1/2" type="text" placeholder="Enter URL to generate QR code" value={url} onChange={(e) => setUrl(e.target.value)} />

          <div className="rounded-4xl mt-10 flex  justify-center p-2">
            {qrCode && <img src={qrCode} alt="QR Code" className="w-1/2 h-1/2 max-md:w-50 rounded-4xl max-md:rounded-2xl border-4 border-double border-amber-50" />}
          </div>
        </div>
        <div className="flex justify-center mt-7">
          {qrCode && <a href={qrCode} download="QRcode.png" className="bg-white border-2 border-dashed border-blue-100/60 cursor-pointer hover:border-blue-100/60  text-black px-5  py-3 rounded-2xl hover:shadow-lg w-1/4 hover:shadow-blue-100/50 font-bold hover:scale-105 transition-all duration-500 ease-in-out hover:bg-blue-600 hover:text-blue-200  mt-10 mb-20 flex justify-center max-md:w-1/2 max-md:mt-5 max-md:mb-5 max-md:text-sm max-md:bg-blue-600 max-md:text-white">
            Download QR Code
          </a>}
        </div>
      </div >
      <div className="relative w-full h-40">
        <div className="absolute bottom-0 w-full h-20 bg-white/10 backdrop-blur-2xl  flex items-center justify-center">
          <p className="text-xl font-mono text-white">Made with ❤️ by <a href="https://github.com/suvam-dev" className="text-cyan-400 font-semibold " target="_blank">suvam-dev </a></p>
        </div>
      </div>
    </div>
  )
}

export default page;