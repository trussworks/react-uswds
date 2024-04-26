import { jsx as r } from "react/jsx-runtime";
import { c as e } from "../../../index-DIxK0V-G.js";
const i = ({
  children: o,
  id: t,
  expanded: a,
  className: s,
  ...n
}) => {
  const c = e("usa-accordion__button", s);
  return /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      className: c,
      "aria-expanded": a,
      "aria-controls": t,
      "data-testid": `accordionButton_${t}`,
      ...n,
      children: o
    }
  );
};
export {
  i as default
};
//# sourceMappingURL=AccordionButton.js.map
