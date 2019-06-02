/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Main entrypoint
 *
 */
import {AddViewFeature} from './features/add/add.js';
import {ListViewFeature} from './features/list/list.js';
import {FilterViewFeature} from './features/filter/filter.js';

addEventListener('load', () => {
    const components = [AddViewFeature, ListViewFeature, FilterViewFeature];
    components.forEach((component) => component.start());
});