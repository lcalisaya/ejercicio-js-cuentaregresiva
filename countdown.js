//Teoría: El navegador nos da el tiempo en milisegundos. Es decir que 1000 milisegundos == 1segundo.

const getRemainTime = deadline => {
	let now = new Date(),
	remainTime = (new Date(deadline) - now) / 1000 + 1000, //Total de segundos entre la fecha límite y hoy
	remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2), //Dos posiciones para los segundos
	remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2), //Dos posiciones para los minutos
	remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2), //Dos posiciones para las horas
	remainDays = Math.floor(remainTime / (3600 * 24)); //Cantidad de días

	return {
		remainTime,
		remainSeconds,
		remainMinutes,
		remainHours,
		remainDays
	}
}

//console.log(getRemainTime('Nov 12 2017 15:37:19'));

const countdown = (deadline, elem, finalMessage) => {
	const el = document.getElementById(elem);
	const timerUpdate = setInterval ( () => { //Cada 1 segundo se va a actualizar el tiempo restante
		let t = getRemainTime(deadline)
		el.innerHTML = `${t.remainDays}días:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
		
		if (t.remainTime <= 1) {
			clearInterval(timerUpdate); //Una vez terminada la cuenta regresiva, el contador se oculta y se muestra un mensaje
			el.innerHTML = finalMessage;
		}
	}, 1000)
};

countdown('Jan 12 2018', 'clock', 'Muchas gracias'); 