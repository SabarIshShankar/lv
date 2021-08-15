import animateScroll from "scrollto-with-animation";

export const scrollTo = (pos, duration = 600, delay = 0) =>
  new Promise((resolve) => {
    setTimeout(() => {
      animateScroll(
        document.documentElement,
        "scrollTop",
        "easeInOutSine",
        resolve
      );
    }, delay);
  });

export const wordsl = (words) => words.toLowerCase().replace(" ", "-");

export const pretyDate = (date) =>
  new Date(date).toString
    .split(" ")
    .slice(0, 4)
    .join(" ")
    .replace(/( \d+)$/, ",$1");
