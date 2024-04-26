import { jsx as e } from "react/jsx-runtime";
import { c as u } from "../../../index-DIxK0V-G.js";
import c from "../NavList/NavList.js";
import a from "../../grid/Grid/Grid.js";
const g = ({
  items: s,
  isOpen: m,
  className: r,
  ...t
}) => {
  const n = u("usa-nav__submenu usa-megamenu", r);
  return /* @__PURE__ */ e("div", { className: n, hidden: !m, "data-testid": "megamenu", children: /* @__PURE__ */ e(a, { row: !0, gap: 4, children: s.map((o, i) => /* @__PURE__ */ e(a, { col: !0, children: /* @__PURE__ */ e(c, { items: o, type: "megamenu", ...t }) }, `subnav_col_${i}`)) }) });
};
export {
  g as default
};
//# sourceMappingURL=MegaMenu.js.map
