import { jsxs as e, jsx as a } from "react/jsx-runtime";
import { c as o } from "../../../index-DIxK0V-G.js";
const k = ({
  id: s,
  name: l,
  className: t,
  label: h,
  inputRef: n,
  tile: r,
  labelDescription: c,
  ...x
}) => {
  const b = o("usa-checkbox", t), i = o("usa-checkbox__input", {
    "usa-checkbox__input--tile": r
  });
  return /* @__PURE__ */ e("div", { "data-testid": "checkbox", className: b, children: [
    /* @__PURE__ */ a(
      "input",
      {
        className: i,
        id: s,
        type: "checkbox",
        name: l,
        ref: n,
        ...x
      }
    ),
    /* @__PURE__ */ e("label", { className: "usa-checkbox__label", htmlFor: s, children: [
      h,
      c && /* @__PURE__ */ a("span", { className: "usa-checkbox__label-description", children: c })
    ] })
  ] });
};
export {
  k as default
};
//# sourceMappingURL=Checkbox.js.map
