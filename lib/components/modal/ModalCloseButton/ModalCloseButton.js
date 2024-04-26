import { jsx as o } from "react/jsx-runtime";
import e from "../../Icon/Icons.js";
import l from "../../Button/Button.js";
const n = ({
  handleClose: t,
  ...a
}) => /* @__PURE__ */ o(
  l,
  {
    "aria-label": "Close this window",
    className: "usa-modal__close",
    onClick: t,
    "data-close-modal": !0,
    type: "button",
    ...a,
    children: /* @__PURE__ */ o(e.Close, { "aria-hidden": "true" })
  }
);
export {
  n as default
};
//# sourceMappingURL=ModalCloseButton.js.map
