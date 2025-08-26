import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';

import dinodev from "../../public/dinodev.svg"

export const metadata: Metadata = {
	title: "Dinosaur Development",
	description: "Looking for fun apps this is the place!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				<meta name="theme-color" content="#000000" />
			</head>
			<body className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
				<header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
					<div className="max-w-full mx-auto px-6 py-4 flex flex-row items-center gap-3">
						<a href="/">
							<Image src={dinodev} alt="catroon dinosaur" className="size-10"/>
						</a>
						<a href="/" className="text-2xl font-bold text-white">
							&lt;DinoDev/&gt;
						</a>
					</div>
				</header>
				<div className="px-10">
					{children}
					<br />
				</div>
			</body>
		</html>
	);
}
