export default (percentage: number) => {
  if (percentage > 66) {
    return '#2fe408';
  }
  if (percentage > 33) {
    return 'orange';
  }
  return 'red';
};
