document.querySelectorAll('.sidebar-menu-toggle').forEach(el => {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		const parent = this.parentNode;
		if (parent.classList.contains('selected')) {
			parent.classList.remove('selected');
		} else {
			parent.classList.add('selected');
		}
	});
});

document.querySelectorAll('.dropdown').forEach(function (el) {
	el.querySelectorAll('.dropdown-toggle').forEach(function (i) {
		i.addEventListener('click', function (e) {
			e.preventDefault();
			const menu = this.parentNode.querySelector('.dropdown-menu');
			console.log(menu.classList.contains('max-h-0'));
			if (menu.classList.contains('max-h-0')) {
				closeAllDropdownMenu();
				menu.classList.remove('max-h-0');
				menu.classList.add('max-h-80');
			} else {
				menu.classList.remove('max-h-80');
				menu.classList.add('max-h-0');
			}
		});
	});
});

document.addEventListener('click', e => {
	if (!e.target.closest('.dropdown')) {
		closeAllDropdownMenu();
	}
});

function closeAllDropdownMenu() {
	document
		.querySelectorAll('.dropdown .dropdown-menu')
		.forEach(function (el) {
			el.classList.remove('max-h-80');
			el.classList.add('max-h-0');
		});
}
