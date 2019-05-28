/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Handle list view
 *
 */
import {View} from '../view.js';

let instance = null;

class ListViewFeature extends View {

    static getInstance() {
        return instance;
    }

    add(todo) {

    }

    remove(todo) {

    }

    handle() {

    }
}

/**
 * Factory that provides a singleton of ListViewFeature
 * @param $container        HTMLElement where the list will be injected
 * @returns ListViewFeature     the instance of ListViewFeature
 */
export const handleListViewFeature = ($container) => {
     if (!instance) {
         instance = new ListViewFeature($container);
         instance.handle();
     }

     return instance;
};