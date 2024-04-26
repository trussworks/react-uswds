import { jsx as d } from "react/jsx-runtime";
import m from "react";
import { isCustomProps as l, gridContainerClasses as i } from "./utils.js";
function g(e) {
  if (l(e)) {
    const { className: s, containerSize: t, asCustom: r, children: a, ...n } = e, o = n, c = i(s, t);
    return m.createElement(
      r,
      {
        "data-testid": "gridContainer",
        className: c,
        ...o
      },
      a
    );
  } else {
    const { className: s, containerSize: t, children: r, ...a } = e, n = i(s, t);
    return /* @__PURE__ */ d(
      "div",
      {
        "data-testid": "gridContainer",
        className: n,
        ...a,
        children: r
      }
    );
  }
}
export {
  g as default
};
//# sourceMappingURL=GridContainer.js.map
