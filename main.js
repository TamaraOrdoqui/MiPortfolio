const openModal = (projectName) => {
	const modal = document.getElementById("myModal");
	const modalMessage = document.getElementById("modalMessage");

	switch (projectName) {
		case "Match3":
			modalMessage.textContent = "Oops, Match 3 aún está en desarrollo!";
			break;
		case "AdminReuniones":
			modalMessage.textContent =
				"Oops, Administrador de Reuniones aún está en desarrollo!";
			break;
		case "TodoApp":
			modalMessage.textContent = "Oops, Todo App aún está en desarrollo!";
			break;
		case "BuscadorPeliculas":
			modalMessage.textContent =
				"Oops, Buscador de Películas aún está en desarrollo!";
			break;
		default:
			modalMessage.textContent = "Oops, este proyecto aún está en desarrollo!";
	}

	modal.style.display = "block";
};

const closeModal = () => {
	const modal = document.getElementById("myModal");
	modal.style.display = "none";
};

window.onclick = (event) => {
	const modal = document.getElementById("myModal");
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
