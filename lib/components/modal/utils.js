import { useState as d } from "react";
const c = (r) => {
  const [e, o] = d(r || !1), s = (l) => {
    const t = l.target;
    return l && t && t.closest(".usa-modal") ? t.hasAttribute("[data-close-modal]") || !!t.closest("[data-close-modal]") : !0;
  };
  return { isOpen: e, toggleModal: (l, t) => l && !s(l) ? (l.stopPropagation(), !1) : (o(t === !0 ? !0 : t === !1 ? !1 : (n) => !n), !0) };
}, u = () => {
  var r;
  if (typeof document < "u") {
    const e = document.createElement("div");
    e.setAttribute(
      "style",
      "visibility: hidden; overflow: scroll; ms-overflow-style: scrollbar"
    ), document.body.appendChild(e);
    const o = document.createElement("div");
    e.appendChild(o);
    const s = `${e.offsetWidth - o.offsetWidth}px`;
    return (r = e.parentNode) == null || r.removeChild(e), s;
  }
  return "";
};
export {
  u as getScrollbarWidth,
  c as useModal
};
//# sourceMappingURL=utils.js.map
