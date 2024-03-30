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

document.querySelector('#toggle-sidebar').addEventListener('click', e => {
	e.preventDefault();
	const sidebarTexts = document.querySelectorAll('aside .hide');
	toggleSidebarWidth();
	sidebarTexts.forEach(function (el) {
		el.classList.toggle('hidden');
	});
	if (e.target.classList.contains('ri-menu-fold-fill')) {
		e.target.classList.remove('ri-menu-fold-fill');
		e.target.classList.add('ri-play-list-add-line');
	} else {
		e.target.classList.remove('ri-play-list-add-line');
		e.target.classList.add('ri-menu-fold-fill');
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

function toggleSidebarWidth() {
	const sidebar = document.querySelector('aside');
	const main = document.querySelector('main');
	const sidebarLinks = document.querySelectorAll('aside ul li a');

	const maxWidth = 64;
	const minWidth = 20;
	const maxPl = 11;
	const minPl = 7;

	if (sidebar.classList.contains(`w-${maxWidth}`)) {
		sidebar.classList.remove(`w-${maxWidth}`);
		sidebar.classList.add(`w-${minWidth}`);
		main.classList.remove('w-[calc(100%', '-', '16rem)]');
		main.style.setProperty('width', 'calc(100% - 5rem)');
		main.classList.remove(`ml-${maxWidth}`);
		main.classList.add(`ml-${minWidth}`);

		sidebarLinks.forEach(function (el) {
			if (el.classList.contains(`pl-${maxPl}`)) {
				el.classList.remove(`pl-${maxPl}`);
				el.classList.add(`pl-${minPl}`);
			} else {
				el.classList.add('text-center');
			}
		});
	} else {
		sidebar.classList.remove(`w-${minWidth}`);
		sidebar.classList.add(`w-${maxWidth}`);
		main.style.setProperty('width', 'calc(100% - 16rem)');
		main.classList.remove(`ml-${minWidth}`);
		main.classList.add(`ml-${maxWidth}`);

		sidebarLinks.forEach(function (el) {
			if (el.classList.contains(`pl-${minPl}`)) {
				el.classList.remove(`pl-${minPl}`);
				el.classList.add(`pl-${maxPl}`);
			} else {
				el.classList.remove('text-center');
			}
		});
	}
}
