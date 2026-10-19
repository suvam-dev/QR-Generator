import { Navbar } from "../components/navbar";
import Link from "next/link";

const page = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div className="flex flex-col px-4 items-center">
                <Navbar />

                <h1 className="text-6xl md:text-9xl font-bold mt-10 max-md:mt-3 text-center">About</h1>

                <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-6 md:p-8 mt-10 max-w-2xl w-full text-center">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                        The main aim of this project is to make QR code generation completely{" "}
                        <span className="text-cyan-400 font-semibold">ad-free</span> and bypass the unnecessary ads,
                        popups, and subscriptions required by other free QR tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-2xl w-full">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                        <h3 className="text-xl font-bold mb-2 text-white flex max-md:justify-center">No Ads</h3>
                        <p className="text-gray-400 text-sm">
                            Clean and minimal interface with zero ads, banners, or popups.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                        <h3 className="text-xl font-bold mb-2 text-white flex max-md:justify-center">Instant & Free</h3>
                        <p className="text-gray-400 text-sm">
                            Generate and download high-quality QR codes in seconds without paying anything.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                        <h3 className="text-xl font-bold mb-2 text-white flex max-md:justify-center">Private</h3>
                        <p className="text-gray-400 text-sm">
                            Generated directly in your browser. No data tracking or link saving.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                        <h3 className="text-xl font-bold mb-2 text-white  flex max-md:justify-center"> Never Expire</h3>
                        <p className="text-gray-400 text-sm">
                            Permanent QR codes that work forever with no expiration dates.
                        </p>
                    </div>
                </div>


                <div className="mt-10 mb-10">
                    <Link
                        href="/"
                        className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                        Generate a QR Code
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <div className="relative w-full h-32">
                <div className="absolute bottom-0 w-full h-20 bg-white/10 backdrop-blur-2xl flex items-center justify-center">
                    <p className="text-xl font-mono text-white">
                        Made with ❤️ by{" "}
                        <a
                            href="https://github.com/suvam-dev"
                            className="text-cyan-400 font-semibold"
                            target="_blank"
                        >
                            suvam-dev
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;