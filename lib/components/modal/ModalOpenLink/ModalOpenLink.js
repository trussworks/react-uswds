import { jsx as i } from "react/jsx-runtime";
import e from "../../Link/Link.js";
import { isCustomProps as c } from "../../Link/utils.js";
function d({
  modalRef: r,
  ...s
}) {
  var n;
  const u = (o) => {
    if (!r || !r.current)
      return console.error("ModalRef is required"), !1;
    o.preventDefault(), r.current.toggleModal(o, !0);
  }, t = {
    ...s,
    role: "button",
    "aria-controls": (n = r == null ? void 0 : r.current) == null ? void 0 : n.modalId,
    "data-open-modal": !0,
    onClick: u
  };
  return c(t) ? /* @__PURE__ */ i(e, { ...t }) : /* @__PURE__ */ i(e, { ...t });
}
export {
  d as default
};
//# sourceMappingURL=ModalOpenLink.js.map
