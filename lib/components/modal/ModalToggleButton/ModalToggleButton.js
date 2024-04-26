import { jsx as s } from "react/jsx-runtime";
import c from "../../Button/Button.js";
const p = ({
  modalRef: t,
  children: u,
  opener: r,
  closer: o,
  onClick: l,
  ...d
}) => {
  var n;
  const i = (a) => {
    if (!t || !t.current)
      return console.error("ModalRef is required"), !1;
    l && l(a), r && !o ? t.current.toggleModal(a, !0) : o && !r ? t.current.toggleModal(a, !1) : t.current.toggleModal(a);
  }, e = {
    "data-close-modal": !0,
    "data-open-modal": !0
  };
  return r && !o && delete e["data-close-modal"], o && !r && delete e["data-open-modal"], /* @__PURE__ */ s(
    c,
    {
      type: "button",
      "aria-controls": (n = t == null ? void 0 : t.current) == null ? void 0 : n.modalId,
      onClick: i,
      ...d,
      ...e,
      children: u
    }
  );
};
export {
  p as default
};
//# sourceMappingURL=ModalToggleButton.js.map
