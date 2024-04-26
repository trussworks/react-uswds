import { jsxs as l, Fragment as n, jsx as e } from "react/jsx-runtime";
import i from "../Button/Button.js";
const d = (c) => c.map((t, r) => {
  const o = /* @__PURE__ */ l(n, { children: [
    /* @__PURE__ */ e("span", { lang: t.attr, children: /* @__PURE__ */ e("strong", { children: t.label }) }),
    t.label_local && ` (${t.label_local})`
  ] });
  return typeof t.on_click == "string" ? /* @__PURE__ */ e("a", { href: t.on_click, "data-testid": t.attr, children: o }, r) : /* @__PURE__ */ e(
    i,
    {
      onClick: t.on_click,
      "data-testid": t.attr,
      type: "button",
      unstyled: !0,
      children: o
    },
    r
  );
});
export {
  d as generateMenuItems
};
//# sourceMappingURL=utils.js.map
