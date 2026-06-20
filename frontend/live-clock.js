/**
 * MedicSense AI — Live Clock & Time Utilities
 * Provides consistent, live-ticking time across all pages.
 */

(function () {
  // ── 1. Live Clock in Navbar ─────────────────────────────────────────────
  function updateLiveClock() {
    const el = document.getElementById('ms-live-clock');
    if (!el) return;
    const now = new Date();
    // Compact format: "Sat 12:05 PM" – saves navbar space
    const timeStr = now.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    const dayStr = now.toLocaleDateString('en-IN', { weekday: 'short' });
    el.innerHTML = `<i class="fas fa-clock" style="margin-right:4px;opacity:0.7;"></i>${dayStr} ${timeStr}`;
  }

  // ── 2. Relative Time Helper ("just now", "5 min ago", etc.) ────────────
  window.msRelativeTime = function (dateInput) {
    const date = new Date(dateInput);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // seconds

    if (diff < 5)   return 'just now';
    if (diff < 60)  return `${diff}s ago`;
    if (diff < 3600) {
      const m = Math.floor(diff / 60);
      return `${m} min ago`;
    }
    if (diff < 86400) {
      const h = Math.floor(diff / 3600);
      return `${h} hr${h > 1 ? 's' : ''} ago`;
    }
    const d = Math.floor(diff / 86400);
    return `${d} day${d > 1 ? 's' : ''} ago`;
  };

  // ── 3. Auto-update all [data-live-time] elements every 30 seconds ───────
  function refreshRelativeTimes() {
    document.querySelectorAll('[data-live-time]').forEach(el => {
      const ts = el.getAttribute('data-live-time');
      if (ts) el.textContent = window.msRelativeTime(ts);
    });
  }

  // ── 4. Inject the live clock element into nav if not present ────────────
  function injectClock() {
    if (document.getElementById('ms-live-clock')) return;
    const userControls = document.querySelector('.user-controls');
    const container = userControls || document.querySelector('.nav-actions');
    if (!container) return;

    const clockEl = document.createElement('div');
    clockEl.id = 'ms-live-clock';
    
    if (userControls) {
      clockEl.style.cssText = `
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--text-secondary, #94a3b8);
        letter-spacing: 0.03em;
        white-space: nowrap;
        display: flex;
        align-items: center;
        padding: 4px 10px 4px 6px;
        margin-right: 6px;
        border-right: 1px solid var(--border-main, rgba(255,255,255,0.1));
        font-family: 'Space Grotesk', monospace;
      `;
      container.insertBefore(clockEl, container.firstChild);
    } else {
      clockEl.style.cssText = `
        font-size: 0.72rem;
        font-weight: 500;
        color: var(--text-secondary, #94a3b8);
        letter-spacing: 0.03em;
        white-space: nowrap;
        display: flex;
        align-items: center;
        padding: 4px 10px;
        background: rgba(255,255,255,0.06);
        border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.08);
        margin-right: 8px;
        font-family: 'Space Grotesk', monospace;
      `;
      container.insertBefore(clockEl, container.firstChild);
    }
  }

  // ── 5. Boot ──────────────────────────────────────────────────────────────
  function boot() {
    injectClock();
    updateLiveClock();
    refreshRelativeTimes();

    // Tick every second for the clock
    setInterval(updateLiveClock, 1000);

    // Refresh relative timestamps every 30 seconds
    setInterval(refreshRelativeTimes, 30000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
