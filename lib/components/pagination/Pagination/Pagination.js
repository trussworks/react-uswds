import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { c as j } from "../../../index-DIxK0V-G.js";
import u from "../../Icon/Icons.js";
import O from "../../Link/Link.js";
import $ from "../../Button/Button.js";
import A from "../PaginationOverflow/PaginationOverflow.js";
import C from "../PaginationPage/PaginationPage.js";
const G = ({
  pathname: g,
  totalPages: a,
  currentPage: i,
  className: y,
  maxSlots: h = 7,
  onClickPrevious: d,
  onClickNext: v,
  onClickPageNumber: B,
  ...S
}) => {
  const z = j("usa-pagination", y), N = i === 1, x = a ? i === a : !1, m = a ? a > h : !0, w = Math.round(h / 2), M = !!(a && a - i >= w), _ = m && i > w, f = M || !a, o = m || !a ? [i] : Array.from({ length: a }).map((t, l) => l + 1);
  if (m) {
    const t = N ? 0 : _ ? 2 : 1, l = x ? 0 : f ? 2 : 1, c = h - 1 - (t + l);
    let e = 0, s = 0;
    _ && f ? (e = Math.round((c - 1) / 2), s = c - e) : _ ? (s = (a || 0) - i - 1, s = s < 0 ? 0 : s, e = c - s) : f && (e = i - 2, e = e < 0 ? 0 : e, s = c - e);
    let p = 1;
    for (; e > 0; )
      o.unshift(i - p), p++, e--;
    for (p = 1; s > 0; )
      o.push(i + p), p++, s--;
    _ && o.unshift("overflow"), i !== 1 && o.unshift(1), f && o.push("overflow"), a && i !== a && o.push(a);
  }
  const k = !N && i - 1, b = !x && i + 1;
  return /* @__PURE__ */ n("nav", { "aria-label": "Pagination", className: z, ...S, children: /* @__PURE__ */ r("ul", { className: "usa-pagination__list", children: [
    k && /* @__PURE__ */ n("li", { className: "usa-pagination__item usa-pagination__arrow", children: d ? /* @__PURE__ */ r(
      $,
      {
        type: "button",
        unstyled: !0,
        className: "usa-pagination__link usa-pagination__previous-page",
        "aria-label": "Previous page",
        "data-testid": "pagination-previous",
        onClick: d,
        children: [
          /* @__PURE__ */ n(u.NavigateBefore, {}),
          /* @__PURE__ */ n("span", { className: "usa-pagination__link-text", children: "Previous" })
        ]
      }
    ) : /* @__PURE__ */ r(
      O,
      {
        href: `${g}?page=${k}`,
        className: "usa-pagination__link usa-pagination__previous-page",
        "aria-label": "Previous page",
        children: [
          /* @__PURE__ */ n(u.NavigateBefore, {}),
          /* @__PURE__ */ n("span", { className: "usa-pagination__link-text", children: "Previous" })
        ]
      }
    ) }),
    o.map(
      (t, l) => t === "overflow" ? /* @__PURE__ */ n(A, {}, `pagination_overflow_${l}`) : /* @__PURE__ */ n(
        C,
        {
          page: t,
          pathname: g,
          isCurrent: t === i,
          onClickPageNumber: B
        },
        `pagination_page_${t}`
      )
    ),
    b && /* @__PURE__ */ n("li", { className: "usa-pagination__item usa-pagination__arrow", children: v ? /* @__PURE__ */ r(
      $,
      {
        type: "button",
        unstyled: !0,
        className: "usa-pagination__link usa-pagination__next-page",
        "aria-label": "Next page",
        "data-testid": "pagination-next",
        onClick: v,
        children: [
          /* @__PURE__ */ n("span", { className: "usa-pagination__link-text", children: "Next" }),
          /* @__PURE__ */ n(u.NavigateNext, {})
        ]
      }
    ) : /* @__PURE__ */ r(
      O,
      {
        href: `${g}?page=${b}`,
        className: "usa-pagination__link usa-pagination__next-page",
        "aria-label": "Next page",
        children: [
          /* @__PURE__ */ n("span", { className: "usa-pagination__link-text", children: "Next" }),
          /* @__PURE__ */ n(u.NavigateNext, {})
        ]
      }
    ) })
  ] }) });
};
export {
  G as default
};
//# sourceMappingURL=Pagination.js.map
