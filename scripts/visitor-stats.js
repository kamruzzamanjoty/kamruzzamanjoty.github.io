(async function () {
  try {
    const config = await fetch('/assets/analytics.json').then(r => { if (!r.ok) throw new Error('Config unavailable'); return r.json(); });
    const code = config.siteCode;
    if (config.provider !== 'goatcounter' || typeof code !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(code)) return;
    if (location.hostname !== 'kamruzzamanjoty.github.io') return;
    const origin = 'https://' + code + '.goatcounter.com';
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://gc.zgo.at/count.js';
    script.dataset.goatcounter = origin + '/count';
    script.onload = async () => {
      const dashboard = document.getElementById('visitor-dashboard');
      dashboard.href = origin;
      const wrapper = document.getElementById('visitor-statistics');
      wrapper.hidden = false;
      const footer = document.querySelector('.nav-footer');
      if (footer) footer.before(wrapper);
      try {
        const response = await fetch(origin + '/counter/TOTAL.json');
        if (!response.ok) throw new Error('Counter unavailable');
        const totals = await response.json();
        if (typeof totals.count !== 'string') throw new Error('Invalid counter');
        document.getElementById('visitor-total').textContent = totals.count;
      } catch (_) {
        wrapper.hidden = true;
      }
    };
    document.head.appendChild(script);
  } catch (_) { /* Analytics failure must not affect the website. */ }
}());
