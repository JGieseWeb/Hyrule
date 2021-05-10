import "./style.css";
import { createElement, removeChildren } from "./utils/elements";
import { createObjectElement } from "./components/objects";
import { debounce } from "./components/timer";
import { getEntrys } from "./utils/api";
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
        removeChildren(entrySection);
        const search = event.target.value;
        console.log("1", search);
        getEntrys(search).then((entry) => {
          console.log(entry);
          entrySection.append(...entry.map(createObjectElement));
          console.log("2", entrySection);
        });
      }, 300),
    }),
  ],
});
const entrySection = createElement("entrySection", {
  className: "entrySection",
});
const footer = createElement("footer", {
  className: "footer",
  children: [
    createElement("span", {
      innerText: "This is the best Footer",
    }),
  ],
});
document.querySelector("#app").append(header, entrySection, footer);
