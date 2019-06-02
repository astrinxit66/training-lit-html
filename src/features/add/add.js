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

    constructor(_$container) {
        super(_$container);

        this.$input = null;
    }

    static start() {
        if (!instance) {
            instance = new AddViewFeature(dom('body'));
            instance.render();
        }
    }

    create(message) {
        if (message.trim().length) {
          publish({name: 'add', detail: message});
        }
    }

    render() {
        const self = this;
        const bindings = {
            onEnterKeyup({key, target: {value: message}}) {
                key.toLowerCase() === 'enter' && self.create(message);
            },
            onAddBtnClick() {
                if (!self.$input) {
                    self.$input = dom('.js-add-input')
                }

                self.create(self.$input.value);
            }
        };

        render(addTpl(bindings), this.$container);
    }
}