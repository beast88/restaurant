import {renderHome} from "./page_loader.js";
import {renderMenu} from "./menu_loader.js";

renderMenu();

const renderTabs = (() => {
	const content = document.querySelector('#content');

	const navContainer = document.createElement('nav');
	navContainer.setAttribute('class', 'navbar');
	navContainer.classList.add('pb-0');

	const navbar = document.createElement('div');
	navbar.setAttribute('class', 'navbar-nav');
	navbar.classList.add('w-50');

	const homeTab = document.createElement('a');
	homeTab.setAttribute('class', 'nav-link');
	homeTab.classList.add('active');
	homeTab.textContent = 'Home';

	const menuTab = document.createElement('a');
	menuTab.setAttribute('class', 'nav-link');
	menuTab.textContent = 'Menu';

	const contactTab = document.createElement('a');
	contactTab.setAttribute('class', 'nav-link');
	contactTab.textContent = 'Contact';

	navbar.append(homeTab, menuTab, contactTab);

	navContainer.append(navbar);

	content.insertAdjacentElement('beforebegin', navContainer);
	return {homeTab, menuTab, contactTab};
})();

const clearPage = () => {
	const content = document.querySelector('#content');
	content.innerHTML = '';
}

const tabActions = (() => {
	const homeTab = renderTabs.homeTab;
	const menuTab = renderTabs.menuTab;
	const contactTab = renderTabs.contactTab;

	homeTab.addEventListener("click", (e) => {
		clearPage();
		renderHome();
		if (homeTab.getAttribute('class') != 'active') {
			homeTab.classList.add('active')
		};
		menuTab.classList.remove('active');
		contactTab.classList.remove('active');
	});

})();