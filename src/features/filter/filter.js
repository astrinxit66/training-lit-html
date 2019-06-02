/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Handle filter actions
 *
 */
import {dom, FeatureView, publish, subscribe} from '../feature.js';

let instance = null;

export class FilterViewFeature extends FeatureView {
    static level = {all: 0, active: 1, completed: -1};

    constructor(_$container) {
        super(_$container);

        this.todoList = [];
        this.selectedLevel = FilterViewFeature.level.all;
    }

    static start() {
        if (!instance) {
            instance = new FilterViewFeature(dom('body'));

            subscribe(
                {'list': instance.updateList.bind(instance)}
            );

            instance.render();
        }
    }

    updateList({detail: todoList}) {
        this.todoList = todoList;
        this.render();
    }

    setLevel(level) {
        let filteredTodos = [];

        this.selectedLevel = level;

        switch (level) {
            case FilterViewFeature.level.all:
                filteredTodos = [...this.todoList];
                break;
            case FilterViewFeature.level.active:
                filteredTodos = this.todoList.filter((todo) => todo.isDone);
                break;
            case FilterViewFeature.level.completed:
                filteredTodos = this.todoList.filter((todo) => !todo.isDone);
                break;
        }

        filteredTodos.forEach((todo) => todo.isFiltered = true);
        publish({name: 'filter', detail: filteredTodos});
    }

    render() {
        console.log('Should render filters here');
        // render the filter block having
        // - a count of current displayed todos
        // - a link to show all using this.setLevel(0)
        // - a link to filter active todos only using this.setLevel(1)
        // - a link to filter completed todos only using this.setLevel(-1)

        // handle management rules:
        // - view highlights the current selected filter (one of the "all", "active", "completed")
        // - only this.selectedLevel can be highlighted among the 3 levels
        // - the count of current displayed todos updates every time the render() method is called
    }
}