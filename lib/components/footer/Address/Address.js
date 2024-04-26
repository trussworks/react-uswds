import { jsx as s } from "react/jsx-runtime";
import { c as p } from "../../../index-DIxK0V-G.js";
import r from "../../grid/Grid/Grid.js";
const g = ({
  size: e,
  className: c,
  items: t,
  ...m
}) => {
  const l = e === "big", n = e === "medium", o = e === "slim", u = p("usa-footer__address", c), i = {
    col: l || n || o ? "auto" : void 0,
    mobileLg: o ? { col: 12 } : void 0,
    desktop: o ? { col: "auto" } : void 0
  };
  return /* @__PURE__ */ s("address", { className: u, ...m, children: o ? /* @__PURE__ */ s(r, { row: !0, gap: !0, children: t.map((a, d) => /* @__PURE__ */ s(r, { ...i, children: /* @__PURE__ */ s("div", { className: "usa-footer__contact-info", children: a }) }, `addressItem-${d}`)) }) : /* @__PURE__ */ s(r, { row: !0, gap: !0, className: "usa-footer__contact-info", children: t.map((a, d) => /* @__PURE__ */ s(r, { ...i, children: a }, `addressItem-${d}`)) }) });
};
export {
  g as default
};
//# sourceMappingURL=Address.js.map
