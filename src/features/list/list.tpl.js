/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 6/3/19
 *
 * Template for listing todos
 *
 */
import {html} from '../../../web_modules/lit-html.js';

const listStyle = html`
    <style>
        .todo-list-view { 
            background-color: rgb(255, 255, 255);
            position: relative;
        }
        .todo-list-view .done { 
            text-decoration: line-through;
            color: #d9d9d9;
        }
        .todo-list-view ul {
            margin: 0;
            padding: 0;
            list-style: none;
            box-shadow: 0 -3px rgba(0, 0, 0, 0.03);
            border-left: 1px solid  var(--borderColor);
            border-right: 1px solid  var(--borderColor);
            border-bottom: 1px solid  var(--borderColor);
        }
        .todo-list-view li {
            font-size: var(--fontSize);
            border-bottom: 1px solid var(--borderColor);
            display: flex;
        }
        .todo-list-view label {
            display: inline-block;
            padding: 15px;
            transition: color 0.4s;
            flex: 1 0 auto;
        }
    </style>
`;

export const listTpl = ({todoList, onDoneClick, onRemoveClick}) => html`
    ${listStyle}
    ${todoList.length ? html`
        <ul>
            ${todoList.filter((todo) => !todo.isFiltered).map((todo, index) => html`
                <li>
                    <input id="todo-${index}" type="checkbox" @change="${({target: {checked}}) => onDoneClick(todo, checked)}" ?checked="${todo.isDone}">
                    <label for="todo-${index}" class="${todo.isDone ? 'done' : ''}">${todo.message}</label>
                    <button @click="${() => onRemoveClick(todo)}">X</button>
                </li>
            `)}
        </ul>
    ` : ''}
`;