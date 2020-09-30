const renderMenu = () => {
	const content = document.querySelector('#content');

	const container = document.createElement('div');
	container.setAttribute('class', 'container');

	const row = document.createElement('div');
	row.setAttribute('class', 'row');

	const menuColumn1 = document.createElement('div');
	menuColumn1.setAttribute('class', 'col');
	menuColumn1.classList.add('menuCard');

	const menuColumn2 = document.createElement('div');
	menuColumn2.setAttribute('class', 'col');
	menuColumn2.classList.add('menuCard');

	const menuColumn3 = document.createElement('div');
	menuColumn3.setAttribute('class', 'col');
	menuColumn3.classList.add('menuCard');

	//Menu item 1
	const item1Image = document.createElement('img');
	item1Image.setAttribute('src', 'images/menu1.jpg');
	item1Image.setAttribute('class', 'menu-image');
	item1Image.classList.add('w-100');

	const item1Title = document.createElement('h3');
	item1Title.setAttribute('class', 'mt-3');
	item1Title.textContent = "Dragon Fire Platter";

	const item1Info = document.createElement('p');
	item1Info.textContent = `A platter of the most delicious sushi bites seasoned with enough spice to burn a hole in the roof of your mouth.`

	const item1Price = document.createElement('h5');
	item1Price.textContent = `£29.99`;

	//Menu item 2
	const item2Image = document.createElement('img');
	item2Image.setAttribute('src', 'images/menu2.jpg');
	item2Image.setAttribute('class', 'menu-image');
	item2Image.classList.add('w-100');

	const item2Title = document.createElement('h3');
	item2Title.setAttribute('class', 'mt-3');
	item2Title.textContent = "Green Dragon Platter";

	const item2Info = document.createElement('p');
	item2Info.textContent = `For the mild mannered. All your favourites but without the spice.`

	const item2Price = document.createElement('h5');
	item2Price.textContent = `£19.99`;

	//Menu item 3
	const item3Image = document.createElement('img');
	item3Image.setAttribute('src', 'images/menu3.jpg');
	item3Image.setAttribute('class', 'menu-image');
	item3Image.classList.add('w-100');

	const item3Title = document.createElement('h3');
	item3Title.setAttribute('class', 'mt-3');
	item3Title.textContent = "Targaryen Tea";

	const item3Info = document.createElement('p');
	item3Info.textContent = `We serve a variety of herbal teas to help you wash down the blood of your enemies.`

	const item3Price = document.createElement('h5');
	item3Price.textContent = `£4.99`;

	content.append(container);

	container.append(row);

	row.append(menuColumn1, menuColumn2, menuColumn3);

	menuColumn1.append(item1Image, item1Title, item1Info, item1Price);

	menuColumn2.append(item2Image, item2Title, item2Info, item2Price);

	menuColumn3.append(item3Image, item3Title, item3Info, item3Price);
}

export {renderMenu};