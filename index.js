import projectsJson from './projects.json' assert {type: 'json'};


const style = () => {
	const allButton = document.querySelector(".portfolio-filter-div #all");
	allButton.style.background = "#c2c1ad";

	// const filters = document.querySelectorAll(".portfolio-filter-div .li");
	// for (let filter of filters) {
	// 	filter.onmouseover = () => {
	// 		filter.background = "#c2c1ad";
	// 	}
	// }
}

const filter = () => {
	const all = document.querySelector(".portfolio-filter-div #all");
	const school = document.querySelector(".portfolio-filter-div #school-projects");
	const game = document.querySelector(".portfolio-filter-div #game-development");
	const misc = document.querySelector(".portfolio-filter-div #miscellaneous");

	const projects = document.querySelectorAll(".project-div");
	const filters = [all, school, game, misc];

	all.onclick = () => {
		for (let filter of filters) {
			filter.style.background = "";
		}
		all.style.background = "#c2c1ad";
		for (let project of projects) {
			project.style.display = "block";
		}

	}

	school.onclick = () => {
		for (let filter of filters) {
			filter.style.background = "";
			console.log(filter.innerHTML);
		}
		school.style.background = "#c2c1ad";
		const school_projects = document.querySelectorAll(".project-div.school")
		for (let project of projects) {
			project.style.display = "none";
		}
		for (let project of school_projects) {
			project.style.display = "block";
			console.log(project.innerHTML);
		}
	}

	game.onclick = () => {
		for (let filter of filters) {
			filter.style.background = "";
			console.log(filter.innerHTML);
		}
		game.style.background = "#c2c1ad";
		const game_projects = document.querySelectorAll(".project-div.game")
		for (let project of projects) {
			project.style.display = "none";
		}
		for (let project of game_projects) {
			project.style.display = "block";
			console.log(project.innerHTML);
		}
	}

	misc.onclick = () => {
		for (let filter of filters) {
			filter.style.background = "";
			console.log(filter.innerHTML);
		}
		misc.style.background = "#c2c1ad";
		misc_projects = document.querySelectorAll(".project-div.misc")
		for (let project of projects) {
			project.style.display = "none";
		}
		for (let project of misc_projects) {
			project.style.display = "block";
			console.log(project.innerHTML);
		}
	}

}

function populate_portfolio() {
	const grid_div = document.querySelector(".grid-div");
	let projects = projectsJson.projects;

	for (let project of projects) {
		const div = document.createElement("div");
		div.classList.add("project-div");
		for (let tag of project.tags) {
			div.classList.add(tag);
		}

		const top_div = document.createElement("div");
		top_div.className = "project-top-div";
		div.appendChild(top_div);

		const img  = document.createElement("img");
		img.src = project['img-src'];
		top_div.appendChild(img);

		const name_div = document.createElement("div");
		name_div.className = "project-name-div";
		top_div.appendChild(name_div);

		const name = document.createElement("span");
		name.className = "project-name";
		name.innerText = project.name;
		name_div.appendChild(name);

		const info_div = document.createElement("info_div");
		info_div.className = "project-info-div";
		top_div.appendChild(info_div);
		
		const info = document.createElement("p");
		info.className = "project-info";
		info.innerText = project.info;
		info_div.appendChild(info);
		
		const description = document.createElement("p");
		description.className = "project-description";
		description.innerText = project.description;
		top_div.appendChild(description);
		
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
					console.log(link_div.className);
					break;
				case "youtube":
					link_i.className = "fa-brands fa-youtube";
					link_div.classList.add("youtube");
					break;
			}
		}


		grid_div.appendChild(div);
	}
}

style();
filter();
populate_portfolio();


















