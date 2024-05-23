import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
	return (
		<main className="h-screen ">
			<div className="md:w-[600px] lg:pl-12 space-y-12 pt-24">
				<h2 className="text-5xl font-bold">
					Tickle Your Funny Bone with AI-Generated Jokes!
				</h2>

				<p className="text-white/80 text-lg">
					Welcome to our AI Joke Generator, where laughter meets
					technology! Our state-of-the-art AI analyzes thousands of
					jokes to craft the perfect punchline just for you.
				</p>

				<button className="bg-white border-2 text-black rounded-md px-2 py-1 text-lg font-medium">
					<Link href="/generate-joke" className="flex items-center gap-2 hover:gap-3">
						Get Started <ArrowRight />
					</Link>
				</button>
			</div>
		</main>
	);
}
