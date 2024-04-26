import { jsx as r, jsxs as a } from "react/jsx-runtime";
import { c as o } from "../../../index-DIxK0V-G.js";
const m = ({
  label: c,
  status: e = "incomplete",
  className: s,
  ...t
}) => {
  const n = o(
    "usa-step-indicator__segment",
    {
      "usa-step-indicator__segment--complete": e === "complete",
      "usa-step-indicator__segment--current": e === "current"
    },
    s
  );
  return /* @__PURE__ */ r(
    "li",
    {
      className: n,
      "aria-current": e === "current" ? "true" : void 0,
      ...t,
      children: /* @__PURE__ */ a("span", { className: "usa-step-indicator__segment-label", children: [
        c,
        " ",
        e !== "current" && /* @__PURE__ */ r("span", { className: "usa-sr-only", children: e === "complete" ? "completed" : "not completed" })
      ] })
    }
  );
};
export {
  m as default
};
//# sourceMappingURL=StepIndicatorStep.js.map
