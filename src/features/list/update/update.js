/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 * Handle update actions
 *
 */

class UpdateFeature {
    constructor(todoList) {

    }

    setDone({target: checked}) {
        console.log('Should set the selected todo as', checked ? 'done' : 'pending');
    }

    remove({target: value}) {
        console.log('Should remove the todo(s) having message:', value);
    }

    handle() {

    }
}

export const provideUpdateFeature = (todoList) => {
    const instance = new UpdateFeature(todoList);

    instance

    return instance;
};