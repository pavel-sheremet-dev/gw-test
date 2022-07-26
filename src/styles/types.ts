export enum ThemeTitle {
  defaultTheme = 'defaultTheme',
}

export enum BreakPoints {
  response = '479px',
  mobile = '480px',
  tablet = '768px',
  desktop = '1360px',
}

export enum CSSProp {
  color = 'color',
  backgroundColor = 'background-color',
  fill = 'fill',
  stroke = 'stroke',
  transform = 'transform',
  outlineColor = 'outline-color',
  borderColor = 'border-color',
  opacity = 'opacity',
  top = 'top',
}

export type TransitionProp =
  | 'color'
  | 'background-color'
  | 'fill'
  | 'stroke'
  | 'transform'
  | 'outline-color'
  | 'border-color'
  | 'opacity'
  | 'top';

export interface Palette {
  themeTitle: ThemeTitle;
  colors: {
    defaultFontColor: string;
    secondaryFontColor: string;
    fontColor3: string;
    white: string;
    black: string;
    mainBrandColor: string;
    accentMainBrandColor: string;
    secondaryBrandColor: string;
    backgroundColor1: string;
    backgroundColor2: string;
    required: string;
    requiredBg: string;
    inputPlaceholder: string;
    inputBackGround: string;
  };
  shadows: {
    input: string;
  };
}

export type TransitionOptions = {
  property: CSSProp;
  duration?: number;
  type?: string;
  delay?: number;
};

export type CssVars = {
  duration: number;
  breakPoints: {
    response: BreakPoints.response;
    mobile: BreakPoints.mobile;
    tablet: BreakPoints.tablet;
    desktop: BreakPoints.desktop;
  };
  transition(options: TransitionOptions): string;
};

export type Theme = Palette & CssVars;
