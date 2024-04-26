import { jsxs as e, jsx as r } from "react/jsx-runtime";
import { c as i } from "../../../index-DIxK0V-G.js";
const h = ({
  id: a,
  name: o,
  className: l,
  label: t,
  inputRef: c,
  tile: d,
  labelDescription: s,
  ...n
}) => {
  const m = i("usa-radio", l), u = i("usa-radio__input", {
    "usa-radio__input--tile": d
  });
  return /* @__PURE__ */ e("div", { "data-testid": "radio", className: m, children: [
    /* @__PURE__ */ r(
      "input",
      {
        className: u,
        id: a,
        type: "radio",
        name: o,
        ref: c,
        ...n
      }
    ),
    /* @__PURE__ */ e("label", { className: "usa-radio__label", htmlFor: a, children: [
      t,
      s && /* @__PURE__ */ r("span", { className: "usa-checkbox__label-description", children: s })
    ] })
  ] });
};
export {
  h as default
};
//# sourceMappingURL=Radio.js.map
