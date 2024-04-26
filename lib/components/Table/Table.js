import { jsxs as u, jsx as a, Fragment as h } from "react/jsx-runtime";
import { c as p } from "../../index-DIxK0V-G.js";
const x = "_fixed_1khz6_1", g = {
  fixed: x
}, S = ({
  bordered: n,
  caption: t,
  children: o,
  className: i,
  fullWidth: r,
  fixed: c,
  scrollable: d,
  striped: b,
  compact: s,
  stackedStyle: e = "none",
  ...m
}) => {
  const f = p(
    "usa-table",
    {
      "usa-table--borderless": !n,
      "width-full": r,
      [`${g.fixed}`]: c,
      "usa-table--striped": b,
      "usa-table--compact": s,
      "usa-table--stacked": e === "default",
      "usa-table--stacked-header": e === "headers"
    },
    i
  );
  s && e !== "none" && console.warn(
    "USWDS states that compact styling is not suitable for use with stacked variants. See USWDS Table component, Table variants for more information: https://designsystem.digital.gov/components/table"
  );
  const l = /* @__PURE__ */ u("table", { className: f, "data-testid": "table", ...m, children: [
    t && /* @__PURE__ */ a("caption", { children: t }),
    o
  ] });
  return /* @__PURE__ */ a(h, { children: d ? /* @__PURE__ */ a(
    "div",
    {
      "data-testid": "scrollable-table-container",
      className: "usa-table-container--scrollable",
      tabIndex: 0,
      children: l
    }
  ) : l });
};
export {
  S as default
};
//# sourceMappingURL=Table.js.map
