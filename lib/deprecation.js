const n = process.env.NODE_ENV !== "production" ? console.warn : (
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  () => {
  }
);
export {
  n as deprecationWarning
};
//# sourceMappingURL=deprecation.js.map
