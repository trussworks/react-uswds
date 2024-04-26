import { jsx as t, jsxs as l } from "react/jsx-runtime";
import { c as i } from "../../../index-DIxK0V-G.js";
import n from "../../Icon/Icons.js";
import u from "../../Button/Button.js";
const f = ({
  size: e,
  className: r,
  i18n: s,
  buttonAriaLabel: o
}) => {
  const a = (s == null ? void 0 : s.buttonText) || "Search", c = e === "small", m = i(
    {
      "usa-search--small": c,
      "usa-search--big": e === "big"
    },
    r
  );
  return /* @__PURE__ */ t("div", { className: m, children: /* @__PURE__ */ l(u, { "aria-label": o || a, type: "submit", children: [
    !c && /* @__PURE__ */ t("span", { className: "usa-search__submit-text", children: a }),
    /* @__PURE__ */ t(
      n.Search,
      {
        className: "usa-search__submit-icon",
        name: a,
        size: 3
      }
    )
  ] }) });
};
export {
  f as default
};
//# sourceMappingURL=SearchButton.js.map
