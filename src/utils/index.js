export function dateTimeFormatting(num) {
  return num > 10 ? num : `0${num}`;
}