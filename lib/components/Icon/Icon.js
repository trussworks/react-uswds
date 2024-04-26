import { jsx as m } from "react/jsx-runtime";
import { c as t } from "../../index-DIxK0V-G.js";
const N = (s) => {
  const o = (c) => {
    const {
      size: a,
      className: e,
      focusable: n = !1,
      role: i = "img",
      ...l
    } = c, r = {
      className: t(
        "usa-icon",
        {
          [`usa-icon--size-${a}`]: a !== void 0
        },
        e
      ),
      focusable: n,
      role: i,
      ...l
    };
    return /* @__PURE__ */ m(s, { ...r });
  };
  return o.displayName = s.displayName, o;
};
export {
  N as makeUSWDSIcon
};
//# sourceMappingURL=Icon.js.map
