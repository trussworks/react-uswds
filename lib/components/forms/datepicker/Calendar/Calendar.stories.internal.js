import { jsx as t } from "react/jsx-runtime";
import a from "./Calendar.js";
import { parseDateString as n } from "../utils.js";
import { FocusMode as l } from "../../../../utils/constants.js";
const s = {
  minDate: /* @__PURE__ */ new Date("0000-01-01"),
  focusMode: l.None
}, S = (e) => /* @__PURE__ */ t(
  a,
  {
    ...s,
    handleSelectDate: e.handleSelectDate,
    setStatuses: e.setStatuses
  }
), u = (e) => /* @__PURE__ */ t(
  a,
  {
    ...s,
    handleSelectDate: e.handleSelectDate,
    setStatuses: e.setStatuses,
    date: /* @__PURE__ */ new Date("July 4, 2019")
  }
), r = (e) => /* @__PURE__ */ t(
  a,
  {
    ...s,
    handleSelectDate: e.handleSelectDate,
    setStatuses: e.setStatuses,
    selectedDate: /* @__PURE__ */ new Date("January 20, 2021")
  }
), m = (e) => /* @__PURE__ */ t(
  a,
  {
    ...s,
    handleSelectDate: e.handleSelectDate,
    setStatuses: e.setStatuses,
    date: /* @__PURE__ */ new Date("January 15 2021"),
    minDate: n("2021-01-10"),
    maxDate: n("2021-01-20")
  }
), h = (e) => /* @__PURE__ */ t(
  a,
  {
    ...s,
    handleSelectDate: e.handleSelectDate,
    setStatuses: e.setStatuses,
    selectedDate: n("2021-01-20"),
    rangeDate: n("2021-01-08")
  }
);
export {
  S as defaultCalendar,
  u as givenDate,
  m as minAndMax,
  h as rangeDate,
  r as selectedDate
};
//# sourceMappingURL=Calendar.stories.internal.js.map
