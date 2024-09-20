export const wordLimit = (limit: number, text: string): string => {
  return text?.length > limit ? `${text.substring(0, limit)}...` : `${text}`;
};

export function truncateString(string: string, number: number) {
  if (string?.length > number) {
    return string.slice(0, number) + '...';
  } else {
    return string;
  }
}
