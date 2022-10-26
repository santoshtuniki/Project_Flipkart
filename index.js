
function changeMode() {
	let main = document.querySelector('#main').classList;
	if(main.contains('mywhite')) {
		main.remove('mywhite');
		main.add('mydark');
	} else {
		main.remove('mydark');
		main.add('mywhite');
	}

	let button = document.querySelector('#clock').classList;
	if(button.contains('btn-dark')) {
		button.remove('btn-dark');
		button.add('btn-light');
	} else {
		button.add('btn-dark');
		button.remove('btn-light');
	}

	let data = document.querySelector('#clock-icon').classList;
	if(data.contains('bi-brightness-high-fill')) {
		data.remove('bi-brightness-high-fill');
		data.add('bi-moon-fill');
	} else {
		data.add('bi-brightness-high-fill');
		data.remove('bi-moon-fill');
	}
}

function loadCoupon(){
	document.getElementById('coupon').style.visibility = 'visible';
	document.getElementById('main').style.opacity='0.6';
}

function closeCoupon(){
	document.getElementById('coupon').style.visibility = 'hidden';
	document.getElementById('main').style.opacity='1';
}


function geolocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition)
	}
}

function showPosition(data){
	let x = document.getElementById('weatherOut');
	let y = document.querySelector('#weatherIcon')
	console.log(data)
	let lat = data.coords.latitude;
	let long = data.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
	fetch(url,{method: 'GET'})
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		x.innerText = `${data.list[0].temp.day}°C`;

		let myWeather = data.list[0].weather[0].icon;
		let element = `https://openweathermap.org/img/w/${myWeather}.png`;
		y.setAttribute("src", element);
	})
	.catch((err) => {
		console.log(err)
	})
}