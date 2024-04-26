import { jsxs as c, jsx as o } from "react/jsx-runtime";
import { c as t } from "../../../index-DIxK0V-G.js";
import l from "../../grid/GridContainer/GridContainer.js";
const u = ({
  size: s,
  returnToTop: a,
  primary: r,
  secondary: m,
  ...e
}) => {
  const i = t(
    "usa-footer",
    {
      "usa-footer--big": s === "big",
      "usa-footer--medium": s === "medium",
      "usa-footer--slim": s === "slim"
    },
    e.className
  );
  return /* @__PURE__ */ c("footer", { ...e, className: i, children: [
    a && a,
    /* @__PURE__ */ o("div", { className: "usa-footer__primary-section", children: r }),
    /* @__PURE__ */ o("div", { className: "usa-footer__secondary-section", children: /* @__PURE__ */ o(l, { children: m }) })
  ] });
};
export {
  u as default
};
//# sourceMappingURL=Footer.js.map
