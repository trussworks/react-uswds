import { jsx as a } from "react/jsx-runtime";
import { c as s } from "../../../index-DIxK0V-G.js";
const l = ({
  exdent: e,
  inset: d,
  imageClass: i,
  children: r,
  className: c,
  ...t
}) => {
  const m = s(
    "usa-card__media",
    {
      "usa-card__media--exdent": e,
      "usa-card__media--inset": d
    },
    c
  ), n = s("usa-card__img", i);
  return /* @__PURE__ */ a("div", { className: m, ...t, "data-testid": "CardMedia", children: /* @__PURE__ */ a("div", { className: n, children: r }) });
};
export {
  l as default
};
//# sourceMappingURL=CardMedia.js.map
