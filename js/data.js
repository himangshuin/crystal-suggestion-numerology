/**
 * data.js
 * Crystal mappings, numerology descriptions, and affiliate config
 * WithHimu Crystal Calculator
 *
 * HOW TO UPDATE AFFILIATE LINKS
 * ─────────────────────────────
 * Every crystal has its own `url` field below.
 * Just replace the URL string with the exact Gemsmantra product page URL
 * for that crystal. The ref tag (?ref=HIMANGSHUKALITA) is already included.
 *
 * Example:
 *   url: "https://gemsmantra.com/products/sunstone-bracelet?ref=HIMANGSHUKALITA",
 */

/** Fallback — used only if a crystal url is accidentally left empty */
export const AFFILIATE_BASE = "https://gemsmantra.com/?ref=HIMANGSHUKALITA";

/** Mulank (Psychic Number) crystal map — keys 1–9 */
export const MULANK_CRYSTAL = {
  1: {
    name: "Sunstone",
    full: "Sunstone Bracelet",
    emoji: "🌞",
    color: "#f4a12f",
    desc: "Ignites leadership, confidence & solar vitality.",
    // ↓ REPLACE with your Gemsmantra Sunstone product link
    url: "https://gemsmantra.com/products/sunstone-bracelet?ref=HIMANGSHUKALITA",
  },
  2: {
    name: "Mother of Pearl",
    full: "Mother of Pearl Bracelet",
    emoji: "🌊",
    color: "#a8d8ea",
    desc: "Enhances intuition, calm & lunar wisdom.",
    // ↓ REPLACE with your Gemsmantra Mother of Pearl product link
    url: "https://gemsmantra.com/products/mother-of-pearl-bracelet?ref=HIMANGSHUKALITA",
  },
  3: {
    name: "Dragon Vein Agate",
    full: "Dragon Vein Agate Bracelet",
    emoji: "🐉",
    color: "#7ecba1",
    desc: "Boosts creativity, expression & joyful energy.",
    // ↓ REPLACE with your Gemsmantra Dragon Vein Agate product link
    url: "https://gemsmantra.com/products/dragon-vein-agate-bracelet?ref=HIMANGSHUKALITA",
  },
  4: {
    name: "Golden Obsidian",
    full: "Golden Obsidian Bracelet",
    emoji: "🌑",
    color: "#c9a84c",
    desc: "Grounds, protects & stabilises your energy field.",
    // ↓ REPLACE with your Gemsmantra Golden Obsidian product link
    url: "https://gemsmantra.com/products/golden-obsidian-bracelet?_pos=1&_sid=f21610b6b&_ss=r&ref=HIMANGSHUKALITA",
  },
  5: {
    name: "Green Aventurine",
    full: "Green Aventurine Bracelet",
    emoji: "🍀",
    color: "#4caf7d",
    desc: "Attracts luck, adventure & abundance.",
    // ↓ REPLACE with your Gemsmantra Green Aventurine product link
    url: "https://gemsmantra.com/products/green-aventurine-bracelet?ref=HIMANGSHUKALITA",
  },
  6: {
    name: "Rose Quartz",
    full: "Rose Quartz Bracelet",
    emoji: "💗",
    color: "#f9a8d4",
    desc: "Opens the heart, nurtures love & compassion.",
    // ↓ REPLACE with your Gemsmantra Rose Quartz product link
    url: "https://gemsmantra.com/products/rose-quartz-bracelet?ref=HIMANGSHUKALITA",
  },
  7: {
    name: "Cat's Eye",
    full: "Cat's Eye Bracelet",
    emoji: "🐱",
    color: "#c8b96a",
    desc: "Deepens intuition, perception & inner focus.",
    // ↓ REPLACE with your Gemsmantra Cat's Eye product link
    url: "https://gemsmantra.com/products/cats-eye-bracelet?ref=HIMANGSHUKALITA",
  },
  8: {
    name: "Amethyst",
    full: "Amethyst Bracelet",
    emoji: "💜",
    color: "#9b59b6",
    desc: "Manifests abundance, wisdom & higher clarity.",
    // ↓ REPLACE with your Gemsmantra Amethyst product link
    url: "https://gemsmantra.com/products/amethyst-bracelet?ref=HIMANGSHUKALITA",
  },
  9: {
    name: "Pyrite",
    full: "Pyrite Bracelet",
    emoji: "✨",
    color: "#d4af37",
    desc: "Attracts wealth, willpower & bold action.",
    // ↓ REPLACE with your Gemsmantra Pyrite product link
    url: "https://gemsmantra.com/products/pyrite-bracelet?ref=HIMANGSHUKALITA",
  },
};

