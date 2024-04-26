import { jsxs as e, Fragment as o, jsx as m } from "react/jsx-runtime";
import { c as r } from "../../../index-DIxK0V-G.js";
import f from "../label/RequiredMarker/RequiredMarker.js";
const h = ({
  children: l,
  legend: a,
  className: t,
  legendStyle: s = "default",
  requiredMarker: d,
  ...i
}) => {
  const n = r("usa-fieldset", t), c = r({
    "usa-legend": s === "default",
    "usa-legend--large": s === "large",
    "usa-sr-only": s === "srOnly"
  });
  return /* @__PURE__ */ e("fieldset", { "data-testid": "fieldset", className: n, ...i, children: [
    a && /* @__PURE__ */ e("legend", { className: c, children: [
      a,
      d && /* @__PURE__ */ e(o, { children: [
        " ",
        /* @__PURE__ */ m(f, {})
      ] })
    ] }),
    l
  ] });
};
export {
  h as default
};
//# sourceMappingURL=Fieldset.js.map
