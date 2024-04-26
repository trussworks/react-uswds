import { jsx as n, jsxs as v } from "react/jsx-runtime";
import { useRef as d, useState as $, useEffect as F } from "react";
import { today as J, CalendarModes as i, addDays as A, isSameDay as u, subMonths as x, addMonths as L, startOfMonth as Te, isSameMonth as w, min as ge, max as Ee, subDays as Q, startOfWeek as V, isDateWithinMinAndMax as X, listToTable as Pe, setMonth as Ye, keepDateBetweenMinAndMax as h, setYear as ve, handleTabKey as Ae, subYears as Z, addYears as ee, endOfWeek as Ke, addWeeks as Se, subWeeks as De } from "../utils.js";
import Ie from "../Day/Day.js";
import We from "../MonthPicker/MonthPicker.js";
import $e from "../YearPicker/YearPicker.js";
import { EN_US as Fe } from "../i18n.js";
import { FocusMode as xe } from "../../../../utils/constants.js";
const Je = ({
  date: C,
  selectedDate: k,
  handleSelectDate: te,
  minDate: o,
  maxDate: r,
  rangeDate: f,
  setStatuses: K,
  focusMode: ae,
  i18n: c = Fe
}) => {
  const p = d(null), b = d(null), y = d(null), M = d(null), N = d(null), R = d(null), O = d(null), _ = d(null), [t, l] = $(C || J()), [S, T] = $(i.DATE_PICKER), [ne, m] = $([null, null]);
  let H = !0;
  const se = (e) => {
    let a = Ye(t, e);
    a = h(a, o, r), l(a), T(i.DATE_PICKER);
  }, ce = (e) => {
    let a = ve(t, e);
    a = h(a, o, r), l(a), T(i.DATE_PICKER);
  }, D = A(t, 0), U = t.getMonth(), I = t.getFullYear(), W = c.months[parseInt(`${U}`)], re = c.daysOfWeekShort, oe = c.daysOfWeek, le = c.backOneYear, de = c.backOneMonth, ie = `${W}. ${c.selectMonth}`, ue = `${I}. ${c.selectYear}`, _e = c.forwardOneMonth, he = c.forwardOneYear;
  if (F(() => {
    H = !1;
  }, []), F(() => {
    C && S === i.DATE_PICKER && l(C);
  }, [C]), F(() => {
    if (ae !== xe.Input) {
      const [e, a] = ne;
      if (e && a)
        e.disabled ? a.focus() : e.focus(), m([null, null]);
      else {
        const Y = _.current && _.current.querySelector(
          ".usa-date-picker__calendar__date--focused"
        );
        Y && Y.focus();
      }
    }
    if (H) {
      const e = [`${W} ${I}`];
      if (k && u(D, k)) {
        const a = c.selectedDate;
        e.unshift(a);
      }
      K(e);
    }
  }, [t]), S === i.MONTH_PICKER)
    return /* @__PURE__ */ n(
      We,
      {
        date: t,
        minDate: o,
        maxDate: r,
        handleSelectMonth: se,
        i18n: c
      }
    );
  if (S === i.YEAR_PICKER)
    return /* @__PURE__ */ n(
      $e,
      {
        date: t,
        minDate: o,
        maxDate: r,
        handleSelectYear: ce,
        setStatuses: K
      }
    );
  const fe = x(t, 1), ke = L(t, 1), pe = Te(t), B = w(t, o), j = r && w(t, r), q = k || t, g = f && ge(q, f), E = f && Ee(q, f), z = g && A(g, 1), G = E && Q(E, 1), be = (e) => {
    Ae(e, [
      p == null ? void 0 : p.current,
      b == null ? void 0 : b.current,
      N == null ? void 0 : N.current,
      R == null ? void 0 : R.current,
      y == null ? void 0 : y.current,
      M == null ? void 0 : M.current,
      O == null ? void 0 : O.current
    ]);
  }, ye = (e) => {
    let a;
    switch (e.key) {
      case "ArrowUp":
      case "Up":
        a = De(t, 1);
        break;
      case "ArrowDown":
      case "Down":
        a = Se(t, 1);
        break;
      case "ArrowLeft":
      case "Left":
        a = Q(t, 1);
        break;
      case "ArrowRight":
      case "Right":
        a = A(t, 1);
        break;
      case "Home":
        a = V(t);
        break;
      case "End":
        a = Ke(t);
        break;
      case "PageDown":
        e.shiftKey ? a = ee(t, 1) : a = L(t, 1);
        break;
      case "PageUp":
        e.shiftKey ? a = Z(t, 1) : a = x(t, 1);
        break;
      default:
        return;
    }
    if (a !== void 0) {
      const Y = h(
        a,
        o,
        r
      );
      u(t, Y) || l(a);
    }
    e.preventDefault();
  }, Me = (e) => {
    e !== t && l(e);
  }, me = () => {
    let e = Z(t, 1);
    e = h(e, o, r), l(e), m([p.current, _.current]);
  }, we = () => {
    let e = x(t, 1);
    e = h(e, o, r), l(e), m([b.current, _.current]);
  }, Ce = () => {
    let e = L(t, 1);
    e = h(e, o, r), l(e), m([y.current, _.current]);
  }, Ne = () => {
    let e = ee(t, 1);
    e = h(e, o, r), l(e), m([M.current, _.current]);
  }, Re = () => {
    T(i.MONTH_PICKER);
    const e = c.selectAMonth;
    K([e]);
  }, Oe = () => {
    T(i.YEAR_PICKER);
  }, P = [];
  let s = V(pe);
  for (; P.length < 28 || s.getMonth() === U || P.length % 7 !== 0; ) {
    const e = u(s, D);
    P.push(
      /* @__PURE__ */ n(
        Ie,
        {
          date: s,
          onClick: te,
          onKeyDown: ye,
          onMouseMove: Me,
          ref: e ? O : null,
          isDisabled: !X(s, o, r),
          isSelected: k && u(s, k),
          isFocused: e,
          isPrevMonth: w(s, fe),
          isFocusedMonth: w(s, D),
          isNextMonth: w(s, ke),
          isToday: u(s, J()),
          isRangeDate: f && u(s, f),
          isRangeStart: g && u(s, g),
          isRangeEnd: E && u(s, E),
          isWithinRange: z && G && X(
            s,
            z,
            G
          ),
          i18n: c
        }
      )
    ), s = A(s, 1);
  }
  return (
    // Ignoring error: "Static HTML elements with event handlers require a role."
    // Ignoring because this element does not have a role in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L1042)
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ v(
      "div",
      {
        tabIndex: -1,
        className: "usa-date-picker__calendar__date-picker",
        "data-testid": "calendar-date-picker",
        ref: _,
        onKeyDown: be,
        children: [
          /* @__PURE__ */ v("div", { className: "usa-date-picker__calendar__row", children: [
            /* @__PURE__ */ n("div", { className: "usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items", children: /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "data-testid": "previous-year",
                onClick: me,
                ref: p,
                className: "usa-date-picker__calendar__previous-year",
                "aria-label": le,
                disabled: B
              }
            ) }),
            /* @__PURE__ */ n("div", { className: "usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items", children: /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "data-testid": "previous-month",
                onClick: we,
                ref: b,
                className: "usa-date-picker__calendar__previous-month",
                "aria-label": de,
                disabled: B
              }
            ) }),
            /* @__PURE__ */ v("div", { className: "usa-date-picker__calendar__cell usa-date-picker__calendar__month-label", children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  "data-testid": "select-month",
                  onClick: Re,
                  ref: N,
                  className: "usa-date-picker__calendar__month-selection",
                  "aria-label": ie,
                  children: W
                }
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  "data-testid": "select-year",
                  onClick: Oe,
                  ref: R,
                  className: "usa-date-picker__calendar__year-selection",
                  "aria-label": ue,
                  children: I
                }
              )
            ] }),
            /* @__PURE__ */ n("div", { className: "usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items", children: /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "data-testid": "next-month",
                onClick: Ce,
                ref: y,
                className: "usa-date-picker__calendar__next-month",
                "aria-label": _e,
                disabled: j
              }
            ) }),
            /* @__PURE__ */ n("div", { className: "usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items", children: /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "data-testid": "next-year",
                onClick: Ne,
                ref: M,
                className: "usa-date-picker__calendar__next-year",
                "aria-label": he,
                disabled: j
              }
            ) })
          ] }),
          /* @__PURE__ */ v("table", { className: "usa-date-picker__calendar__table", children: [
            /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: re.map((e, a) => /* @__PURE__ */ n(
              "th",
              {
                className: "usa-date-picker__calendar__day-of-week",
                scope: "col",
                "aria-label": oe[parseInt(`${a}`)],
                children: e
              },
              `day-of-week-${e}-${a}`
            )) }) }),
            /* @__PURE__ */ n("tbody", { children: Pe(P, 7) })
          ] })
        ]
      }
    )
  );
};
export {
  Je as default
};
//# sourceMappingURL=Calendar.js.map
