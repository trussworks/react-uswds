export const deprecationWarning =
  process.env.NODE_ENV !== 'production'
    ? console.warn
    : // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      () => {
        // do nothing in production
      }
