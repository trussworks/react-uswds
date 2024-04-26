import { jsx as s } from "react/jsx-runtime";
import { c as a } from "../../../index-DIxK0V-G.js";
const i = ({
  isOpen: n,
  children: t,
  className: e,
  spanProps: o,
  ...r
}) => {
  const c = a(
    "usa-accordion__button usa-banner__button",
    e
  ), { className: u, ...m } = o || {}, p = a("usa-banner__button-text", u);
  return /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      className: c,
      "aria-expanded": n,
      ...r,
      children: /* @__PURE__ */ s("span", { className: p, ...m, children: t })
    }
  );
};
export {
  i as default
};
//# sourceMappingURL=BannerButton.js.map
