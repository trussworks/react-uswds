import { jsx as a, jsxs as n } from "react/jsx-runtime";
import { forwardRef as c } from "react";
import { c as f } from "../../../index-DIxK0V-G.js";
import u from "../ModalCloseButton/ModalCloseButton.js";
const p = ({
  modalId: s,
  className: d,
  children: l,
  handleClose: r,
  isLarge: t = !1,
  forceAction: o = !1,
  ...m
}, e) => {
  const i = f(
    "usa-modal",
    {
      "usa-modal--lg": t
    },
    d
  );
  return /* @__PURE__ */ a(
    "div",
    {
      "data-testid": "modalWindow",
      className: i,
      ref: e,
      "data-force-action": o,
      ...m,
      children: /* @__PURE__ */ n("div", { className: "usa-modal__content", children: [
        /* @__PURE__ */ a("div", { className: "usa-modal__main", children: l }),
        !o && /* @__PURE__ */ a(u, { "aria-controls": s, handleClose: r })
      ] })
    }
  );
}, M = c(p);
export {
  p as ModalWindowForwardRef,
  M as default
};
//# sourceMappingURL=ModalWindow.js.map
