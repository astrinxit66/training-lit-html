/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Main entrypoint
 *
 */
import {handleAddViewFeature} from './features/add/add.js';
import {handleListViewFeature} from './features/list/list.js';

const dom = document.querySelector.bind(document);

addEventListener('load', () => {
    handleAddViewFeature(dom('.js-input'));
    handleListViewFeature(dom('.js-list'));
});