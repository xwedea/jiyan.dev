


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

style();
filter();

