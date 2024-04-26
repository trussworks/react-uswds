import { jsx as n } from "react/jsx-runtime";
import { c as o } from "../../../index-DIxK0V-G.js";
import u from "../../Link/Link.js";
import p from "../../Button/Button.js";
const $ = ({
  page: a,
  isCurrent: t,
  pathname: e,
  onClickPageNumber: i,
  className: r,
  ...l
}) => {
  const c = o(
    "usa-pagination__item usa-pagination__page-no",
    r
  ), s = o("usa-pagination__button", {
    "usa-current": t
  });
  return /* @__PURE__ */ n("li", { className: c, ...l, children: i ? /* @__PURE__ */ n(
    p,
    {
      type: "button",
      unstyled: !0,
      "data-testid": "pagination-page-number",
      className: s,
      "aria-label": `Page ${a}`,
      "aria-current": t ? "page" : void 0,
      onClick: (m) => {
        i(m, a);
      },
      children: a
    }
  ) : /* @__PURE__ */ n(
    u,
    {
      href: `${e}?page=${a}`,
      className: s,
      "aria-label": `Page ${a}`,
      "aria-current": t ? "page" : void 0,
      children: a
    }
  ) }, `pagination_page_${a}`);
};
export {
  $ as default
};
//# sourceMappingURL=PaginationPage.js.map
