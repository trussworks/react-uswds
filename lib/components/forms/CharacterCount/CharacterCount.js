import { jsxs as y, Fragment as V, jsx as r } from "react/jsx-runtime";
import { useState as C, useRef as Y, useEffect as $ } from "react";
import { c as v } from "../../../index-DIxK0V-G.js";
import b from "../TextInput/TextInput.js";
import q from "../Textarea/Textarea.js";
import { defaultCharacterCount as w, defaultMessage as z } from "./utils.js";
const Q = ({
  id: c,
  name: g,
  className: I,
  maxLength: a,
  value: n = "",
  defaultValue: i = "",
  isTextArea: j = !1,
  getCharacterCount: _ = w,
  getMessage: B = z,
  ...M
}) => {
  const u = _(n || i), [l, S] = C(u), [A, E] = C(B(u, a)), [N, F] = C(u < a), f = Y(null), R = v("usa-character-count__field", I), P = v("usa-hint", "usa-character-count__status", {
    "usa-character-count__status--invalid": !N
  });
  $(() => {
    const t = B(l, a);
    E(t), F(l <= a);
    const s = setTimeout(() => {
      f.current && (f.current.textContent = t);
    }, 1e3);
    return () => clearTimeout(s);
  }, [l]);
  const T = (t, s) => {
    const e = N ? "" : "The content is too long.";
    t.target.setCustomValidity(e), s && s(t);
  }, x = (t, s) => {
    const {
      target: { value: e = "" }
    } = t;
    S(_(e)), s && s(t);
  };
  let m;
  if (j) {
    const { onBlur: t, onChange: s, inputRef: e, ...d } = M, h = {
      id: c,
      name: g,
      className: R,
      ...n ? { value: n } : { defaultValue: i },
      onBlur: (o) => T(o, t),
      onChange: (o) => x(o, s),
      inputRef: e,
      ...d
    };
    m = /* @__PURE__ */ r(q, { ...h });
  } else {
    const {
      onBlur: t,
      onChange: s,
      inputRef: e,
      type: d = "text",
      ...h
    } = M, o = {
      id: c,
      type: d,
      name: g,
      className: R,
      ...n ? { value: n } : { defaultValue: i },
      onBlur: (p) => T(p, t),
      onChange: (p) => x(p, s),
      inputRef: e,
      ...h
    };
    m = /* @__PURE__ */ r(b, { ...o });
  }
  return /* @__PURE__ */ y(V, { children: [
    m,
    /* @__PURE__ */ y("span", { className: "usa-sr-only", id: `${c}-info`, children: [
      "You can enter up to ",
      a,
      " characters"
    ] }),
    /* @__PURE__ */ r(
      "div",
      {
        className: P,
        "aria-hidden": "true",
        "data-testid": "characterCountMessage",
        children: A
      }
    ),
    /* @__PURE__ */ r(
      "div",
      {
        ref: f,
        className: "usa-character-count__sr-status usa-sr-only",
        "aria-live": "polite",
        "data-testid": "characterCountSRMessage"
      }
    )
  ] });
};
export {
  Q as default
};
//# sourceMappingURL=CharacterCount.js.map
