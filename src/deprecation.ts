export const deprecationWarning =
  process.env.NODE_ENV !== 'production'
    ? console.warn
    : () => {
        // do nothing in production
      }
