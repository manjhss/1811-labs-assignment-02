import React from "react";
import { Mail, Github, LinkedinIcon, Twitter, Instagram } from "lucide-react";
import SocialLinkButton from "./SocialLinkButton";

function Footer() {
	const navItems = [
		{
			icon: Github,
			url: "https://github.com/surendra-manjhi",
		},
		{
			icon: LinkedinIcon,
			url: "https://www.linkedin.com/in/surendra-manjhi",
		},
		{
			icon: Mail,
			url: "https://forms.gle/yKN5hXUxzd9bPrKb7",
		},
		{
			icon: Twitter,
			url: "https://twitter.com/manjhss",
		},
		{
			icon: Instagram,
			url: "https://instagram.com/manjhss",
		},
	];

	return (
		<footer className="py-6 mt-8 flex justify-center items-center gap-6">
			<ul className="flex flex-wrap items-center justify-center gap-6">
				<li className="text-2xl font-medium">manjhss</li>

				<li className="text-2xl font-medium">/</li>
				
				{navItems.map((item, index) => (
					<li className="flex" key={index}>
						<SocialLinkButton url={item.url}>
							<item.icon />
						</SocialLinkButton>
					</li>
				))}
			</ul>
		</footer>
	);
}

export default Footer;
