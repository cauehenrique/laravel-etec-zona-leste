import ReactDOM from "react-dom";

export default function renderPage(pageElement) {
    const element = document.getElementById('app');
    ReactDOM.render(pageElement, element)
}