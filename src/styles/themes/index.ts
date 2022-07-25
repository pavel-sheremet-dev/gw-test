import { defaultTheme } from "./default";
import { getCssVariables } from "styles/variables";
import { Theme, ThemeTitle } from "styles/types";

const themes = { defaultTheme };

const getTheme = (theme: ThemeTitle): Theme => ({
  ...themes[theme],
  ...getCssVariables(),
});

export default getTheme;
