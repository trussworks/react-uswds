import { c as i } from "../../../index-DIxK0V-G.js";
import { breakpoints as a } from "../constants.js";
function $(s) {
  return "asCustom" in s;
}
const n = (s = {}, t) => {
  const r = t ? `${a[t]}:` : "", { row: e, col: o, gap: c, offset: p } = s;
  return i({
    [`${r}grid-row`]: e,
    [`${r}grid-gap`]: c === !0,
    [`${r}grid-gap-${c}`]: c !== !0 && !!c,
    [`${r}grid-col`]: o === !0,
    [`${r}grid-col-${o}`]: o !== !0 && !!o,
    [`${r}grid-offset-${p}`]: !!p
  });
}, g = (s) => {
  let t = n(s);
  return Object.keys(a).forEach((r) => {
    const e = r;
    if (Object.prototype.hasOwnProperty.call(s, e)) {
      const o = s[e];
      t = i(t, n(o, e));
    }
  }), t;
};
export {
  g as applyGridClasses,
  n as getGridClasses,
  $ as isCustomProps
};
//# sourceMappingURL=utils.js.map
