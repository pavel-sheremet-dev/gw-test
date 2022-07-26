import { BreakPoints, CssVars, TransitionOptions } from 'styles/types';

export const getCssVariables = (): CssVars => ({
  duration: 200,
  breakPoints: {
    response: BreakPoints.response,
    mobile: BreakPoints.mobile,
    tablet: BreakPoints.tablet,
    desktop: BreakPoints.desktop,
  },
  transition: ({
    property,
    duration = 200,
    type = 'linear',
    delay = 0,
  }: TransitionOptions) => `${property} ${duration}ms ${type} ${delay}ms`,
});
