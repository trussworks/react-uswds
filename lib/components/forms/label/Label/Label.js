import { jsxs as e, jsx as r, Fragment as d } from "react/jsx-runtime";
import { c as u } from "../../../../index-DIxK0V-G.js";
import b from "../RequiredMarker/RequiredMarker.js";
const x = ({
  children: l,
  htmlFor: t,
  className: o,
  error: c,
  hint: a,
  srOnly: s,
  requiredMarker: m,
  ...n
}) => {
  const i = u(
    {
      "usa-label": !s,
      "usa-sr-only": s,
      "usa-label--error": c
    },
    o
  );
  return /* @__PURE__ */ e(
    "label",
    {
      ...n,
      "data-testid": "label",
      className: i,
      htmlFor: t,
      children: [
        l,
        a && /* @__PURE__ */ r("span", { className: "usa-hint", children: a }),
        m && /* @__PURE__ */ e(d, { children: [
          " ",
          /* @__PURE__ */ r(b, {})
        ] })
      ]
    }
  );
};
export {
  x as default
};
//# sourceMappingURL=Label.js.map
