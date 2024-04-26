import { jsx as C } from "react/jsx-runtime";
import L from "react";
import { c } from "../../../index-DIxK0V-G.js";
import { getGridClasses as m, isCustomProps as N } from "./utils.js";
import { breakpoints as O } from "../constants.js";
function R(a) {
  const {
    children: i,
    className: p,
    row: n,
    col: l,
    gap: d,
    offset: f,
    mobile: b,
    mobileLg: g,
    tablet: P,
    tabletLg: u,
    desktop: k,
    desktopLg: h,
    widescreen: j,
    ...e
  } = a, w = {
    row: n,
    col: l,
    gap: d,
    offset: f
  }, y = {
    mobile: b,
    mobileLg: g,
    tablet: P,
    tabletLg: u,
    desktop: k,
    desktopLg: h,
    widescreen: j
  };
  let s = m(w);
  if (Object.keys(O).forEach((o) => {
    const t = o;
    if (Object.prototype.hasOwnProperty.call(y, t)) {
      const r = a[t];
      s = c(s, m(r, t));
    }
  }), s = c(s, p), N(e)) {
    const { asCustom: o, ...t } = e, r = t;
    return L.createElement(
      o,
      {
        className: s,
        ...r
      },
      i
    );
  } else
    return /* @__PURE__ */ C("div", { className: s, "data-testid": "grid", ...e, children: i });
}
export {
  R as default
};
//# sourceMappingURL=Grid.js.map
