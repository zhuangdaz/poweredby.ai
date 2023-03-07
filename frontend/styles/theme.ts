import { ThemeConfig } from "@chakra-ui/react";

export interface PoweredByAiTheme {
  fontFamily: {
    nouvelle: string;
    space: string;
  };
  config: ThemeConfig;
}

export const theme: PoweredByAiTheme = {
  fontFamily: {
    nouvelle: "'Nouvelle Grotesk', monospace, sans-serif",
    space: "'Space Mono', monospace, sans-serif",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
};
