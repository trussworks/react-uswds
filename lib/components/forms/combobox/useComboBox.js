import { useReducer as O } from "react";
import { generateDynamicRegExp as f } from "./ComboBox/utils.js";
import { FocusMode as l } from "../../../utils/constants.js";
import { ActionTypes as s } from "./constants.js";
const I = (c, o, r, p) => {
  const d = (e) => {
    const n = f(
      p.filter,
      e,
      p.extras
    ), t = o.filter(
      (u) => n.test(u.label.toLowerCase())
    );
    return r ? {
      closestMatch: t.length > 0 ? t[0] : o[0],
      optionsToDisplay: o
    } : {
      closestMatch: t[0],
      optionsToDisplay: t
    };
  };
  return O((e, n) => {
    switch (n.type) {
      case s.SELECT_OPTION:
        return {
          ...e,
          isOpen: !1,
          selectedOption: n.option,
          focusMode: l.Input,
          inputValue: n.option.label,
          filteredOptions: o,
          focusedOption: n.option,
          statusText: ""
        };
      case s.UPDATE_FILTER: {
        const { closestMatch: t, optionsToDisplay: u } = d(
          n.value
        ), i = {
          ...e,
          isOpen: !0,
          filteredOptions: u,
          inputValue: n.value,
          statusText: `${u.length} result${u.length > 1 ? "s" : ""} available.`
        };
        return u.length < 1 && (i.statusText = "No results."), r || !e.selectedOption ? i.focusedOption = t : e.selectedOption && (i.filteredOptions.includes(e.selectedOption) ? i.focusedOption = e.selectedOption : i.focusedOption = t), i;
      }
      case s.OPEN_LIST: {
        const t = e.filteredOptions.length ? `${e.filteredOptions.length} result${e.filteredOptions.length > 1 ? "s" : ""} available.` : "No results.";
        return {
          ...e,
          isOpen: !0,
          focusMode: l.Input,
          focusedOption: e.selectedOption || e.focusedOption || o[0],
          statusText: t
        };
      }
      case s.CLOSE_LIST: {
        const t = {
          ...e,
          isOpen: !1,
          focusMode: l.Input,
          focusedOption: void 0,
          statusText: ""
        };
        return e.filteredOptions.length === 0 && (t.filteredOptions = o, t.inputValue = ""), e.selectedOption && (t.inputValue = e.selectedOption.label), t;
      }
      case s.FOCUS_OPTION: {
        const t = e.filteredOptions.length ? `${e.filteredOptions.length} result${e.filteredOptions.length > 1 ? "s" : ""} available.` : "No results.";
        return {
          ...e,
          isOpen: !0,
          focusedOption: n.option,
          focusMode: l.Item,
          statusText: t
        };
      }
      case s.CLEAR:
        return {
          ...e,
          inputValue: "",
          isOpen: !1,
          focusMode: l.Input,
          selectedOption: void 0,
          filteredOptions: o,
          focusedOption: o[0],
          statusText: ""
        };
      case s.BLUR: {
        const t = {
          ...e,
          isOpen: !1,
          focusMode: l.None,
          filteredOptions: o,
          statusText: ""
        };
        return e.selectedOption ? (t.inputValue = e.selectedOption.label, t.focusedOption = e.selectedOption) : (t.inputValue = "", t.focusedOption = o[0]), t;
      }
      case s.CLEAR_SELECTION:
        return {
          ...e,
          inputValue: "",
          isOpen: !1,
          focusMode: l.None,
          selectedOption: void 0,
          filteredOptions: o,
          focusedOption: void 0,
          statusText: ""
        };
      case s.FOCUS_INPUT:
        return {
          ...e,
          focusMode: l.Input
        };
      default:
        throw new Error();
    }
  }, c);
};
export {
  I as default
};
//# sourceMappingURL=useComboBox.js.map
