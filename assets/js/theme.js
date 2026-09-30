let toggleThemeSetting = () => {
  const themeSetting = determineThemeSetting();
  if (themeSetting === "system") {
    setThemeSetting("light");
  } else if (themeSetting === "light") {
    setThemeSetting("dark");
  } else {
    setThemeSetting("system");
  }
};

let setThemeSetting = (themeSetting) => {
  localStorage.setItem("theme", themeSetting);
  document.documentElement.setAttribute("data-theme-setting", themeSetting);
  applyTheme();
};

let applyTheme = () => {
  document.documentElement.classList.add("transition");
  document.documentElement.setAttribute("data-theme", determineComputedTheme());
  window.setTimeout(() => document.documentElement.classList.remove("transition"), 500);
};

let determineThemeSetting = () => {
  const themeSetting = localStorage.getItem("theme");
  return ["dark", "light", "system"].includes(themeSetting) ? themeSetting : "system";
};

let determineComputedTheme = () => {
  const themeSetting = determineThemeSetting();
  if (themeSetting === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return themeSetting;
};

let initTheme = () => {
  setThemeSetting(determineThemeSetting());

  document.addEventListener("DOMContentLoaded", () => {
    const modeToggle = document.getElementById("light-toggle");
    if (modeToggle) modeToggle.addEventListener("click", toggleThemeSetting);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);
};
