import { jsxs as d, jsx as r } from "react/jsx-runtime";
import { c as n } from "../../../index-DIxK0V-G.js";
import f from "../../forms/label/Label/Label.js";
import p from "../../forms/TextInput/TextInput.js";
const j = ({
  isBig: s,
  className: a,
  placeholder: t,
  defaultValue: c,
  inputName: i = "search",
  label: l = "Search",
  inputId: e = "search-field",
  inputProps: m,
  ...o
}) => {
  const h = n(
    {
      "usa-search--big": s
    },
    a
  );
  return /* @__PURE__ */ d("div", { className: h, "data-testid": "searchField", ...o, children: [
    /* @__PURE__ */ r(f, { srOnly: !0, htmlFor: e, children: l }),
    /* @__PURE__ */ r(
      p,
      {
        id: e,
        name: i,
        type: "search",
        placeholder: t,
        defaultValue: c,
        ...m
      }
    )
  ] });
};
export {
  j as default
};
//# sourceMappingURL=SearchField.js.map
