import { jsxs as n, Fragment as u, jsx as a } from "react/jsx-runtime";
import { c as s } from "../../../index-DIxK0V-G.js";
const x = ({
  basic: r,
  extended: d,
  basicWithMegaMenu: t,
  children: c,
  showMobileOverlay: e,
  className: i,
  ...m
}) => {
  const o = s(
    "usa-header",
    {
      "usa-header--basic": r,
      "usa-header--megamenu": t,
      "usa-header--extended": d
    },
    i
  ), l = s("usa-overlay", {
    "is-visible": e
  });
  return /* @__PURE__ */ n(u, { children: [
    e !== void 0 && /* @__PURE__ */ a("div", { className: l, "data-testid": "overlay" }),
    /* @__PURE__ */ a("header", { "data-testid": "header", className: o, ...m, children: c })
  ] });
};
export {
  x as default
};
//# sourceMappingURL=Header.js.map
