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
        .header h1 {
            font-size: calc(60px + 1vw);
            font-weight: 100;
            text-align: center;
            text-rendering: optimizeLegibility;
        }
        .header .form {
            display: flex;
            border-radius: 0 10px 10px 0;
            border: 1px solid rgb(204, 204, 204);
            overflow: hidden;
        }
        .header input {
            padding: 16px 16px 16px 60px;
            border: none;
            background-color: rgb(255, 255, 255);
            box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
            flex: 80 80 auto;
        }
        .header input::placeholder {
            opacity: 0.5;
            font-style: italic;
        }
        .header input, .header button {
            font-family: var(--fontFamily);
            font-weight: var(--fontWeight);
            font-size: var(--fontSize);
        }
        .header button {
            flex: 20 20 100px;
            border: none;
            background-color: rgb(235, 235, 235);
            font-size: calc(var(--fontSize) * 0.8);
        }
        
        .header button:hover:not([disabled]) {
            background-color: rgb(245, 245, 245);
            cursor: pointer;
        }
    </style>`;

export const addTpl = ({onEnterKeyup, onAddBtnClick}) => {
  // the add button is disabled by default. This allow us to handle its state:
  // we enable the add button if there is something into the input.
  const _onKeyup = (e) => {
      const isAddBtnEnabled = e.target.value.trim().length > 0;

      dom('.js-add-btn')[`${isAddBtnEnabled ? 'remove' : 'set'}Attribute`]('disabled', true);
      onEnterKeyup(e);
  };

  return html`
      ${headerStyle}
      <section class="header">
          <h1>My awesome todos</h1>
          <div class="form">
              <input @keyup="${_onKeyup}" type="text" class="js-add-input" placeholder="What needs to be done?" autofocus>
              <button @click="${onAddBtnClick}" class="js-add-btn" disabled>Add it!</button>
          </div>  
      </section>
  `;
};