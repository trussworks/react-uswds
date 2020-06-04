export const deprecationWarning =
  process.env.NODE_ENV !== 'production' ? console.warn : () => {}
