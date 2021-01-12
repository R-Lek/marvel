// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/******************************* 
* Global state of the app      *
* - Search object (character)  *
*******************************/

const state = {};

/********************
* SEARCH CONTROLLER *
********************/

const controlSearch = async () => {
	// 1. Get name from view
	const name = searchView.getInput();

	if (name) {
		// 2. New search object and add to state
		state.search = new Search(name);

		// 3. Prepare UI for results
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);

		try {
			// 4. Search for character
			await state.search.getResults();

			// 5. Render results in UI
			clearLoader();
			searchView.renderCharData(state.search.result);

		} catch(err) {
			searchView.renderError();
			console.log(err);
		}
	}
};

elements.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	controlSearch();
});
