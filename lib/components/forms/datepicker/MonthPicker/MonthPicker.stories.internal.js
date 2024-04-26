import { jsx as n } from "react/jsx-runtime";
import o from "./MonthPicker.js";
import { parseDateString as e } from "../utils.js";
const a = {
  date: /* @__PURE__ */ new Date("January 20 2021"),
  minDate: e("0000-01-01")
}, m = (t) => /* @__PURE__ */ n(o, { ...a, handleSelectMonth: t.handleSelectMonth }), c = (t) => /* @__PURE__ */ n(
  o,
  {
    ...a,
    handleSelectMonth: t.handleSelectMonth,
    minDate: e("2021-04-01"),
    maxDate: e("2021-08-01")
  }
);
export {
  m as monthPicker,
  c as withMinAndMax
};
//# sourceMappingURL=MonthPicker.stories.internal.js.map
