/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Handle Add view
 *
 */
import {addTpl} from './add.tpl.js';
import {render} from '../../../web_modules/lit-html.js';
import {dom, FeatureView, publish} from '../feature.js';

let instance = null;

export class AddViewFeature extends FeatureView {

    constructor() {
        super('todo-add-view');
        this.$input = null;

        this.setViewBindings({
            onEnterKeyup: ({key, target: {value: message}}) => {
                this.requireInput();
                key.toLowerCase() === 'enter' && this.create(message);
            },
            onAddBtnClick: () => {
                this.requireInput();
                this.create(this.$input.value);
            }
        });
    }

    requireInput() {
        if (!this.$input) {
            this.$input = dom('.js-add-input');
        }
    }

    static start() {
        if (!instance) {
            instance = new AddViewFeature();
            instance.render();
        }
    }

    create(message) {
        if (message.trim().length) {
          publish({name: 'add', detail: message});
          this.$input.value = '';
        }
    }

    render() {
        render(addTpl(this.getViewBindings()), this.$container);
    }
}