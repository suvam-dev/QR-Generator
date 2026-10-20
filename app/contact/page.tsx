"use client";

import { Navbar } from "../components/navbar";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/suvam-dev",
        icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://instagram.com/suvam.iitkgp",
        icon: (
            <svg
                className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/suvam-ghosh-full-stack-ai-automation/?isSelfProfile=true",
        icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
        ),
    },
    {
        name: "Email",
        href: "mailto:suvam.iitkgp@gmail.com",
        icon: (
            <svg
                className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        name: "Portfolio",
        href: "https://suvam-dev.me",
        icon: (
            <svg
                className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
            </svg>
        ),
    },
];

const page = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-black text-white px-4">
            <Navbar />

            <main className="w-full max-w-2xl flex flex-col items-center flex-1 mt-10 max-md:mt-20 py-4">
                {/* Heading */}
                <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-center tracking-tight">
                    Contact
                </h1>

                {/* Message Card */}
                <div className="border border-white/20 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 mt-5 sm:mt-8 w-full text-center shadow-lg shadow-black/40">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                        Let&apos;s Connect &amp; Collaborate
                    </h2>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4">
                        Have feedback, a feature suggestion, or spotted a bug? Whether you want to discuss a project,
                        contribute, or just say hello, feel free to reach out!
                    </p>
                    <a
                        href="mailto:suvam.iitkgp@gmail.com"
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/5 border border-white/15 text-cyan-400 font-mono text-xs sm:text-sm md:text-base hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 max-w-full truncate"
                    >
                        suvam.iitkgp@gmail.com
                    </a>
                </div>

                {/* Social Icons Row */}
                <div className="mt-10 max-md:mt-15 flex gap-5 max-md:gap-3 sm:gap-5 md:gap-8 items-center justify-center">
                    {socialLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.name}
                            title={item.name}
                            className="rounded-full bg-white/10 hover:bg-white/25 border border-white/20 p-3 sm:p-4 text-white hover:text-cyan-300 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/20 shrink-0"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default page;