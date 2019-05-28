/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Handle filter actions
 *
 */

class FilterFeature {
    static level = {all: 'all', active: 'active', completed: 'completed'};

    constructor(todoList) {
        // observe
    }

    setLevel(filterLevel) {
        console.log('Todo list should be filtered to:', filterLevel);
    }
}