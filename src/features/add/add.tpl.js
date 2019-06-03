/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Template of the Add feature
 *
 */
import {html} from '../../../web_modules/lit-html.js';

const headerStyle = html`
    <style>
        .todo-add-view h1 {
            font-size: calc(60px + 1vw);
            font-weight: 100;
            text-align: center;
            text-rendering: optimizeLegibility;
        }
        .todo-add-view .form {
            display: flex;
            border-radius: 0 10px 10px 0;
            border: 1px solid rgb(204, 204, 204);
            overflow: hidden;
        }
        .todo-add-view input {
            padding: 16px 16px 16px 60px;
            border: none;
            background-color: rgb(255, 255, 255);
            box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
            flex: 80 80 auto;
        }
        .todo-add-view input::placeholder {
            opacity: 0.5;
            font-style: italic;
        }
        .todo-add-view input, .todo-add-view button {
            font-family: var(--fontFamily);
            font-weight: var(--fontWeight);
            font-size: var(--fontSize);
        }
        .todo-add-view button {
            flex: 20 20 100px;
            border: none;
            background-color: rgb(235, 235, 235);
            font-size: calc(var(--fontSize) * 0.8);
            cursor: pointer;
        }
        
        .todo-add-view button:hover {
            background-color: rgb(245, 245, 245);
        }
    </style>`;

export const addTpl = ({onEnterKeyup, onAddBtnClick}) => html`
    ${headerStyle}
    <h1>My awesome todos</h1>
    <div class="form">
        <input @keyup="${onEnterKeyup}" type="text" class="js-add-input" placeholder="What needs to be done?" autofocus>
        <button @click="${onAddBtnClick}">Add it!</button>
    </div>
`;