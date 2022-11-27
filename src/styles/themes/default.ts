const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
} as const;

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
} as const;

export const defaultTheme = {
  yellowLight: "#F1E9C9",
  yellow: "#DBAC2C",
  yellowDark: "#C47F17",
  purpleLight: "#EBE5F9",
  purple: "#8047F8",
  purpleDark: "#4B2995",

  baseCard: "#F3F2F2",
  baseInput: "#EDEDED",
  baseButton: "#E6E5E5",
  baseHover: "#D7D5D5",
  baseLabel: "#8D8686",
  baseText: "#574F4D",
  baseSubtitle: "#403937",
  baseTitle: "#272221",

  background: "#FAFAFA",

  white: "#FFFFFF",
};
