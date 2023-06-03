const toggleMenu = () => {
	document.body.classList.toggle("open");
};

function showFunction1() {
	document.querySelector(".front-end-message").style.display = "block";
	document.querySelector(".cloud-eng-message").style.display = "none";
	document.querySelector(".tech-enth-message").style.display = "none";

	document.querySelector("#frontEndBtn").style.color = "#CEA76F";
	document.querySelector("#cloudEngBtn").style.color = "white";
	document.querySelector("#techEnthBtn").style.color = "white";

	document.querySelector("#frontEndBtn").style.fontSize = "50px";
	document.querySelector("#cloudEngBtn").style.fontSize = "40px";
	document.querySelector("#techEnthBtn").style.fontSize = "40px";
}

function showFunction2() {
	document.querySelector(".cloud-eng-message").style.display = "block";
	document.querySelector(".front-end-message").style.display = "none";
	document.querySelector(".tech-enth-message").style.display = "none";

	document.querySelector("#frontEndBtn").style.color = "white";
	document.querySelector("#cloudEngBtn").style.color = "#CEA76F";
	document.querySelector("#techEnthBtn").style.color = "white";

	document.querySelector("#frontEndBtn").style.fontSize = "40px";
	document.querySelector("#cloudEngBtn").style.fontSize = "50px";
	document.querySelector("#techEnthBtn").style.fontSize = "40px";
}

function showFunction3() {
	document.querySelector(".tech-enth-message").style.display = "block";
	document.querySelector(".front-end-message").style.display = "none";
	document.querySelector(".cloud-eng-message").style.display = "none";

	document.querySelector("#frontEndBtn").style.color = "white";
	document.querySelector("#cloudEngBtn").style.color = "white";
	document.querySelector("#techEnthBtn").style.color = "#CEA76F";

	document.querySelector("#frontEndBtn").style.fontSize = "40px";
	document.querySelector("#cloudEngBtn").style.fontSize = "40px";
	document.querySelector("#techEnthBtn").style.fontSize = "50px";
}

// const frontEndBtn = document.querySelector("#frontEndBtn");
// const cloudEngBtn = document.querySelector("#cloudEngBtn");
// const techEnthBtn = document.querySelector("#techEnthBtn");

// frontEndBtn.addEventListener("click", () => showFunction1());
// cloudEngBtn.addEventListener("click", showFunction2);
// techEnthBtn.addEventListener("click", showFunction3);

const slider = document.querySelector(".carousel");

let isDown = false;
let startX;
let scrollLeft;

xfunction = () => {
	isDown = true;
	slider.classList.add("active");
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
};

slider.addEventListener();
// slider.addEventListener("mouseleave", (_) => {
// 	isDown = false;
// 	slider.classList.remove("active");
// 	console.log("clicked");
// });
// slider.addEventListener("mouseup", (_) => {
// 	isDown = false;
// 	slider.classList.remove("active");
// });
// slider.addEventListener("mousemove", (e) => {
// 	if (!isDown) return;
// 	e.preventDefault();
// 	const x = e.pageX - slider.offsetLeft;
// 	const SCROLL_SPEED = 3;
// 	const walk = (x - startX) * SCROLL_SPEED;
// 	slider.scrollLeft = scrollLeft - walk;
// });
