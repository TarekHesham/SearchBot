module.exports = (url = "") => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg|gif)/.test(url.toLowerCase());
};
