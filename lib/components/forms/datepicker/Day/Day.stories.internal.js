import { jsx as n } from "react/jsx-runtime";
import e from "./Day.js";
const M = /* @__PURE__ */ new Date("January 20 2021"), t = {
  date: M
}, u = (o) => /* @__PURE__ */ n(
  e,
  {
    ...t,
    onClick: o.onClick,
    onKeyDown: o.onKeyDown,
    onMouseMove: o.onMouseMove
  }
), s = (o) => /* @__PURE__ */ n(
  e,
  {
    ...t,
    onClick: o.onClick,
    onKeyDown: o.onKeyDown,
    onMouseMove: o.onMouseMove,
    isDisabled: !0
  }
), D = (o) => /* @__PURE__ */ n(
  e,
  {
    ...t,
    onClick: o.onClick,
    onKeyDown: o.onKeyDown,
    onMouseMove: o.onMouseMove,
    isSelected: !0
  }
), l = (o) => /* @__PURE__ */ n(
  e,
  {
    ...t,
    onClick: o.onClick,
    onKeyDown: o.onKeyDown,
    onMouseMove: o.onMouseMove,
    isFocused: !0
  }
), v = (o) => /* @__PURE__ */ n(
  e,
  {
    ...t,
    onClick: o.onClick,
    onKeyDown: o.onKeyDown,
    onMouseMove: o.onMouseMove,
    isPrevMonth: !0
  }
), w = (o) => /* @__PURE__ */ n(
  e,
  {
    ...t,
    onClick: o.onClick,
    onKeyDown: o.onKeyDown,
    onMouseMove: o.onMouseMove,
    isFocusedMonth: !0
  }
), k = (o) => /* @__PURE__ */ n(
  e,
  {
    ...t,
    onClick: o.onClick,
    onKeyDown: o.onKeyDown,
    onMouseMove: o.onMouseMove,
    isNextMonth: !0
  }
), C = (o) => /* @__PURE__ */ n(
  e,
  {
    ...t,
    onClick: o.onClick,
    onKeyDown: o.onKeyDown,
    onMouseMove: o.onMouseMove,
    isToday: !0
  }
), K = (o) => /* @__PURE__ */ n(
  e,
  {
    ...t,
    onClick: o.onClick,
    onKeyDown: o.onKeyDown,
    onMouseMove: o.onMouseMove,
    isRangeDate: !0
  }
), d = (o) => /* @__PURE__ */ n(
  e,
  {
    ...t,
    onClick: o.onClick,
    onKeyDown: o.onKeyDown,
    onMouseMove: o.onMouseMove,
    isRangeStart: !0
  }
), h = (o) => /* @__PURE__ */ n(
  e,
  {
    ...t,
    onClick: o.onClick,
    onKeyDown: o.onKeyDown,
    onMouseMove: o.onMouseMove,
    isRangeEnd: !0
  }
), R = (o) => /* @__PURE__ */ n(
  e,
  {
    ...t,
    onClick: o.onClick,
    onKeyDown: o.onKeyDown,
    onMouseMove: o.onMouseMove,
    isWithinRange: !0
  }
);
export {
  u as defaultDay,
  s as disabled,
  l as focused,
  K as isRangeDate,
  h as isRangeEnd,
  d as isRangeStart,
  R as isWithinRange,
  k as nextMonth,
  v as previousMonth,
  w as sameMonth,
  D as selected,
  C as today
};
//# sourceMappingURL=Day.stories.internal.js.map
