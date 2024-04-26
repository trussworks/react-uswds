import { jsx as n } from "react/jsx-runtime";
import { forwardRef as x, useState as T, useRef as i, useImperativeHandle as _, useEffect as g } from "react";
import j from "focus-trap-react";
import { useModal as v, getScrollbarWidth as C } from "../utils.js";
import B from "../ModalWindow/ModalWindow.js";
import F from "../ModalWrapper/ModalWrapper.js";
import W from "react-dom";
const $ = ({
  id: o,
  children: h,
  isLarge: R = !1,
  forceAction: r = !1,
  modalRoot: I = ".usa-modal-wrapper",
  renderToPortal: D = !0,
  isInitiallyOpen: M,
  ...s
}, O) => {
  const { isOpen: a, toggleModal: c } = v(M), [S, E] = T(!1), u = i(), m = i(), l = i(null), L = `body > *:not(${I || ".usa-modal-wrapper"}):not([aria-hidden])`, A = "[data-modal-hidden]", d = (e) => {
    c(e, !1);
  };
  _(
    O,
    () => ({
      modalId: o,
      modalIsOpen: a,
      toggleModal: c
    }),
    [o, a]
  );
  const N = () => {
    const { body: e } = document;
    e.style.paddingRight = m.current || "", e.classList.add("usa-js-modal--active"), document.querySelectorAll(L).forEach((t) => {
      t.setAttribute("aria-hidden", "true"), t.setAttribute("data-modal-hidden", "");
    }), r && e.classList.add("usa-js-no-click");
  }, f = () => {
    const { body: e } = document;
    e.style.paddingRight = u.current || "", e.classList.remove("usa-js-modal--active"), e.classList.remove("usa-js-no-click"), document.querySelectorAll(A).forEach((t) => {
      t.removeAttribute("aria-hidden"), t.removeAttribute("data-modal-hidden");
    });
  };
  g(() => {
    const e = C(), t = window.getComputedStyle(document.body).getPropertyValue("padding-right") || "0px", w = `${parseInt(t.replace(/px/, ""), 10) + parseInt(e.replace(/px/, ""), 10)}px`;
    return u.current = t, m.current = w, E(!0), () => {
      f();
    };
  }, []), g(() => {
    S && (a === !0 ? N() : a === !1 && f());
  }, [a]);
  const p = s["aria-labelledby"], b = s["aria-describedby"];
  p || console.error(`${o} is missing aria-labelledby attribute`), b || console.error(`${o} is missing aria-describedby attribute`), delete s["aria-labelledby"], delete s["aria-describedby"];
  const y = /* @__PURE__ */ n(j, { active: a, focusTrapOptions: {
    initialFocus: () => {
      var t;
      const e = (t = l.current) == null ? void 0 : t.querySelector("[data-focus]");
      return e || l.current || !1;
    },
    escapeDeactivates: () => r ? !1 : (d(), !0)
  }, children: /* @__PURE__ */ n(
    F,
    {
      role: "dialog",
      id: o,
      "aria-labelledby": p,
      "aria-describedby": b,
      "data-force-action": r,
      isVisible: a,
      handleClose: d,
      forceAction: r,
      children: /* @__PURE__ */ n(
        B,
        {
          modalId: o,
          ref: l,
          isLarge: R,
          forceAction: r,
          tabIndex: -1,
          handleClose: d,
          ...s,
          children: h
        }
      )
    }
  ) });
  if (D) {
    const t = document.getElementById("modal-root") || document.body;
    return W.createPortal(y, t);
  } else
    return y;
}, Q = x($);
export {
  $ as ModalForwardRef,
  Q as default
};
//# sourceMappingURL=Modal.js.map
