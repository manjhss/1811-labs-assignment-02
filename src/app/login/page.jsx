"use client";

import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Github } from "lucide-react";

function Login() {
	const router = useRouter();
	const { data: session } = useSession();

	if (session) {
		router.push("/generate-joke");
	}

	return (
		<div className="flex justify-center items-center gap-2 min-h-screen p-10">
			<div className="flex flex-col gap-2">
				<button
					className="flex gap-4 items-center border-2 border-dashed rounded-lg shadow-md max-w-xs px-6 py-2 text-lg font-medium text-white hover:bg-white/10"
					onClick={() => {
						signIn("github");
					}}
				>
					<Github />
					<span>Continue with Github</span>
				</button>
			</div>
		</div>
	);
}

export default Login;
