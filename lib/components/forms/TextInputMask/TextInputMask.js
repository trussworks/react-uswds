import { jsxs as m, jsx as p } from "react/jsx-runtime";
import { useState as d, useEffect as M } from "react";
import { c as N } from "../../../index-DIxK0V-G.js";
import b from "../TextInput/TextInput.js";
import { maskString as i } from "./utils.js";
const E = ({
  id: c,
  className: f,
  mask: t,
  value: s,
  defaultValue: l,
  charset: a,
  onChange: e,
  ...g
}) => {
  const h = N(
    {
      "usa-masked": t
    },
    f
  ), [n, o] = d(
    // Ensure that this component preserves the expected behavior when a user sets the defaultValue
    i(s ?? l ?? "", t, a)
  );
  M(() => {
    o(
      i(
        s ?? l ?? "",
        t,
        a
      )
    );
  }, [s]);
  const [x, v] = d(t.substring(n.length)), I = (r) => {
    const u = i(r.target.value, t, a);
    v(t.substring(u.length)), o(u), r.target.value = u, e == null || e(r);
  };
  return /* @__PURE__ */ m("span", { className: "usa-input-mask", children: [
    /* @__PURE__ */ m(
      "span",
      {
        className: "usa-input-mask--content",
        "aria-hidden": !0,
        "data-testid": `${c}Mask`,
        children: [
          /* @__PURE__ */ p("i", { children: n }),
          x
        ]
      }
    ),
    /* @__PURE__ */ p(
      b,
      {
        "data-testid": "textInput",
        className: h,
        id: c,
        maxLength: t.length,
        onChange: I,
        value: n,
        ...g
      }
    )
  ] });
};
export {
  E as default
};
//# sourceMappingURL=TextInputMask.js.map
