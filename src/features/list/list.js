/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Handle list view
 *
 */
import {FeatureView, publish, subscribe} from '../feature.js';

let instance = null;

export class ListViewFeature extends FeatureView {

    constructor() {
        super('todo-list-view');
        this.todoList = [];
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
        this.todoList.push({todo: message, isDone: false, isFiltered: false});
        this.render();
    }

    filter({detail: filteredTodo}) {
        if (filteredTodo.length) {
            this.todoList.forEach((todo) => todo.isFiltered = filteredTodo.includes(todo));
            this.render();
        }
    }

    remove(todo) {
        const id = this.todoList.find((_todo) => _todo === todo);
        this.todoList.splice(id, 1);
        this.render();
    }

    render() {
        console.log('Should render todo list here');
        // render the list with ability to
        // - mark a message as done using this.setDone()
        // - remove a message using this.remove()
        // - ignore message when it has isFiltered = true
        // - stroke message and check associated checkbox when it has isDone = true
        publish({name: 'list', detail: this.todoList});
    }

    setDone(todo, isDone) {
        todo.isDone = isDone;
        this.render();
    }
}