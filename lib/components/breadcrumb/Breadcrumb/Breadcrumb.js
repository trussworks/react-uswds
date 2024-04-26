import { jsx as c } from "react/jsx-runtime";
import { c as m } from "../../../index-DIxK0V-G.js";
const l = ({
  children: a,
  current: s = !1,
  className: r,
  ...e
}) => {
  const t = m(
    "usa-breadcrumb__list-item",
    {
      "usa-current": s
    },
    r
  );
  return /* @__PURE__ */ c(
    "li",
    {
      className: t,
      "aria-current": s ? "page" : void 0,
      ...e,
      children: a
    }
  );
};
export {
  l as default
};
//# sourceMappingURL=Breadcrumb.js.map
