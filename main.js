import "./style.css";
import { createElement, removeChildren } from "./utils/elements";
import { createObjectElement } from "./components/objects";
import { debounce } from "./components/timer";
import { getObjects } from "./utils/api";
const header = createElement("header", {
  className: "header",
  children: [
    createElement("h1", {
      className: "header-title",
      innerText: "Welcome to Hyrule",
    }),
    createElement("img", {
      className: "header__img",
      src: "img/kisspng-hyrule.png",
    }),
    createElement("input", {
      className: "input",
      placeholder: "Search",
      autofocus: true,
      oninput: debounce((event) => {
        removeChildren(objectSection);
        const search = event.target.value;
        getObjects(search).then((objects) => {
          objectSection.append(...objects.map(createObjectElement));
        });
      }, 300),
    }),
  ],
});
const objectSection = createElement("objectSection", {
  className: "objectSection",
});
const footer = createElement("footer", {
  className: "footer",
  children: [
    createElement("span", {
      innerText: "This is the best Footer",
    }),
  ],
});
document.querySelector("#app").append(header, objectSection, footer);
