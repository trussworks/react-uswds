import { jsx as r } from "react/jsx-runtime";
import { c as m } from "../../../index-DIxK0V-G.js";
const f = ({
  items: c,
  type: s,
  className: t,
  ...l
}) => {
  const a = s === "primary", n = s === "secondary", u = s === "subnav", e = s === "megamenu", o = s === "footerSecondary", i = s === "language", _ = m(
    {
      "usa-nav__primary usa-accordion": a,
      "usa-nav__secondary-links": n,
      "usa-nav__submenu": u,
      "usa-nav__submenu-list": e,
      "usa-list usa-list--unstyled": o,
      "usa-language__submenu": i
    },
    t
  ), d = m({
    "usa-nav__primary-item": a,
    "usa-nav__secondary-item": n,
    "usa-nav__submenu-item": u || e,
    "usa-footer__secondary-link": o,
    "usa-language__submenu-item": i
  });
  return /* @__PURE__ */ r("ul", { className: _, ...l, children: c.map((g, v) => /* @__PURE__ */ r("li", { className: d, children: g }, `item_${v}`)) });
};
export {
  f as default
};
//# sourceMappingURL=NavList.js.map
