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
    script.onload = () => {
      const dashboard = document.getElementById('visitor-dashboard');
      dashboard.href = origin;
      const wrapper = document.getElementById('visitor-statistics');
      wrapper.hidden = false;
      const footer = document.querySelector('.nav-footer');
      if (footer) footer.after(wrapper);
      if (window.goatcounter && window.goatcounter.visit_count) {
        window.goatcounter.visit_count({append:'#visitor-total',path:'TOTAL',type:'html',no_branding:true,attr:{title:'Total recorded site visits',width:'200',height:'60'}});
      }
    };
    document.head.appendChild(script);
  } catch (_) { /* Analytics failure must not affect the website. */ }
}());
