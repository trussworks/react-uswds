import { jsx as U } from "react/jsx-runtime";
import { useState as b } from "react";
import { c as j } from "../../../index-DIxK0V-G.js";
const S = ({
  className: s,
  inputRef: r,
  textPreposition: u,
  textUnit: l,
  ...c
}) => {
  const i = j("usa-range", s), m = 0, a = 100, d = Math.round(a / 2), f = "", g = "of", {
    min: p,
    max: v,
    defaultValue: t,
    value: e,
    ...x
  } = c, M = p || m, n = v || a, P = l || f, V = u || g, $ = e !== void 0 ? e : t !== void 0 ? t : d, [o, h] = b($), I = `${o} ${P} ${V} ${n}`;
  return /* @__PURE__ */ U(
    "input",
    {
      "data-testid": "range",
      "aria-valuetext": I,
      className: i,
      ref: r,
      type: "range",
      ...x,
      min: M,
      max: n,
      value: o,
      onChange: (N) => h(Number(N.target.value))
    }
  );
};
export {
  S as default
};
//# sourceMappingURL=RangeInput.js.map
