const t = "23:59", e = 1439, r = "00:00", E = 0, T = 30, _ = 1, M = {
  filter: "0?{{ hourQueryFilter }}:{{minuteQueryFilter}}.*{{ apQueryFilter }}m?",
  extras: {
    apQueryFilter: "([ap])",
    hourQueryFilter: "([1-9][0-2]?)",
    minuteQueryFilter: "[\\d]+:([0-9]{0,2})"
  }
};
export {
  t as DEFAULT_MAX_TIME,
  e as DEFAULT_MAX_TIME_MINUTES,
  r as DEFAULT_MIN_TIME,
  E as DEFAULT_MIN_TIME_MINUTES,
  T as DEFAULT_STEP,
  _ as MIN_STEP,
  M as TIME_PICKER_CUSTOM_FILTER
};
//# sourceMappingURL=constants.js.map
