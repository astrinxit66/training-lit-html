/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Handle Add view
 *
 */
import {addTpl} from './add.tpl.js';
import {render} from '../../../web_modules/lit-html.js';
import {View} from '../view.js';

let instance = null;

class AddViewFeature extends View {

    static getInstance() {
        return instance;
    }

    create({target: value}) {
        console.log('Should create a new todo with message:', value);
    }

    handle() {
        const bindings = {
            onEnterKeypress: this.create.bind(this),
            onAddBtnClick: this.create.bind(this)
        };

        render(addTpl(bindings), this.$container);
    }
}

/**
 * Factory that provides a singleton of AddViewFeature
 * @param $container        HTMLElement where the input and submit button will be injected
 * @returns AddViewFeature      instance of AddViewFeature
 */
export const handleAddViewFeature = ($container) => {
    if (!instance) {
        instance = new AddViewFeature($container);
        instance.handle();
    }

    return instance;
};