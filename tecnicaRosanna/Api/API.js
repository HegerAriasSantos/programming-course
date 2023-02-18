const btnNuevaActividad = document.getElementById("nueva-actividad");
const actividadDiv = document.getElementById("actividad");

function mostrarActividad(actividad) {
	actividadDiv.innerHTML = `<p>${actividad}</p>`;
}

function obtenerActividad() {
	fetch("https://www.boredapi.com/api/activity")
		.then(response => {
			console.log(response, "primera");
			return response.json();
		})
		.then(data => {
			console.log(data, "segunda");
			mostrarActividad(data.activity);
		});
}

async function obtenerActividadAsync() {
	const response = await fetch("https://www.boredapi.com/api/activity");
	const data = await response.json();
	mostrarActividad(data.activity);
}

btnNuevaActividad.addEventListener("click", obtenerActividad);
