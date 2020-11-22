const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

// Check if env is dev, return true if so
const isDev = () => {
  return development;
}

// Check if env is prod, return true if so
const isProd = () => {
  return !development;
}

export { isDev, isProd }