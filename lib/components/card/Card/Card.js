import { jsx as r } from "react/jsx-runtime";
import { c as e } from "../../../index-DIxK0V-G.js";
import { applyGridClasses as p } from "../../grid/Grid/utils.js";
const N = ({
  layout: a = "standardDefault",
  headerFirst: t,
  children: c,
  className: d,
  gridLayout: s,
  containerProps: i,
  ...l
}) => {
  const { className: n, ...o } = i || {}, f = s && p(s), m = e(
    "usa-card",
    {
      "usa-card--header-first": t,
      "usa-card--flag": a === "flagDefault" || a === "flagMediaRight",
      "usa-card--media-right": a === "flagMediaRight"
    },
    f,
    d
  ), g = e("usa-card__container", n);
  return /* @__PURE__ */ r("li", { className: m, "data-testid": "Card", ...l, children: /* @__PURE__ */ r("div", { className: g, ...o, children: c }) });
};
export {
  N as default
};
//# sourceMappingURL=Card.js.map
