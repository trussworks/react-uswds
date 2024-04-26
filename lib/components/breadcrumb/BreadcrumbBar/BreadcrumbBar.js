import { jsx as a } from "react/jsx-runtime";
import { c as u } from "../../../index-DIxK0V-G.js";
const d = ({
  variant: r = "default",
  children: s,
  className: e,
  navProps: c,
  listProps: m
}) => {
  const l = u(
    "usa-breadcrumb",
    {
      "usa-breadcrumb--wrap": r === "wrap"
    },
    e
  );
  return /* @__PURE__ */ a("nav", { className: l, "aria-label": "Breadcrumbs", ...c, children: /* @__PURE__ */ a("ol", { className: "usa-breadcrumb__list", ...m, children: s }) });
};
export {
  d as default
};
//# sourceMappingURL=BreadcrumbBar.js.map
