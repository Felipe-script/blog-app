export const breakpoints = {
  sm: 41.1,
  md: 76.8,
  lg: 136.6,
  xl: 192
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
    `@media (min-width: ${breakpoints[key]}rem) { ${style} }`;
};