export const breakpoints = {
  sm: 411,
  md: 768,
  lg: 1366,
  xl: 1920
};

export enum BREAKPOINTS {
  SM = 'sm',
	MD = 'md',
	LG = 'lg',
	XL = 'xl',
};

/**
* @param key  sm = mobile devices, md = tablet, lg = laptop, xl = monitor
* @returns returns media query string
*/
export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};