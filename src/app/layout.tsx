import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';
import Link from 'next/link'

import dinodev from "../../public/dinodev.svg"

import { User } from 'lucide-react';

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
				<header className="bg-black/20 backdrop-blur-sm border-b border-white/10 flex flex-row">
					<div className="max-w-full mr-auto px-6 py-4 flex flex-row items-center gap-3">
						<Link href="/">
							<Image src={dinodev} alt="cartoon dinosaur" className="size-10"/>
						</Link>
						<Link href="/" className="text-2xl font-bold text-white">
							&lt;DinoDev/&gt;
						</Link>
					</div>
					<div className="px-6 py-4 flex items-center">
						<Link href="/about-me" >
							<User className="text-white md:stroke-[3px] stoke-[2px] size-7"></User>
						</Link>
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
