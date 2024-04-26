import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { c as _ } from "../../index-DIxK0V-G.js";
const h = "_alertWithCTA_16hlx_1", f = {
  alertWithCTA: h
}, C = ({
  type: a,
  heading: t,
  headingLevel: n,
  cta: s,
  children: e,
  slim: c,
  noIcon: o,
  className: u,
  validation: l,
  ...d
}) => {
  const m = _(
    "usa-alert",
    {
      "usa-alert--success": a === "success",
      "usa-alert--warning": a === "warning",
      "usa-alert--error": a === "error",
      "usa-alert--info": a === "info",
      "usa-alert--slim": c,
      "usa-alert--no-icon": o,
      "usa-alert--validation": l,
      [f.alertWithCTA]: !!s
    },
    u
  );
  return /* @__PURE__ */ i("div", { className: m, "data-testid": "alert", ...d, children: [
    /* @__PURE__ */ i("div", { className: "usa-alert__body", children: [
      t && /* @__PURE__ */ r(n, { className: "usa-alert__heading", children: t }),
      e && (l ? e : /* @__PURE__ */ r("p", { className: "usa-alert__text", children: e }))
    ] }),
    s && /* @__PURE__ */ r("div", { children: s })
  ] });
};
export {
  C as default
};
//# sourceMappingURL=Alert.js.map
