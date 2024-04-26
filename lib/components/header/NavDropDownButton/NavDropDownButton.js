import { jsx as a } from "react/jsx-runtime";
import { c as i } from "../../../index-DIxK0V-G.js";
const p = ({
  label: t,
  menuId: n,
  isOpen: o,
  onToggle: s,
  isCurrent: r,
  className: c,
  ...e
}) => {
  const u = i(
    "usa-accordion__button",
    "usa-nav__link",
    {
      "usa-current": r
    },
    c
  );
  return /* @__PURE__ */ a(
    "button",
    {
      "data-testid": "navDropDownButton",
      className: u,
      "aria-expanded": o,
      "aria-controls": n,
      onClick: () => s(),
      ...e,
      type: "button",
      children: /* @__PURE__ */ a("span", { children: t })
    }
  );
};
export {
  p as default
};
//# sourceMappingURL=NavDropDownButton.js.map
