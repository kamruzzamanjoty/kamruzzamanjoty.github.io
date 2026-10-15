(function () {
  // Keep the country panel clear of Quarto's floating back-to-top control.
  function placeCounter() {
    const panel = document.getElementById('visitor-statistics');
    const footer = document.querySelector('.nav-footer');
    if (panel && footer) footer.before(panel);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', placeCounter, {once: true});
  } else {
    placeCounter();
  }

  // Retain the existing analytics history; no credentials are needed in the site.
  async function loadAnalytics() {
    try {
      const response = await fetch('/assets/analytics.json');
      if (!response.ok) return;
      const config = await response.json();
      const code = config.siteCode;
      if (config.provider !== 'goatcounter' || typeof code !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(code)) return;
      if (location.hostname !== 'kamruzzamanjoty.github.io') return;
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://gc.zgo.at/count.js';
      script.dataset.goatcounter = 'https://' + code + '.goatcounter.com/count';
      document.head.appendChild(script);
    } catch (_) { /* Analytics must never prevent a research page from loading. */ }
  }
  loadAnalytics();
}());
