/**
 * numerology.js
 * Core numerology calculation functions
 * WithHimu Crystal Calculator
 */

/**
 * Reduce a number to a single digit (1–9).
 * Master numbers (11, 22, 33) are NOT preserved — always reduce fully.
 */
export function reduceToSingleDigit(n) {
  if (isNaN(n) || n <= 0) return 0;
  let num = Math.abs(n);
  while (num > 9) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    num = sum;
  }
  return num;
}

/**
 * Mulank (Psychic Number): sum of digits of birth DAY, reduced to 1–9.
 * e.g., day=29 → 2+9=11 → 1+1=2
 */
export function calculateMulank(day) {
  if (!day || day < 1 || day > 31) return 0;
  return reduceToSingleDigit(day);
}

/**
 * Destiny Number (Life Path): sum of ALL digits in full date (YYYYMMDD),
 * always reduced fully to a single digit 1–9.
 * e.g., 1995-07-22 → 1+9+9+5+0+7+2+2 = 35 → 3+5 = 8
 */
export function calculateDestinyNumber(year, month, day) {
  // Zero-pad to ensure correct digit count
  const dateStr = [
    String(year),
    String(month).padStart(2, '0'),
    String(day).padStart(2, '0'),
  ].join('');

  let totalSum = 0;
  for (const ch of dateStr) {
    totalSum += parseInt(ch, 10);
  }

  return reduceToSingleDigit(totalSum);
}

/**
 * Parse a date-input value "YYYY-MM-DD" into { year, month, day, valid }.
 */
export function parseDate(dateInputValue) {
  if (!dateInputValue) return { valid: false };
  const parts = dateInputValue.split('-');
  if (parts.length !== 3) return { valid: false };

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) return { valid: false };
  if (month < 1 || month > 12) return { valid: false };

  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) return { valid: false };
  if (year < 1900 || year > new Date().getFullYear()) return { valid: false };

  return { year, month, day, valid: true };
}
