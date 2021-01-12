import { elements } from './base';

export const getInput = () => elements.searchInput.value;

// render character data
export const renderCharData = char => {
	const markup = `
		<div class="results--panel results--panel-img">
			<figure>
		        <img class="results--fig" 
		        	src="${char.thumbnail.path}/portrait_uncanny.${char.thumbnail.extension}" 
		        	alt="${char.name}">
		    </figure>
		</div>
	    <div class="results--panel">
		    <div class="results--desc">
		    	<h4>${char.name}</h4>
		        <p>${char.description ? char.description : 'No bio'}</p>
		    </div>
	    </div>
	    <div class="results--panel">
	    	<h4>Comics</h4>
	        ${char.comics.items.map(el => renderComic(el)).join('')}
	    </div>
	    <div class="results--panel">
            <div class="results--url">
            	${char.urls.map(el => renderLink(el)).join('')}
            </div>
        </div>
	`;
	elements.searchRes.insertAdjacentHTML('afterbegin', markup);
};

const renderComic = comic => `
	<p>${comic.name}</p>
`;

const renderLink = link => `
	<h4>${link.type}</h4>
	<p><a class="results--url-link" href="${link.url}">${link.url}</a></p>
`;

// render error message
export const renderError = () => {
	const markup = `
		<div class="results--panel">
			<h4 class="results--panel-error">Error</h4>
			<p>Something went wrong or the character is not in the Marvel database.</p>
	    </div>
	`;
	elements.searchRes.insertAdjacentHTML('afterbegin', markup);
};

// clears the search input box after doing a search
export const clearInput = () => {
	elements.searchInput.value = '';
};

// clears the previous result
export const clearResults = () => {
	elements.searchRes.innerHTML = '';
};
