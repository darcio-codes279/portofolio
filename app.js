const toggleMenu = () => {
	document.body.classList.toggle("open");
};

function showFunction1() {
	document.querySelector(".front-end-message").style.display = "block";
	document.querySelector(".cloud-eng-message").style.display = "none";
	document.querySelector(".tech-enth-message").style.display = "none";
	document.querySelector(".speaker-message").style.display = "none";
}

function showFunction2() {
	document.querySelector(".cloud-eng-message").style.display = "block";
	document.querySelector(".front-end-message").style.display = "none";
	document.querySelector(".tech-enth-message").style.display = "none";
	document.querySelector(".speaker-message").style.display = "none";
}

function showFunction3() {
	document.querySelector(".tech-enth-message").style.display = "block";
	document.querySelector(".front-end-message").style.display = "none";
	document.querySelector(".cloud-eng-message").style.display = "none";
	document.querySelector(".speaker-message").style.display = "none";
}

function showFunction4() {
	document.querySelector(".speaker-message").style.display = "block";
	document.querySelector(".front-end-message").style.display = "none";
	document.querySelector(".cloud-eng-message").style.display = "none";
	document.querySelector(".tech-enth-message").style.display = "none";
}

const carousel = document.querySelector(".carousel");
const dragging = (e) => {
	carousel.scrollLeft = e.pageX;
};

carousel.addEventListener("mousemove", dragging);
