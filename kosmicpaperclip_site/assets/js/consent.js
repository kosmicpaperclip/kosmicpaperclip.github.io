
// Minimal consent manager: defaults to essential only. No external scripts included.
const CONSENT_KEY = "kc_consent_v1";
function getConsent(){ try{ return JSON.parse(localStorage.getItem(CONSENT_KEY)) || {essential:true, analytics:false, external:false}; }catch(e){ return {essential:true, analytics:false, external:false}; } }
function saveConsent(c){ localStorage.setItem(CONSENT_KEY, JSON.stringify(c)); }
function openConsent(){ document.getElementById('consent-modal').style.display='block'; }
function closeConsent(){ document.getElementById('consent-modal').style.display='none'; }
function applyConsent(){ const c = getConsent(); /* load optional scripts lazily if enabled */ }
window.addEventListener("DOMContentLoaded", ()=>{
  applyConsent();
  // wire buttons if present
  const openers = document.querySelectorAll('[data-open-consent]');
  openers.forEach(o=>o.addEventListener('click', openConsent));
  const form = document.getElementById('consent-form');
  if(form){
    const c = getConsent();
    form.analytics.checked = c.analytics;
    form.external.checked = c.external;
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      saveConsent({essential:true, analytics: form.analytics.checked, external: form.external.checked});
      applyConsent();
      closeConsent();
      alert('Settings saved.');
    });
  }
});
