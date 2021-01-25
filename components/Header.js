// components/Header.js

import Link from 'next/link'

if (typeof (document) !== "undefined") {
	
	// script rendered DOM

	const 	body = document.querySelector("body"),
			nav = document.querySelector("nav"),
			menuBtn = document.getElementById("menu");

	// nav menu button
	menuBtn.addEventListener("click", function() {

		this.classList.toggle("open");
		nav.classList.toggle("open");
		document.querySelector(".layer").classList.toggle("layer-active");
		body.classList.toggle("remove-scrollbar");

		document.querySelectorAll('nav > ul > li > a').forEach(item => {
			item.addEventListener('click', event => {
			menuBtn.click();
			})
		});

	});
}


const Header = () => (
	<header>
		<div class="container">

			<Link href="/"><a id="logo" aria-label="homepage" accessKey="1">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="415.08 127.31 336.35 286.19 256.55 127.31 159.71 127.31 159.71 300.75 94.84 300.75 94.84 51.19 0.01 51.19 0.01 383.94 159.71 383.94 159.71 383.96 254.54 383.96 254.54 325.05 302.1 418.46 369.61 418.46 417.17 325.05 417.17 460.06 512 460.06 512 127.31 415.08 127.31"/></svg>Lucas Menezes
			</a></Link>

			<button id="menu" type="button">Menu<div class="hamburger"></div></button>
			<nav>
				<ul>
					<li><Link href="/#about" accessKey="2"><a>About</a></Link></li>
					<li><Link href="/#work" accessKey="3"><a>Work</a></Link></li>
					<li><Link href="/#contact" accessKey="4"><a>Contact</a></Link></li>
					{/* <li><a href="/blog" accessKey="5">Blog</a></li> */}
				</ul>
			</nav>
			<div class="layer"></div>
		
		</div>
	</header>
);
  
export default Header;