/** Destiny Number crystal map — keys 1–9 */
export const DESTINY_CRYSTAL = {
  1: {
    name: "Tiger Eye",
    full: "Tiger Eye Bracelet",
    emoji: "🐯",
    color: "#c8832a",
    desc: "Courage, strength & grounded decisive action.",
    // ↓ REPLACE with your Gemsmantra Tiger Eye product link
    url: "https://gemsmantra.com/products/tiger-eye-bracelet?ref=HIMANGSHUKALITA",
  },
  2: {
    name: "Green Jade",
    full: "Green Jade Bracelet",
    emoji: "🟢",
    color: "#3aad6e",
    desc: "Harmony, luck & deep emotional balance.",
    // ↓ REPLACE with your Gemsmantra Green Jade product link
    url: "https://gemsmantra.com/products/green-jade-bracelet?ref=HIMANGSHUKALITA",
  },
  3: {
    name: "Azurite",
    full: "Azurite Bracelet",
    emoji: "🔵",
    color: "#2980b9",
    desc: "Inspiration, psychic expansion & truth-speaking.",
    // ↓ REPLACE with your Gemsmantra Azurite product link
    url: "https://gemsmantra.com/products/azurite-bracelet?ref=HIMANGSHUKALITA",
  },
  4: {
    name: "Clear Quartz",
    full: "Clear Quartz Bracelet",
    emoji: "💎",
    color: "#d0e8f0",
    desc: "Clarity, amplification & energetic alignment.",
    // ↓ REPLACE with your Gemsmantra Clear Quartz product link
    url: "https://gemsmantra.com/products/clear-quartz-bracelet?ref=HIMANGSHUKALITA",
  },
  5: {
    name: "Turquoise",
    full: "Turquoise Bracelet",
    emoji: "🩵",
    color: "#30bfbf",
    desc: "Adventure, protection & authentic truth.",
    // ↓ REPLACE with your Gemsmantra Turquoise product link
    url: "https://gemsmantra.com/products/turquoise-bracelet?ref=HIMANGSHUKALITA",
  },
  6: {
    name: "Rhodonite",
    full: "Rhodonite Bracelet",
    emoji: "🌸",
    color: "#d45e8c",
    desc: "Emotional healing, forgiveness & compassion.",
    // ↓ REPLACE with your Gemsmantra Rhodonite product link
    url: "https://gemsmantra.com/products/rhodonite-bracelet?ref=HIMANGSHUKALITA",
  },
  7: {
    name: "Kambaba Jasper",
    full: "Kambaba Jasper Bracelet",
    emoji: "🌿",
    color: "#4e7c59",
    desc: "Spiritual grounding, peace & ancient wisdom.",
    // ↓ REPLACE with your Gemsmantra Kambaba Jasper product link
    url: "https://gemsmantra.com/products/kambaba-jasper-bracelet?ref=HIMANGSHUKALITA",
  },
  8: {
    name: "Sodalite",
    full: "Sodalite Bracelet",
    emoji: "🪬",
    color: "#3455a4",
    desc: "Logic, manifestation & deep inner clarity.",
    // ↓ REPLACE with your Gemsmantra Sodalite product link
    url: "https://gemsmantra.com/products/sodalite-bracelet?ref=HIMANGSHUKALITA",
  },
  9: {
    name: "Bloodstone",
    full: "Bloodstone Bracelet",
    emoji: "🔴",
    color: "#c0392b",
    desc: "Vitality, courage & energetic purification.",
    // ↓ REPLACE with your Gemsmantra Bloodstone product link
    url: "https://gemsmantra.com/products/bloodstone-bracelet?ref=HIMANGSHUKALITA",
  },
};

/** Mulank personality blurbs */
export const MULANK_DESC = {
  1: "Leader — independent, ambitious, pioneering.",
  2: "Diplomat — intuitive, cooperative, sensitive.",
  3: "Creator — expressive, joyful, communicative.",
  4: "Builder — practical, disciplined, reliable.",
  5: "Explorer — adventurous, dynamic, freedom-loving.",
  6: "Nurturer — responsible, harmonious, caring.",
  7: "Seeker — analytical, spiritual, introspective.",
  8: "Achiever — powerful, ambitious, success-driven.",
  9: "Humanitarian — compassionate, wise, visionary.",
};

/** Destiny personality blurbs */
export const DESTINY_DESC = {
  1: "Pioneer & self-reliant leader",
  2: "Peacemaker & sensitive collaborator",
  3: "Artist & joyful communicator",
  4: "Organiser & loyal builder",
  5: "Explorer & freedom seeker",
  6: "Caregiver & family anchor",
  7: "Seeker of truth & inner wisdom",
  8: "Master of abundance & authority",
  9: "Humanitarian with global vision",
};
