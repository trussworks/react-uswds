import { jsx as N } from "react/jsx-runtime";
import { forwardRef as O } from "react";
import { c as R } from "../../../../index-DIxK0V-G.js";
import { formatDate as S, isIosDevice as W } from "../utils.js";
import { EN_US as j } from "../i18n.js";
const E = ({
  date: a,
  onClick: l,
  onKeyDown: f,
  onMouseMove: i,
  isDisabled: t = !1,
  isSelected: r = !1,
  isFocused: s = !1,
  isPrevMonth: u = !1,
  isFocusedMonth: d = !1,
  isNextMonth: m = !1,
  isToday: p = !1,
  isRangeDate: k = !1,
  isRangeStart: y = !1,
  isRangeEnd: h = !1,
  isWithinRange: g = !1,
  i18n: n = j
}, D) => {
  const e = a.getDate(), o = a.getMonth(), c = a.getFullYear(), v = a.getDay(), _ = S(a), $ = s ? 0 : -1, w = R("usa-date-picker__calendar__date", {
    "usa-date-picker__calendar__date--previous-month": u,
    "usa-date-picker__calendar__date--current-month": d,
    "usa-date-picker__calendar__date--next-month": m,
    "usa-date-picker__calendar__date--selected": r,
    "usa-date-picker__calendar__date--today": p,
    "usa-date-picker__calendar__date--focused": s,
    "usa-date-picker__calendar__date--range-date": k,
    "usa-date-picker__calendar__date--range-date-start": y,
    "usa-date-picker__calendar__date--range-date-end": h,
    "usa-date-picker__calendar__date--within-range": g
  }), b = n.months[parseInt(`${o}`)], x = n.daysOfWeek[parseInt(`${v}`)], I = () => {
    l(_);
  }, M = (K) => {
    f(K);
  }, C = () => {
    t || W() || i(a);
  };
  return (
    // Ignoring error: "The attribute aria-selected is not supported by the role button. This role is implicit on the element button."
    // Ignoring because this attribute is present in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L1017)
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    /* @__PURE__ */ N(
      "button",
      {
        type: "button",
        "data-testid": "select-date",
        ref: D,
        onClick: I,
        tabIndex: $,
        className: w,
        "data-day": e,
        "data-month": o + 1,
        "data-year": c,
        "data-value": _,
        "aria-label": `${e} ${b} ${c} ${x}`,
        "aria-selected": !!r,
        disabled: t,
        onKeyDown: M,
        onMouseMove: d ? C : void 0,
        children: e
      }
    )
  );
}, B = O(E);
export {
  E as DayForwardRef,
  B as default
};
//# sourceMappingURL=Day.js.map
