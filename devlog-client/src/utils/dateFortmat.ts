const DATE_COUNT = 10;

function getDateFormat(date: string): string {
  return date.slice(0, DATE_COUNT);
}

export default getDateFormat;
