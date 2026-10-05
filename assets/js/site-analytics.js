/* Shared, opt-in GA4 for the homepage and playground. No requests before consent. */
(() => {
  if (location.hostname !== "signalkee.github.io" || document.getElementById("site-analytics-choice")) return;
  const id = "G-D34LDNTZFK";
  const key = "robin-analytics-consent-v1";
  let started = false;
  const read = () => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  };
  function start() {
    if (started) return;
    started = true;
    window["ga-disable-" + id] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", id, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_domain: "signalkee.github.io",
      cookie_path: "/",
    });
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
    document.head.appendChild(script);
  }
  function stop() {
    window["ga-disable-" + id] = true;
    if (started) window.gtag("consent", "update", { analytics_storage: "denied" });
    for (const name of ["_ga", "_ga_D34LDNTZFK"]) {
      for (const domain of ["", "; domain=signalkee.github.io", "; domain=.signalkee.github.io"]) {
        document.cookie = name + "=; Max-Age=0; path=/" + domain + "; SameSite=Lax; Secure";
      }
    }
  }
  const panel = document.createElement("aside");
  panel.id = "site-analytics-choice";
  panel.setAttribute("aria-label", "Analytics privacy choices");
  panel.style.cssText = "padding:16px 24px;background:#f5f7fa;color:#253247;border-top:1px solid #c5cbd3;font:14px/1.6 system-ui,sans-serif;";
  const text = document.createElement("p");
  text.style.cssText = "margin:0 0 10px;max-width:900px;";
  text.textContent =
    "Optional analytics: with your permission, Google Analytics uses cookies to measure page visits, referral sources and approximate region/city. No advertising features. Your choice applies to this homepage and the AC-DC demo, and can be changed here at any time.";
  const controls = document.createElement("div");
  controls.style.cssText = "display:flex;flex-wrap:wrap;gap:8px;align-items:center;";
  function button(label, handler) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.style.cssText =
      "font:inherit;min-height:44px;padding:8px 14px;border:1px solid #58677a;border-radius:6px;background:#fff;color:#172a40;cursor:pointer;";
    b.addEventListener("click", handler);
    controls.appendChild(b);
    return b;
  }
  const status = document.createElement("span");
  status.setAttribute("role", "status");
  const accept = button("Allow analytics", () => choose("granted"));
  const decline = button("Decline analytics", () => choose("denied"));
  const settings = button("Analytics settings", () => render(null));
  function render(choice) {
    const expanded = !choice;
    text.hidden = !expanded;
    accept.hidden = !expanded;
    decline.hidden = !expanded;
    settings.hidden = expanded;
    status.textContent = expanded ? "" : choice === "granted" ? "Analytics enabled" : "Analytics disabled";
  }
  function choose(choice) {
    try {
      localStorage.setItem(key, choice);
    } catch (error) {
      /* Session-only choice if storage is unavailable. */
    }
    if (choice === "granted") start();
    else stop();
    render(choice);
    settings.focus();
    // A reload stops all previously loaded Google listeners after withdrawal.
    if (choice === "denied" && started) location.reload();
  }
  controls.appendChild(status);
  panel.append(text, controls);
  document.body.appendChild(panel);
  const choice = read();
  render(choice === "granted" || choice === "denied" ? choice : null);
  if (choice === "granted") start();
  window.addEventListener("storage", (event) => {
    if (event.key !== key) return;
    if (event.newValue === "granted") start();
    else {
      stop();
      if (started) location.reload();
    }
    render(event.newValue);
  });
})();
