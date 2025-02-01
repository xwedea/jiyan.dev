import projectsJson from "./data.js"

const all = document.querySelector(".portfolio-filter-div #all");
const school = document.querySelector(".portfolio-filter-div #school-projects");
const game = document.querySelector(".portfolio-filter-div #game-development");
const personal = document.querySelector(".portfolio-filter-div #personal");
const filters = [all, school, game, personal];
const projects_div = document.querySelectorAll(".project-div");
const portfolio_tags = ["school", "game", "personal"];
const uppersidepanel = document.querySelector(".uppersidepanel");
const uppersidepanel_label = uppersidepanel.querySelector("label");
const container = document.querySelector(".container");
const sidepanel = document.querySelector(".sidepanel");

function init() {
	init_style();
	setFilterOnclicks();
	populate_portfolio(portfolio_tags);

	if (window.innerWidth <= 880) {
		mobileScrollButton();
	}

	window.onresize = () => {
		// if (window.innerWidth > 880) {
		// 	scroll_div.style.display = "none";
		// }
		// else {
		// 	scroll_div.style.display = "inline-block";

		// }

		sidepanel.style.height = window.innerHeight;
		// console.log(window.innerHeight);
	}

}

const init_style = () => {
	all.style.background = "#c2c1ad";
}

function mobileScrollButton() {
	const scroll_div = document.createElement("scroll-div");
	scroll_div.className = "scroll-div"

	const scroll_text = document.createElement("span");
	scroll_text.innerText = "See Portfolio"
	scroll_div.appendChild(scroll_text);

	uppersidepanel_label.appendChild(scroll_div);

	scroll_div.onclick = () => {		
		container.scrollIntoView();
	}

	
}


function highlightNavButton(selected) {
	for (let filter of filters) {
		filter.style.background = "";
	}
	selected.style.background = "#c2c1ad";
}

const setFilterOnclicks = () => {
	all.onclick = () => {
		highlightNavButton(all);
		populate_portfolio(["school", "personal", "game"]);
	}
	school.onclick = () => {
		highlightNavButton(school);
		populate_portfolio(["school"]);
	}
	game.onclick = () => {
		highlightNavButton(game);
		populate_portfolio(["game"]);
	}
	personal.onclick = () => {
		highlightNavButton(personal);
		populate_portfolio(["personal"]);
	}
}

function populate_portfolio(tag_filters) {
	const grid_div = document.querySelector(".grid-div");
	grid_div.innerHTML = "";
	let projects = projectsJson.projects;

	for (let project of projects) {
		let passFilter = false;
		for (let filter of tag_filters) {
			if (project.tags.includes(filter)) {
				passFilter = true;
				break;
			}
		}
		if (!passFilter) continue;

		const div = document.createElement("div");
		div.classList.add("project-div");
		for (let tag of project.tags) {
			div.classList.add(tag);
			// console.log(div.className);
		}

		const top_div = document.createElement("div");
		top_div.className = "project-top-div";
		div.appendChild(top_div);

		const label = document.createElement("label");
		label.className = "unselectible";
		top_div.appendChild(label);

		const img  = document.createElement("img");
		img.src = "assets/" + project['img-src'];
		label.appendChild(img);

		const name_div = document.createElement("div");
		name_div.className = "project-name-div";
		label.appendChild(name_div);

		const name = document.createElement("span");
		name.className = "project-name";
		name.innerText = project.name;
		name_div.appendChild(name);

		const info_div = document.createElement("info_div");
		info_div.className = "project-info-div";
		label.appendChild(info_div);
		
		const info = document.createElement("p");
		info.className = "project-info";
		info.innerText = project.info;
		info_div.appendChild(info);
		
		const description_div = document.createElement("div");
		description_div.className = "project-description-div";
		label.appendChild(description_div);

		const description_p = document.createElement("p");
		description_p.innerText = project.description.paragraph;
		description_div.appendChild(description_p);

		if (project.description.list.length != 0) {
			const description_ul = document.createElement("ul");
			description_ul.className = "project-description";
			for (let e of project.description.list) {
				const list_element = document.createElement("li");
				list_element.innerText = e;
				description_ul.appendChild(list_element);
			}
			description_div.appendChild(description_ul);
		}
		
		const bottom_div = document.createElement("div")
		bottom_div.className = "project-bottom-div";
		div.appendChild(bottom_div);

		const links_div = document.createElement("div");
		links_div.className = "project-links-div";
		bottom_div.append(links_div);

		for (let link of project.links) {
			const link_div = document.createElement("div");
			link_div.className = "project-link-div";
			links_div.appendChild(link_div);
	
			const link_a = document.createElement("a");
			link_a.href = link.url;
			link_a.target = "_blank";
			link_div.appendChild(link_a);

			const link_i = document.createElement("i");
			link_a.appendChild(link_i);
			
			switch (link.to) {
				case "github":
					link_i.className = "fa-brands fa-github fa-2x";
					link_div.classList.add("github");
					break;
				case "youtube":
					link_i.className = "fa-brands fa-youtube";
					link_div.classList.add("youtube");
					break;
				case "google-play":
					link_i.className = "fa-brands fa-google-play"
					link_div.classList.add("google-play");
					break;
			}
		}
		grid_div.appendChild(div);
	}
}

init();



















