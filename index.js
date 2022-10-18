
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
	document.getElementById('main').style.opacity='0.6'
}

function closeCoupon(){
	document.getElementById('coupon').style.visibility = 'hidden';
	document.getElementById('main').style.opacity='1'
}

