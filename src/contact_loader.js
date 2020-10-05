const renderContact = () => {
	const content = document.querySelector('#content');

	const container = document.createElement('div');
	container.setAttribute('class', 'container');

	const contact = document.createElement('div');
	contact.setAttribute('class', 'contact');
	contact.classList.add('mt-3');

	const headline = document.createElement('h3');
	headline.innerText = `Contact Us`;

	const email = document.createElement('p');
	email.innerText = `Email: dragonsushi@fakemail.com`;

	const online = document.createElement('p');
	online.innerText = `Web Enquires`;

	const link = document.createElement('a');
	link.setAttribute('class', 'link');
	link.setAttribute('href', 'https://github.com/beast88');
	link.setAttribute('target', '_blank');

	const linkImage = document.createElement('img');
	linkImage.setAttribute('class', 'link-image');
	linkImage.setAttribute('src', 'images/github_logo.png');
	linkImage.setAttribute('alt', 'github');
	link.append(linkImage);

	content.append(container);

	container.append(contact);

	contact.append(headline, email, online, link);

}

export {renderContact};