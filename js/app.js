/**
 * app.js
 * Main UI controller — wires DOM to numerology engine & data
 * WithHimu Crystal Calculator
 */

import { calculateMulank, calculateDestinyNumber, parseDate } from './numerology.js';
import {
  MULANK_CRYSTAL, DESTINY_CRYSTAL,
  MULANK_DESC, DESTINY_DESC,
  AFFILIATE_BASE,
} from './data.js';

// ── DOM refs ──────────────────────────────────────────────────────────────────
const dobInput        = document.getElementById('dobInput');
const calcBtn         = document.getElementById('calcBtn');

const mulankValue     = document.getElementById('mulankValue');
const destinyValue    = document.getElementById('destinyValue');
const mulankDesc      = document.getElementById('mulankDesc');
const destinyDesc     = document.getElementById('destinyDesc');

const mulankCrystalEl = document.getElementById('mulankCrystalName');
const mulankDescEl    = document.getElementById('mulankCrystalDesc');
const mulankAffEl     = document.getElementById('mulankAffiliateLink');
const mulankEmoji     = document.getElementById('mulankEmoji');

const destCrystalEl   = document.getElementById('destinyCrystalName');
const destDescEl      = document.getElementById('destinyCrystalDesc');
const destAffEl       = document.getElementById('destinyAffiliateLink');
const destEmoji       = document.getElementById('destinyEmoji');

const infoNote        = document.getElementById('infoNote');
const resultSection   = document.getElementById('resultSection');

// ── Core update function ──────────────────────────────────────────────────────
function updateAll() {
  const parsed = parseDate(dobInput.value);

  if (!parsed.valid) {
    showError();
    return;
  }

  const { year, month, day } = parsed;
  const mulank  = calculateMulank(day);
  const destiny = calculateDestinyNumber(year, month, day);

  // Numbers
  animateNumber(mulankValue,  mulank);
  animateNumber(destinyValue, destiny);
  mulankDesc.textContent  = MULANK_DESC[mulank]  || "Unique numerological energy";
  destinyDesc.textContent = DESTINY_DESC[destiny] || "Profound destiny path";

  // Crystals
  const mC = MULANK_CRYSTAL[mulank];
  const dC = DESTINY_CRYSTAL[destiny];

  if (mC) {
    mulankCrystalEl.textContent = mC.full;
    mulankDescEl.textContent    = mC.desc;
    mulankAffEl.href            = mC.url || AFFILIATE_BASE;
    mulankAffEl.textContent     = `✨ Shop ${mC.name} →`;
    mulankEmoji.textContent     = mC.emoji;
    mulankEmoji.style.color     = mC.color;
  }

  if (dC) {
    destCrystalEl.textContent = dC.full;
    destDescEl.textContent    = dC.desc;
    destAffEl.href            = dC.url || AFFILIATE_BASE;
    destAffEl.textContent     = `✨ Shop ${dC.name} →`;
    destEmoji.textContent     = dC.emoji;
    destEmoji.style.color     = dC.color;
  }

  infoNote.innerHTML = `
    <span class="note-icon">💫</span>
    <span>
      <strong>Mulank ${mulank}</strong> resonates with <em>${mC?.name || '—'}</em>.
      &nbsp;|&nbsp;
      <strong>Destiny ${destiny}</strong> aligns with <em>${dC?.name || '—'}</em>.
    </span>
  `;

  // Reveal result section with animation
  resultSection.classList.add('visible');
}

function animateNumber(el, target) {
  el.style.transform = 'scale(1.3)';
  el.style.opacity   = '0.4';
  el.textContent     = target;
  setTimeout(() => {
    el.style.transform = 'scale(1)';
    el.style.opacity   = '1';
  }, 80);
}

function showError() {
  mulankValue.textContent  = '?';
  destinyValue.textContent = '?';
  mulankDesc.textContent   = 'Invalid date';
  destinyDesc.textContent  = 'Please select a valid date of birth';
  infoNote.innerHTML       = '⚠️ Please select a valid date of birth.';
  resultSection.classList.remove('visible');
}

// ── Coupon reveal ─────────────────────────────────────────────
const couponLocked   = document.getElementById('couponLocked');
const couponRevealed = document.getElementById('couponRevealed');
const copyBtn        = document.getElementById('copyBtn');
const COUPON_CODE    = 'GOOGLEDOST';

if (couponLocked) {
  couponLocked.addEventListener('click', () => {
    couponLocked.style.display   = 'none';
    couponRevealed.style.display = 'block';
  });
}

if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(COUPON_CODE).then(() => {
      copyBtn.textContent = '✅ Copied!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = '📋 Copy code';
        copyBtn.classList.remove('copied');
      }, 2200);
    }).catch(() => {
      copyBtn.textContent = COUPON_CODE;
    });
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  calcBtn.addEventListener('click', (e) => { e.preventDefault(); updateAll(); });
  dobInput.addEventListener('change', updateAll);

  // Run on load with default date
  if (dobInput.value) updateAll();
});
