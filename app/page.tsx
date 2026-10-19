import { Navbar } from "./components/navbar"

const page = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="min-h-screen flex items-center flex-col">
        <div className="my-10 text-9xl">QR Scanner Generator</div>
        <input className="my-10 text-2xl px-7 py-4 rounded-4xl w-1/2 border-1 border-white/30 bg-white/05 border-dashed  focus:outline-none  backdrop-blur-2xl shadow-lg focus:shadow-white/10 font-mono" type="text" placeholder="Enter URL to generate QR code" />
        <div className="w-120 h-120 bg-white/50 rounded-3xl mt-10 flex items-center justify-center">QR CODE IMAGE</div>
      </div>
      <button className="bg-white mt-10 w-1/4 self-center border-1 border-dashed border-slate-900 hover:border-white/60 text-black px-5  py-3 rounded-2xl hover:shadow-lg hover:shadow-blue-100/50 mb-20 font-bold hover:scale-105 transition-all duration-400 ease-in-out hover:text-white hover:bg-blue-700">Download QR</button>
    </div>
  )
}

export default page;