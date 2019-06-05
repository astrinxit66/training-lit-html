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
            font-family: "CaptainIcon";
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
        .todo-list-view button {
            border: none;
            background-color: transparent;
            font-size: 0.8em;
            margin-right: 5px;
            color: red;
            opacity: 0.1;
            transition: opacity 0.2s;
            cursor: pointer;
        }
        .todo-list-view button:hover {
            display: inline;
            opacity: 1;
        }
        .todo-list-view label {
            display: inline-block;
            padding: 15px;
            transition: color 0.4s;
            flex: 1 0 auto;
            cursor: pointer;
            word-spacing: -10px;
            font-size: 0.8em;
        }
        .todo-list-view input {
            display: none;
        }
        .todo-list-view label:before  {
            display: inline-block;
            content: "\\e6fd";
            font-size: 0.7em;
            margin-right: 15px
        }
        .todo-list-view input:checked + label:before  {
            content: "\\e637";
            color: #71CAB9;
            text-decoration: none;
            font-size: 0.8em;
            margin: 0 10px 0 5px;
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
                    <button @click="${() => onRemoveClick(todo)}"><i class="cap-icon ci-times"></i></button>
                </li>
            `)}
        </ul>
    ` : ''}
`;