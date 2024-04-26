import { jsxs as l, Fragment as h, jsx as o } from "react/jsx-runtime";
import { c as t } from "../../../index-DIxK0V-G.js";
import u from "../AccordionButton/AccordionButton.js";
const C = ({
  title: a,
  id: n,
  content: e,
  expanded: s,
  className: c,
  headingLevel: r,
  handleToggle: i
}) => {
  const d = t("usa-accordion__heading", c), m = t(
    "usa-accordion__content",
    "usa-prose",
    c
  );
  return /* @__PURE__ */ l(h, { children: [
    /* @__PURE__ */ o(r, { className: d, children: /* @__PURE__ */ o(u, { expanded: s, id: n, onClick: i, children: a }) }),
    /* @__PURE__ */ o(
      "div",
      {
        id: n,
        "data-testid": `accordionItem_${n}`,
        className: m,
        hidden: !s,
        children: e
      }
    )
  ] });
};
export {
  C as default
};
//# sourceMappingURL=AccordionItem.js.map
