type MqType = 'sm' | 'md' | 'lg' | 'xl';

const breakpoints: { [size in MqType]: number } = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const mq = (bp: MqType) => `@media (max-width: ${breakpoints[bp]}px)`;

export default mq;
