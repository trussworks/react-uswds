import { jsxs as o, jsx as s } from "react/jsx-runtime";
import { useState as q, useEffect as w } from "react";
import { c as n } from "../../index-DIxK0V-G.js";
import A from "../Link/Link.js";
const L = {}, F = ({
  className: l,
  content: t,
  headingLevel: m = "h4",
  mainProps: p,
  navProps: d,
  rootMargin: h = "0px 0px 0px 0px",
  scrollOffset: i,
  threshold: g = 1,
  title: r = "On this page",
  ...u
}) => {
  const v = n("usa-in-page-nav", L.target, l), { className: f, ...N } = d || {}, _ = n("usa-in-page-nav__nav", f), { className: x, ...b } = p || {}, C = n("main-content", x), y = m, I = {
    "--margin-offset": i
  }, [S, P] = q(""), E = t.props.children.filter(
    (a) => a.type === "h2" || a.type === "h3"
  ), j = (a) => {
    a.forEach((e) => {
      e.isIntersecting && P(e.target.id);
    });
  }, k = {
    root: null,
    rootMargin: h,
    threshold: [g]
  }, H = new IntersectionObserver(j, k);
  return w(() => {
    document.querySelectorAll("h2,h3").forEach((a) => H.observe(a));
  }), /* @__PURE__ */ o("div", { className: "usa-in-page-nav-container", ...u, children: [
    /* @__PURE__ */ s(
      "aside",
      {
        className: v,
        "aria-label": r,
        "data-testid": "InPageNavigation",
        children: /* @__PURE__ */ o("nav", { className: _, ...N, children: [
          /* @__PURE__ */ s(y, { className: "usa-in-page-nav__heading", tabIndex: 0, children: r }),
          /* @__PURE__ */ s("ul", { className: "usa-in-page-nav__list", children: E.map((a) => {
            const e = a.props.children, c = a.props.id, O = n("usa-in-page-nav__item", {
              "usa-in-page-nav__item--sub-item": a.type === "h3"
            }), $ = n("usa-in-page-nav__link", {
              "usa-current": c === S
            });
            return /* @__PURE__ */ s("li", { className: O, children: /* @__PURE__ */ s(A, { href: `#${c}`, className: $, children: e }) }, `usa-in-page-nav__item_${e}`);
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ s(
      "main",
      {
        id: "main-content",
        className: C,
        ...b,
        style: i ? I : void 0,
        children: t
      }
    )
  ] });
};
export {
  F as default
};
//# sourceMappingURL=InPageNavigation.js.map
