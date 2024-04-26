import { jsx as i } from "react/jsx-runtime";
import m from "react";
import { isCustomProps as f, linkClasses as r, handleKeyDown as u } from "./utils.js";
function N(s) {
  if (f(s)) {
    const { variant: a, className: e, asCustom: n, children: t, ...o } = s, l = o, c = r(a, e);
    return m.createElement(
      n,
      {
        className: c,
        ...l
      },
      t
    );
  } else {
    const {
      children: a,
      className: e,
      variant: n,
      allowSpacebarActivation: t = !1,
      ...o
    } = s, l = r(n, e);
    return /* @__PURE__ */ i(
      "a",
      {
        className: l,
        ...t && { onKeyDown: u },
        ...o,
        children: a
      }
    );
  }
}
export {
  N as default
};
//# sourceMappingURL=Link.js.map
