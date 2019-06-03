/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 *
 *
 */

export const dom = document.querySelector.bind(document);

const $body = dom('body');

export const subscribe = (...events) => {
    events.forEach((event) => {
        const name = Object.keys(event).pop();
        const callback = event[name];

        window.addEventListener(name, callback);
    })
};

export const publish = ({name, detail, context = window}) => context.dispatchEvent(new CustomEvent(name, {detail}));

export class View {
    constructor(context) {
        this.$container = document.createElement('section');
        this.$container.classList.add(context);

        $body.appendChild(this.$container);
    }

    render() {
        throw new Error('Class extending View must implement its render() method');
    }
}

export class FeatureView extends View {
    static start() {
        throw new Error('Class extending FeatureView must implement its start() method');
    }
}