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

  // ---- MULANK with UNIQUE AFFILIATE LINKS ----
  if (mC) {
    mulankCrystalEl.textContent = mC.full;
    mulankDescEl.textContent    = mC.desc;
    
    // Different link for each Mulank value (1-9)
    const mulankAffiliateUrls = {
        1: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=ruby_mulank1',
        2: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=pearl_mulank2',
        3: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=citrine_mulank3',
        4: 'https://gemsmantra.com/products/golden-obsidian-bracelet?_pos=1&_sid=f21610b6b&_ss=r&ref=HIMANGSHUKALITA',
        5: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=emerald_mulank5',
        6: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=rosequartz_mulank6',
        7: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=amethyst_mulank7',
        8: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=sapphire_mulank8',
        9: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=coral_mulank9'
    };
    mulankAffEl.href = mulankAffiliateUrls[mulank] || buildAffiliateUrl(mC.searchTerm);
    mulankAffEl.textContent     = `✨ Shop ${mC.name} →`;
    mulankEmoji.textContent     = mC.emoji;
    mulankEmoji.style.color     = mC.color;
  }

  // ---- DESTINY with UNIQUE AFFILIATE LINKS ----
  if (dC) {
    destCrystalEl.textContent = dC.full;
    destDescEl.textContent    = dC.desc;
    
    // Different link for each Destiny value (1-9)
    const destinyAffiliateUrls = {
        1: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=sunstone_destiny1',
        2: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=jade_destiny2',
        3: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=citrine_destiny3',
        4: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=hessonite_destiny4',
        5: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=emerald_destiny5',
        6: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=rosequartz_destiny6',
        7: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=amethyst_destiny7',
        8: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=bluesapphire_destiny8',
        9: 'https://gemsmantra.com/?ref=HIMANGSHUKALITA&crystal=redcoral_destiny9'
    };
    destAffEl.href = destinyAffiliateUrls[destiny] || buildAffiliateUrl(dC.searchTerm);
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
