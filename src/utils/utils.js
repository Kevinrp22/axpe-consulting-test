export const convertRemToPixels = (rem) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
