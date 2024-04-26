import { jsx as o } from "react/jsx-runtime";
import { forwardRef as c } from "react";
import { c as p } from "../../../index-DIxK0V-G.js";
const n = ({ id: a, children: s, isVisible: r, forceAction: e, className: l, handleClose: d, ...t }, i) => {
  const m = p(
    "usa-modal-wrapper",
    {
      "is-visible": r,
      "is-hidden": !r
    },
    l
  );
  return /* @__PURE__ */ o("div", { ref: i, id: a, className: m, role: "dialog", ...t, children: /* @__PURE__ */ o(
    "div",
    {
      "data-testid": "modalOverlay",
      className: "usa-modal-overlay",
      onClick: e ? void 0 : d,
      "aria-controls": a,
      children: s
    }
  ) });
}, w = c(n);
export {
  n as ModalWrapperForwardRef,
  w as default
};
//# sourceMappingURL=ModalWrapper.js.map
