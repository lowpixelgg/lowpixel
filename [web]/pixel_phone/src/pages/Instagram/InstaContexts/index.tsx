import { ThemeProvider } from "styled-components";
import { Theme } from "./themes";
import { RelinkSource, useRelinkValue } from "react-relink";

export const NewStorySource = new RelinkSource({
  key: "newStory",
  default: {
    text: "",
    id: 1,
    background: {
      type: "",
      value: "",
    },
  },
});

export const ThemeSource = new RelinkSource({
  key: "theme",
  default: "dark",
});

export const InstaProviders = ({ children }: any) => {
  const RelinkTheme = useRelinkValue(ThemeSource);

  return (
    <ThemeProvider theme={RelinkTheme === "dark" ? Theme.Dark : Theme.Light}>
      {children}
    </ThemeProvider>
  );
};
