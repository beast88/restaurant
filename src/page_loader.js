const renderHome = () => {
	const content = document.querySelector('#content');

	const container = document.createElement('div');
	container.setAttribute('class', 'container-fluid');

	content.append(container);

	const headerText = document.createElement('h1');
	headerText.textContent = 'Dragon Sushi';

	container.append(headerText);

	const heroContainer = document.createElement('div');
	heroContainer.setAttribute('class', 'hero-container');

	container.append(heroContainer);

	const background = document.createElement('div');
	background.setAttribute('class', 'bg');
	background.classList.add('h-50');

	heroContainer.append(background);

	const paragraph = document.createElement('p');
	paragraph.setAttribute('class', 'info');
	paragraph.classList.add('mt-4');
	paragraph.textContent = `The fine delicacies of the East meets the ravenous appetite of a small British country filled with some very angry people.

	Here at Dragon Sushi we understand that real dragons have real hunger, and what better way to satisfy that hunger than with the finest sushi the Atlantic has to offer?

	They may be small and bite sized but that makes it all the easier to eat your body weight in them.

	Enjoy!`

	heroContainer.append(paragraph);

}

export {renderHome};