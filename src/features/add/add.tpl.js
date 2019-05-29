/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Template of the Add feature
 *
 */
import {html} from '../../../web_modules/lit-html.js';

export const addTpl = ({onEnterKeyup, onAddBtnClick}) => html`
    <section class="header">
        <h1>My awesome todos</h1>
        <input @keyup="${onEnterKeyup}" type="text" class="js-add-input" placeholder="What needs to be done?" autofocus>
        <button @click="${onAddBtnClick}">Add it!</button>
    </section>
`;