/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Handle list view
 *
 */
import {FeatureView, publish, subscribe} from '../feature.js';
import {listTpl} from './list.tpl.js';
import {render} from '../../../web_modules/lit-html.js';

let instance = null;

export class ListViewFeature extends FeatureView {

    constructor() {
        super('todo-list-view');
        this.todoList = [];

        this.setViewBindings({
            onDoneClick: this.setDone.bind(this),
            onRemoveClick: this.remove.bind(this)
        });
    }

    static start() {
        if (!instance) {
            instance = new ListViewFeature();

            subscribe(
                {'add': instance.add.bind(instance)},
                {'filter': instance.filter.bind(instance)}
            );

            instance.render()
        }
    }

    add({detail: message}) {
        this.todoList.push({message, isDone: false, isFiltered: false});
        this.render();
    }

    filter({detail: filteredTodo}) {
        if (filteredTodo.length) {
            this.todoList.forEach((todo) => todo.isFiltered = filteredTodo.includes(todo));
            this.render();
        }
    }

    remove(todo) {
        const id = this.todoList.indexOf(todo);

        this.todoList.splice(id, 1);
        this.render();
    }

    render() {
        render(listTpl({todoList: this.todoList, ...this.getViewBindings()}), this.$container);
        publish({name: 'list', detail: this.todoList});
    }

    setDone(todo, isDone) {
        todo.isDone = isDone;
        this.render();
    }
}