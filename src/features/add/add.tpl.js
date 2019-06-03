/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Template of the Add feature
 *
 */
import {html} from '../../../web_modules/lit-html.js';
import {dom} from '../feature.js';

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
            border-radius: 10px 10px 0 0;
            border: 1px solid var(--borderColor);
            background-color: white;
            overflow: hidden;
            box-shadow: inset 0 -2px 100px rgba(0, 0, 0, 0.03);
        }
        .todo-add-view input {
            padding: 16px 16px 16px 60px;
            border: none;
            background-color: white;
            box-shadow: inset 0 -2px 10px rgba(0, 0, 0, 0.03);
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
            margin: 5px;
            border: none;
            border-radius: 10px;
            background-color: rgb(235, 235, 235);
            font-size: calc(var(--fontSize) * 0.8);
        }
        
        .todo-add-view button:hover:not([disabled]) {
            background-color: rgb(245, 245, 245);
            cursor: pointer;
        }
    </style>`;

export const addTpl = ({onEnterKeyup, onAddBtnClick}) => {
  const btnSetEnabled = (isEnabled) => dom('.js-add-btn')[`${isEnabled ? 'remove' : 'set'}Attribute`]('disabled', true);

  // the add button is disabled by default. This allow us to handle its state:
  // we enable the add button if there is something into the input.
  const _onKeyup = (e) => {
      const isAddBtnEnabled = e.target.value.trim().length > 0;

      btnSetEnabled(isAddBtnEnabled);
      onEnterKeyup(e);
  };

  const _onBtnClick = (e) => {
      onAddBtnClick(e);
      btnSetEnabled(false);
  };

  return html`
      ${headerStyle}
      <h1>My awesome todos</h1>
      <div class="form">
          <input @keyup="${_onKeyup}" type="text" class="js-add-input" placeholder="What needs to be done?" autofocus>
          <button @click="${_onBtnClick}" class="js-add-btn" disabled>Add it!</button>
      </div>  
  `;
};