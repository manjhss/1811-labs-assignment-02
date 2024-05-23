"use client";

import React, { useEffect, useState } from "react";
import run from "@/helpers/getJokeData";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function GenerateJoke() {
	const [loading, setLoading] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [jokeData, setJokeData] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();
	const { data: session } = useSession();

	useEffect(() => {
		if (!session) {
			router.push("/login");
		}
	}, [session, router]);

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const getJokeData = async (prompt) => {
		try {
			setError("");
			setLoading(true);
			const data = await run(prompt);
			setJokeData(data.response.text());
		} catch (error) {
			setError(error.message);
			setJokeData("");
		} finally {
			setLoading(false);
			setInputValue("");
		}
	};

	return (
		<section className="flex justify-center items-center h-screen">
			<div className="p-4 w-[600px] border-2 rounded-lg space-y-6">
				<h2 className="text-3xl font-bold">AI JOKE GENERATOR TOOL</h2>

				<div className="flex flex-col gap-4">
					<div className="space-y-2">
						<input
							type="text"
							name="joke"
							id="joke"
							className="bg-transparent border-2 rounded-md p-2 block w-full text-lg"
							placeholder="e.g manjhss"
							onChange={handleChange}
						/>
					</div>

					<button
						onClick={() => getJokeData(inputValue)}
						className="bg-white text-black w-full rounded-md p-2 text-lg font-medium hover:bg-white/90"
					>
						{!loading ? "Generate" : "Loading..."}
					</button>
				</div>

				{(jokeData || error) && (
					<div className="text-lg">
						{jokeData && <div>{jokeData}</div>}
						{error && (
							<div className="text-red-600 break-words">
								{error}
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	);
}

export default GenerateJoke;
