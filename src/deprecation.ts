export const deprecationWarning = import.meta.env.DEV
  ? console.warn
  : () => {
      // do nothing in production
    }
