"use client";

import Link from "next/link";
import React from "react";
import { LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

function Header() {
	const { data: session } = useSession();

	return (
		<header className="flex flex-wrap gap-2 justify-between items-center py-6">
			<div className="text-3xl font-medium">
				<Link href="/">1811 Labs Assignment 02</Link>
			</div>

			<nav className="flex items-center">
				<div className="flex gap-4">
					{session && (
						<button className="border-2 border-dashed rounded-md px-2 py-1 text-lg font-medium hover:bg-white/10">
							<Link href="/generate-joke">Generate</Link>
						</button>
					)}

					{!session ? (
						<button className="bg-white border-2 text-black rounded-md px-2 py-1 text-lg font-medium hover:bg-white/90">
							<Link href="/login">Login</Link>
						</button>
					) : (
						<button
							onClick={signOut}
							className="bg-white border-2 text-black rounded-md px-2 py-1 text-lg font-medium hover:bg-white/90"
						>
							<LogOut />
						</button>
					)}
				</div>
			</nav>
		</header>
	);
}

export default Header;
