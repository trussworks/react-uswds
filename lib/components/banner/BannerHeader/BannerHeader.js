import { jsx as e, jsxs as n } from "react/jsx-runtime";
import { c as a } from "../../../index-DIxK0V-G.js";
import r from "../../grid/Grid/Grid.js";
const T = ({
  children: d,
  isOpen: i,
  flagImg: s,
  innerDivProps: t,
  headerText: c,
  headerTextProps: l,
  headerActionText: o,
  headerActionProps: h,
  className: m,
  ...u
}) => {
  const p = a(
    "usa-banner__header",
    {
      "usa-banner__header--expanded": i
    },
    m
  ), { className: N, ..._ } = t || {}, b = a("usa-banner__inner", N), { className: x, ...v } = l || {}, C = a(
    "usa-banner__header-text",
    x
  ), { className: f, ...g } = h || {}, A = a(
    "usa-banner__header-action",
    f
  );
  return /* @__PURE__ */ e("header", { className: p, ...u, children: /* @__PURE__ */ n(
    "div",
    {
      className: b,
      ..._,
      "data-testid": "banner-header-inner-div",
      children: [
        s && /* @__PURE__ */ e(r, { col: "auto", "data-testid": "banner-header-flag-div", children: s }),
        /* @__PURE__ */ n(
          r,
          {
            col: "fill",
            tablet: { col: "auto" },
            "aria-hidden": !0,
            "data-testid": "banner-header-grid-div",
            children: [
              /* @__PURE__ */ e("p", { className: C, ...v, children: c }),
              /* @__PURE__ */ e(
                "p",
                {
                  className: A,
                  "aria-hidden": "true",
                  ...g,
                  children: o
                }
              )
            ]
          }
        ),
        d
      ]
    }
  ) });
};
export {
  T as default
};
//# sourceMappingURL=BannerHeader.js.map
