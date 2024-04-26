import { jsx as i } from "react/jsx-runtime";
import { c } from "../../index-DIxK0V-G.js";
import m from "../Alert/Alert.js";
const g = ({
  variant: e,
  children: t,
  heading: s,
  showIcon: r = !0,
  slim: a = !1,
  className: l,
  ...o
}) => {
  const n = c(
    "usa-site-alert",
    {
      "usa-site-alert--info": e === "info",
      "usa-site-alert--emergency": e === "emergency",
      "usa-site-alert--no-heading": s === void 0 && !a,
      "usa-site-alert--no-icon": !r,
      "usa-site-alert--slim": a
    },
    l
  );
  return /* @__PURE__ */ i(
    "section",
    {
      "data-testid": "siteAlert",
      className: n,
      "aria-label": "Site alert",
      ...o,
      children: /* @__PURE__ */ i(m, { headingLevel: "h3", heading: s, validation: typeof t != "string", children: t })
    }
  );
};
export {
  g as default
};
//# sourceMappingURL=SiteAlert.js.map
