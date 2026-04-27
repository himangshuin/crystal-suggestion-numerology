/**
 * data.js
 * Crystal mappings, numerology descriptions, and affiliate config
 * WithHimu Crystal Calculator
 */

export const AFFILIATE_BASE = "https://gemsmantra.com/?ref=HIMANGSHUKALITA";

export function buildAffiliateUrl(searchTerm) {
  const encoded = encodeURIComponent(searchTerm + " crystal bracelet");
  return `${AFFILIATE_BASE}&search=${encoded}`;
}

/** Mulank (Psychic Number) crystal map — keys 1–9 */
export const MULANK_CRYSTAL = {
  1: {
    name: "Sunstone",
    full: "Sunstone Bracelet",
    emoji: "🌞",
    color: "#f4a12f",
    desc: "Ignites leadership, confidence & solar vitality.",
    searchTerm: "Sunstone Bracelet",
  },
  2: {
    name: "Mother of Pearl",
    full: "Mother of Pearl Bracelet",
    emoji: "🌊",
    color: "#a8d8ea",
    desc: "Enhances intuition, calm & lunar wisdom.",
    searchTerm: "Mother of Pearl Bracelet",
  },
  3: {
    name: "Dragon Vein Agate",
    full: "Dragon Vein Agate Bracelet",
    emoji: "🐉",
    color: "#7ecba1",
    desc: "Boosts creativity, expression & joyful energy.",
    searchTerm: "Dragon Vein Agate Bracelet",
  },
  4: {
    name: "Golden Obsidian",
    full: "Golden Obsidian Bracelet",
    emoji: "🌑",
    color: "#c9a84c",
    desc: "Grounds, protects & stabilises your energy field.",
    searchTerm: "Golden Obsidian Bracelet",
  },
  5: {
    name: "Green Aventurine",
    full: "Green Aventurine Bracelet",
    emoji: "🍀",
    color: "#4caf7d",
    desc: "Attracts luck, adventure & abundance.",
    searchTerm: "Green Aventurine Bracelet",
  },
  6: {
    name: "Rose Quartz",
    full: "Rose Quartz Bracelet",
    emoji: "💗",
    color: "#f9a8d4",
    desc: "Opens the heart, nurtures love & compassion.",
    searchTerm: "Rose Quartz Bracelet",
  },
  7: {
    name: "Cat's Eye",
    full: "Cat's Eye Bracelet",
    emoji: "🐱",
    color: "#c8b96a",
    desc: "Deepens intuition, perception & inner focus.",
    searchTerm: "Cats Eye Bracelet",
  },
  8: {
    name: "Amethyst",
    full: "Amethyst Bracelet",
    emoji: "💜",
    color: "#9b59b6",
    desc: "Manifests abundance, wisdom & higher clarity.",
    searchTerm: "Amethyst Bracelet",
  },
  9: {
    name: "Pyrite",
    full: "Pyrite Bracelet",
    emoji: "✨",
    color: "#d4af37",
    desc: "Attracts wealth, willpower & bold action.",
    searchTerm: "Pyrite Bracelet",
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
    searchTerm: "Tiger Eye Bracelet",
  },
  2: {
    name: "Green Jade",
    full: "Green Jade Bracelet",
    emoji: "🟢",
    color: "#3aad6e",
    desc: "Harmony, luck & deep emotional balance.",
    searchTerm: "Green Jade Bracelet",
  },
  3: {
    name: "Azurite",
    full: "Azurite Bracelet",
    emoji: "🔵",
    color: "#2980b9",
    desc: "Inspiration, psychic expansion & truth-speaking.",
    searchTerm: "Azurite Bracelet",
  },
  4: {
    name: "Clear Quartz",
    full: "Clear Quartz Bracelet",
    emoji: "💎",
    color: "#d0e8f0",
    desc: "Clarity, amplification & energetic alignment.",
    searchTerm: "Clear Quartz Bracelet",
  },
  5: {
    name: "Turquoise",
    full: "Turquoise Bracelet",
    emoji: "🩵",
    color: "#30bfbf",
    desc: "Adventure, protection & authentic truth.",
    searchTerm: "Turquoise Bracelet",
  },
  6: {
    name: "Rhodonite",
    full: "Rhodonite Bracelet",
    emoji: "🌸",
    color: "#d45e8c",
    desc: "Emotional healing, forgiveness & compassion.",
    searchTerm: "Rhodonite Bracelet",
  },
  7: {
    name: "Kambaba Jasper",
    full: "Kambaba Jasper Bracelet",
    emoji: "🌿",
    color: "#4e7c59",
    desc: "Spiritual grounding, peace & ancient wisdom.",
    searchTerm: "Kambaba Jasper Bracelet",
  },
  8: {
    name: "Sodalite",
    full: "Sodalite Bracelet",
    emoji: "🪬",
    color: "#3455a4",
    desc: "Logic, manifestation & deep inner clarity.",
    searchTerm: "Sodalite Bracelet",
  },
  9: {
    name: "Bloodstone",
    full: "Bloodstone Bracelet",
    emoji: "🔴",
    color: "#c0392b",
    desc: "Vitality, courage & energetic purification.",
    searchTerm: "Bloodstone Bracelet",
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
