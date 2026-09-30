// Theme handling for the current site.
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
  const theme = determineComputedTheme();

  transTheme();
  setHighlight(theme);
  document.documentElement.setAttribute("data-theme", theme);

  document.querySelectorAll("table").forEach((table) => {
    table.classList.toggle("table-dark", theme === "dark");
  });

  if (typeof medium_zoom !== "undefined") {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee",
    });
  }
};

let setHighlight = (theme) => {
  const lightTheme = document.getElementById("highlight_theme_light");
  const darkTheme = document.getElementById("highlight_theme_dark");
  if (!lightTheme || !darkTheme) return;

  if (theme === "dark") {
    lightTheme.media = "none";
    darkTheme.media = "";
  } else {
    darkTheme.media = "none";
    lightTheme.media = "";
  }
};

let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500);
};

let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  if (themeSetting !== "dark" && themeSetting !== "light" && themeSetting !== "system") {
    themeSetting = "system";
  }
  return themeSetting;
};

let determineComputedTheme = () => {
  const themeSetting = determineThemeSetting();
  if (themeSetting === "system") {
    const userPref = window.matchMedia;
    return userPref && userPref("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return themeSetting;
};

let initTheme = () => {
  setThemeSetting(determineThemeSetting());

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    const modeToggle = document.getElementById("light-toggle");
    if (modeToggle) {
      modeToggle.addEventListener("click", toggleThemeSetting);
    }
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);
};
