import { jsx as a, Fragment as n, jsxs as l } from "react/jsx-runtime";
import { SHORT_MONTH_LABELS as c } from "../constants.js";
const o = ({
  datetime: t
}) => {
  const e = new Date(t);
  return e && e.getTime && isNaN(e.getTime()) ? /* @__PURE__ */ a(n, {}) : /* @__PURE__ */ a(
    "div",
    {
      className: "usa-collection__calendar-date",
      "data-testid": "collection-calendar-date",
      children: /* @__PURE__ */ l("time", { dateTime: t, children: [
        /* @__PURE__ */ a("span", { className: "usa-collection__calendar-date-month", children: c[e.getMonth()] }),
        /* @__PURE__ */ a("span", { className: "usa-collection__calendar-date-day", children: e.getDate() })
      ] })
    }
  );
};
export {
  o as default
};
//# sourceMappingURL=CollectionCalendarDate.js.map
