import { jsx as a } from "react/jsx-runtime";
import n from "./YearPicker.js";
import { parseDateString as t } from "../utils.js";
const s = {
  date: /* @__PURE__ */ new Date("January 20 2021"),
  minDate: t("0000-01-01")
}, c = (e) => /* @__PURE__ */ a(
  n,
  {
    ...s,
    handleSelectYear: e.handleSelectYear,
    setStatuses: e.setStatuses
  }
), i = (e) => /* @__PURE__ */ a(
  n,
  {
    ...s,
    handleSelectYear: e.handleSelectYear,
    setStatuses: e.setStatuses,
    minDate: t("2021-01-01"),
    maxDate: t("2025-01-01")
  }
), u = (e) => /* @__PURE__ */ a(
  n,
  {
    ...s,
    handleSelectYear: e.handleSelectYear,
    setStatuses: e.setStatuses,
    minDate: t("2021-01-01")
  }
), h = (e) => /* @__PURE__ */ a(
  n,
  {
    ...s,
    handleSelectYear: e.handleSelectYear,
    setStatuses: e.setStatuses,
    minDate: t("1950-01-01"),
    maxDate: t("2025-01-01")
  }
);
export {
  h as withMaxInCurrentChunk,
  i as withMinAndMaxInCurrentChunk,
  u as withMinInCurrentChunk,
  c as yearPicker
};
//# sourceMappingURL=YearPicker.stories.internal.js.map
