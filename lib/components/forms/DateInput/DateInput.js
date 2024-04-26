import { jsxs as l, jsx as s } from "react/jsx-runtime";
import { c as t } from "../../../index-DIxK0V-G.js";
import i from "../TextInput/TextInput.js";
import d from "../label/Label/Label.js";
import h from "../FormGroup/FormGroup.js";
const F = ({
  id: o,
  name: m,
  label: a,
  unit: r,
  maxLength: e,
  minLength: p,
  className: n,
  ...u
}) => {
  const c = t({
    "usa-form-group--month": r == "month",
    "usa-form-group--day": r == "day",
    "usa-form-group--year": r == "year"
  }), f = t(n);
  return /* @__PURE__ */ l(h, { className: c, children: [
    /* @__PURE__ */ s(d, { htmlFor: o, children: a }),
    /* @__PURE__ */ s(
      i,
      {
        className: f,
        id: o,
        name: m,
        type: "text",
        maxLength: e,
        minLength: p,
        pattern: "[0-9]*",
        inputMode: "numeric",
        ...u
      }
    )
  ] });
};
export {
  F as default
};
//# sourceMappingURL=DateInput.js.map
