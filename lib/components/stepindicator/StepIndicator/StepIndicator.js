import { jsxs as e, jsx as s } from "react/jsx-runtime";
import { c as t } from "../../../index-DIxK0V-G.js";
const k = ({
  showLabels: c = !0,
  counters: n = "none",
  centered: o = !1,
  children: a,
  className: d,
  divProps: l,
  listProps: p,
  headingProps: u,
  headingLevel: m,
  stepText: N = "Step",
  ofText: _ = "of"
}) => {
  const g = m, { className: h, ...f } = l || {}, { className: x, ...C } = p || {}, { className: S, ...b } = u || {}, I = t(
    "usa-step-indicator",
    {
      "usa-step-indicator--no-labels": !c,
      "usa-step-indicator--counters": n === "default",
      "usa-step-indicator--counters-sm": n === "small",
      "usa-step-indicator--center": o
    },
    d,
    h
  ), v = t(
    "usa-step-indicator__segments",
    x
  ), H = t(
    "usa-step-indicator__heading",
    S
  ), i = (() => {
    const r = a.findIndex((j) => j.props.status === "current");
    return r === -1 ? 0 : r;
  })(), L = i + 1, P = a[parseInt(`${i}`)].props.label, $ = a.length;
  return /* @__PURE__ */ e(
    "div",
    {
      className: I,
      "data-testid": "step-indicator",
      "aria-label": "progress",
      ...f,
      children: [
        /* @__PURE__ */ s("ol", { className: v, ...C, children: a }),
        /* @__PURE__ */ s("div", { className: "usa-step-indicator__header", children: /* @__PURE__ */ e(g, { className: H, ...b, children: [
          /* @__PURE__ */ e("span", { className: "usa-step-indicator__heading-counter", children: [
            /* @__PURE__ */ s("span", { className: "usa-sr-only", "data-testid": "step-text", children: N }),
            /* @__PURE__ */ s("span", { className: "usa-step-indicator__current-step", children: L }),
            " ",
            /* @__PURE__ */ s("span", { className: "usa-step-indicator__total-steps", children: `${_} ${$}` }),
            " "
          ] }),
          /* @__PURE__ */ s("span", { className: "usa-step-indicator__heading-text", children: P })
        ] }) })
      ]
    }
  );
};
export {
  k as default
};
//# sourceMappingURL=StepIndicator.js.map
