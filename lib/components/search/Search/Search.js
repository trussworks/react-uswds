import { jsxs as u, jsx as s } from "react/jsx-runtime";
import { c as d } from "../../../index-DIxK0V-G.js";
import S from "../../forms/Form/Form.js";
import x from "../SearchField/SearchField.js";
import g from "../SearchButton/SearchButton.js";
const k = ({
  onSubmit: e,
  size: r,
  className: a,
  placeholder: c,
  inputName: o = "search",
  label: m = "Search",
  inputId: t = "search-field",
  i18n: h,
  buttonAriaLabel: i,
  inputProps: l,
  defaultValue: f,
  ...n
}) => {
  const p = d("usa-search", a);
  return /* @__PURE__ */ u(
    S,
    {
      onSubmit: e,
      className: p,
      role: "search",
      search: !0,
      ...n,
      children: [
        /* @__PURE__ */ s(
          x,
          {
            isBig: r == "big",
            inputId: t,
            placeholder: c,
            label: m,
            defaultValue: f,
            inputProps: l,
            inputName: o
          }
        ),
        /* @__PURE__ */ s(g, { size: r, i18n: h, buttonAriaLabel: i })
      ]
    }
  );
};
export {
  k as default
};
//# sourceMappingURL=Search.js.map
