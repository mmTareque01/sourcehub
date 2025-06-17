export const stringToarray = (str: string) => {
  console.log({ str });
  if (!str) return [];

  if (Array.isArray(str)) return str;

  return str
    .split(",")
    .map((item) => item.trim()) // Trim whitespace from each item
    .filter((item) => item !== ""); // Remove empty strings
};
