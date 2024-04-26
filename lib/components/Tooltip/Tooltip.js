import { jsxs as A, jsx as w } from "react/jsx-runtime";
import { useRef as T, useState as f, useEffect as R, createElement as X } from "react";
import { c as b } from "../../index-DIxK0V-G.js";
import { isElementInViewport as Z, isCustomProps as q, calculateMarginOffset as c } from "./utils.js";
import { TRIANGLE_SIZE as y } from "./constants.js";
import z from "../Button/Button.js";
function J(u) {
  const r = T(null), a = T(null), m = T(
    `tooltip-${Math.floor(Math.random() * 9e5) + 1e5}`
  ), [i, $] = f(!1), [V, v] = f(!1), [d, g] = f(void 0), [k, _] = f(0), [M, N] = f(!1), [x, h] = f({}), { position: D, wrapperclasses: H, className: O } = u, B = (t, o) => {
    const e = c("top", t.offsetHeight, o), s = c("left", t.offsetWidth, o);
    g("top"), h({
      left: "50%",
      top: `-${y}px`,
      margin: `-${e}px 0 0 -${s / 2}px`
    });
  }, I = (t, o) => {
    const e = c("left", t.offsetWidth, o);
    g("bottom"), h({
      left: "50%",
      margin: `${y}px 0 0 -${e / 2}px`
    });
  }, P = (t, o) => {
    const e = c("top", t.offsetHeight, o);
    g("right"), h({
      top: "50%",
      left: `${o.offsetLeft + o.offsetWidth + y}px`,
      margin: `-${e / 2}px 0 0 0`
    });
  }, W = (t, o) => {
    const e = c("top", t.offsetHeight, o), s = c(
      "left",
      o.offsetLeft > t.offsetWidth ? o.offsetLeft - t.offsetWidth : t.offsetWidth,
      o
    );
    g("left"), h({
      top: "50%",
      left: `-${y}px`,
      margin: `-${e / 2}px 0 0 ${o.offsetLeft > t.offsetWidth ? s : -s}px`
    });
  }, L = [B, I, P, W], S = L.length;
  R(() => {
    if (i && r.current && a.current) {
      const t = r.current, o = a.current;
      if (Z(o))
        v(!0);
      else {
        const s = k;
        if (s < S || M === !1)
          if (_((n) => n + 1), s < S) {
            const n = L[parseInt(`${s}`)];
            n(o, t);
          } else
            N(!0), _(0);
        else
          console.warn(
            "No visible position found - this may mean your tooltip contents is too long!"
          );
      }
    }
  }, [d, x, M]), R(() => {
    if (!i)
      v(!1), N(!1), _(0);
    else if (r.current && a.current) {
      const t = r.current, o = a.current;
      switch (D) {
        case "top":
          B(o, t);
          break;
        case "bottom":
          I(o, t);
          break;
        case "right":
          P(o, t);
          break;
        case "left":
          W(o, t);
          break;
      }
    }
  }, [i]);
  const l = () => {
    $(!0);
  }, p = () => {
    $(!1);
  }, C = b("usa-tooltip", H), E = b("usa-tooltip__body", {
    "is-set": i,
    "usa-tooltip__body--top": d === "top",
    "usa-tooltip__body--bottom": d === "bottom",
    "usa-tooltip__body--right": d === "right",
    "usa-tooltip__body--left": d === "left",
    "is-visible": V,
    // isShown is set after positioning updated, to prevent jitter when position changes
    "usa-tooltip__body--wrap": i && M
  });
  if (q(u)) {
    const { label: t, title: o, asCustom: e, children: s, className: n, ...j } = u, F = j, K = b("usa-tooltip__trigger", n), G = X(
      e,
      {
        ref: r,
        "data-testid": "triggerElement",
        "aria-describedby": m.current,
        tabIndex: 0,
        title: "",
        onMouseEnter: l,
        onMouseOver: l,
        onFocus: l,
        onMouseLeave: p,
        onBlur: p,
        onKeyDown: p,
        className: K,
        ...F
      },
      s
    );
    return /* @__PURE__ */ A("span", { "data-testid": "tooltipWrapper", className: C, children: [
      G,
      /* @__PURE__ */ w(
        "span",
        {
          "data-testid": "tooltipBody",
          title: o ?? (typeof t == "string" ? t : void 0),
          id: m.current,
          ref: a,
          className: E,
          role: "tooltip",
          "aria-hidden": !i,
          style: x,
          children: t
        }
      )
    ] });
  } else {
    const { label: t, title: o, children: e, ...s } = u, n = b("usa-tooltip__trigger", O);
    return /* @__PURE__ */ A("span", { "data-testid": "tooltipWrapper", className: C, children: [
      /* @__PURE__ */ w(
        z,
        {
          "data-testid": "triggerElement",
          ref: r,
          "aria-describedby": m.current,
          tabIndex: 0,
          type: "button",
          className: n,
          title: "",
          onMouseEnter: l,
          onMouseOver: l,
          onFocus: l,
          onMouseLeave: p,
          onBlur: p,
          onKeyDown: p,
          ...s,
          children: e
        }
      ),
      /* @__PURE__ */ w(
        "span",
        {
          "data-testid": "tooltipBody",
          title: o ?? (typeof t == "string" ? t : void 0),
          id: m.current,
          ref: a,
          className: E,
          role: "tooltip",
          "aria-hidden": !i,
          style: x,
          children: t
        }
      )
    ] });
  }
}
J.defaultProps = {
  position: "top"
};
export {
  J as default
};
//# sourceMappingURL=Tooltip.js.map
