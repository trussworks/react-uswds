import { jsx as l } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { c as p } from "../../index-DIxK0V-G.js";
const j = d(function({
  type: o = "button",
  children: u,
  secondary: s,
  base: a,
  accentStyle: t,
  outline: n,
  inverse: b,
  size: r,
  unstyled: e,
  className: c,
  ...m
}, i) {
  const f = p(
    "usa-button",
    {
      "usa-button--secondary": s,
      "usa-button--base": a,
      "usa-button--accent-cool": t === "cool",
      "usa-button--accent-warm": t === "warm",
      "usa-button--outline": n,
      "usa-button--inverse": b,
      "usa-button--big": r === "big",
      "usa-button--unstyled": e
    },
    c
  );
  return /* @__PURE__ */ l(
    "button",
    {
      type: o,
      className: f,
      "data-testid": "button",
      ref: i,
      ...m,
      children: u
    }
  );
});
export {
  j as default
};
//# sourceMappingURL=Button.js.map
