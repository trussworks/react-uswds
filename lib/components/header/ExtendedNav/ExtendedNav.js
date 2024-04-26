import { jsx as s, jsxs as a } from "react/jsx-runtime";
import { c as d } from "../../../index-DIxK0V-G.js";
import v from "../NavCloseButton/NavCloseButton.js";
import e from "../NavList/NavList.js";
const y = ({
  primaryItems: r,
  secondaryItems: i,
  mobileExpanded: n = !1,
  children: t,
  className: o,
  onToggleMobileNav: m,
  ...c
}) => {
  const l = d(
    "usa-nav",
    {
      "is-visible": n
    },
    o
  );
  return /* @__PURE__ */ s("nav", { className: l, ...c, children: /* @__PURE__ */ a("div", { className: "usa-nav__inner", children: [
    /* @__PURE__ */ s(v, { onClick: m }),
    /* @__PURE__ */ s(e, { items: r, type: "primary" }),
    /* @__PURE__ */ a("div", { className: "usa-nav__secondary", children: [
      /* @__PURE__ */ s(e, { items: i, type: "secondary" }),
      t
    ] })
  ] }) });
};
export {
  y as default
};
//# sourceMappingURL=ExtendedNav.js.map
