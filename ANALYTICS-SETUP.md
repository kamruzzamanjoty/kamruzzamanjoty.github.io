# Visitor statistics setup

The optional integration uses GoatCounter. It is disabled until `assets/analytics.json` contains a real owner-controlled siteCode. No visitor requests are sent to an analytics provider while siteCode is null, and the empty counter is hidden.

To activate after approval:

1. Create a free GoatCounter account for this personal website at https://www.goatcounter.com/ . The account owner must complete signup and any terms acceptance.
2. Add https://kamruzzamanjoty.github.io as the website.
3. Make the statistics dashboard public and enable “Allow adding visitor counts on your website.” Enable location collection if country statistics are desired. Keep individual-pageview storage disabled.
4. Supply the site code (the subdomain before `.goatcounter.com`) and put it in `assets/analytics.json`.
5. Publish and verify the counter plus the public dashboard's country breakdown.

The footer shows site-total recorded visits and links to the public statistics dashboard. Country statistics are aggregate geographic estimates, not identities or precise locations. Counting begins at activation, not the site's original publication date. GoatCounter counter responses may be cached for up to four hours.

No API key belongs in the public repository. If the service is unavailable or blocked, the rest of the website continues to work.
