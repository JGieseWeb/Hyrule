import { createElement } from "../utils/elements";

export function createObjectElement({
  image,
  name,
  category,
  describtion,
  origin,
  id,
}) {
  return createElement("div", {
    className: "object-card",
    children: [
      createElement("img", { src: image, href: `details.html?id=${id}` }),

      createElement("h2", { innerText: name }),
      createElement("p", { innerText: category }),
      createElement("p", { innerText: describtion }),
      createElement("p", { innerText: origin.name }),
    ],
  });
}
