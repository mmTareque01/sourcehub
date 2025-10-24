export const stringToarray = (str: string) => {
  if (!str) return [];

  if (Array.isArray(str)) return str;

  return str
    .split(",")
    .map((item) => item.trim()) // Trim whitespace from each item
    .filter((item) => item !== ""); // Remove empty strings
};
