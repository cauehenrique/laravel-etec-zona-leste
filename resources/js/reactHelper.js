import { cloneElement } from "react";
import ReactDOM from "react-dom";

export default function drawComponent(className, element) {
    const elements = document.getElementsByClassName(className);

    for (var i = 0; i < elements.length; i++) {
        const loopElement = elements[i];
        const props = Object.assign({}, loopElement.dataset);

        ReactDOM.render(cloneElement(element, props), loopElement);
    }
}