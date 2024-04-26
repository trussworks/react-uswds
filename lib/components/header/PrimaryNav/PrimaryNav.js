import { jsxs as n, jsx as s } from "react/jsx-runtime";
import { c } from "../../../index-DIxK0V-G.js";
import l from "../NavCloseButton/NavCloseButton.js";
import p from "../NavList/NavList.js";
const x = ({
  items: a,
  onToggleMobileNav: r,
  mobileExpanded: o,
  children: t,
  className: i,
  ...m
}) => {
  const e = c(
    "usa-nav",
    {
      "is-visible": o
    },
    i
  );
  return /* @__PURE__ */ n("nav", { className: e, ...m, children: [
    /* @__PURE__ */ s(l, { onClick: r }),
    /* @__PURE__ */ s(p, { items: a, type: "primary" }),
    t
  ] });
};
export {
  x as default
};
//# sourceMappingURL=PrimaryNav.js.map
