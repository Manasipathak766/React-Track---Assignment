/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gainsboro: {
          "100": "#e0e0e0",
          "200": "#d9d9d9",
        },
        "white-high-emphasis": "#fff",
        "gray-divider": "#e5e5e5",
        "chart-solid-oi-cvd-8-oi-cvd-purple": "#cc79a7",
        black: "#000",
        "chart-solid-plasma-20-plsm-19-20": "#f7e225",
        "chart-solid-plasma-20-plsm-18-20": "#fccd25",
        "chart-solid-plasma-20-plsm-17-20": "#feb72d",
        red: "#ed1c24",
        chocolate: "#fb8a34",
        limegreen: {
          "100": "#00db4a",
          "200": "rgba(0, 219, 74, 0.87)",
        },
        green: "#19a01e",
        pink: "#ffbfcc",
        gray1: {
          "100": "#fbfcfd",
          "200": "#858585",
          "300": "#767676",
          "400": "#757575",
          "500": "#222",
          "600": "rgba(0, 0, 0, 0.13)",
          "700": "rgba(0, 0, 0, 0.6)",
          "800": "rgba(0, 0, 0, 0.47)",
        },
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#f4f4f4",
          "300": "#f2f2f2",
          "400": "#f1f1f1",
          "500": "#efefef",
          "600": "#e9e9e9",
        },
        "m3-sys-light-on-surface": "#1c1b1f",
        "m3-sys-light-surface-variant": "#e7e0ec",
        dimgray: {
          "100": "#656565",
          "200": "#5f5f5f",
        },
        darkgray: "#b3b3b3",
        darkslategray: {
          "100": "#3c3c3c",
          "200": "#333",
        },
        forestgreen: {
          "100": "#4caf50",
          "200": "rgba(76, 175, 80, 0.9)",
        },
        royalblue: {
          "100": "#0043c4",
          "200": "rgba(0, 67, 196, 0.9)",
        },
        springgreen: "rgba(32, 223, 97, 0.9)",
        "base-black": "#242424",
        "gray-400": "#7a7a7a",
      },
      spacing: {},
      fontFamily: {
        assistant: "Assistant",
        "m3-body-small": "Roboto",
        "noto-sans": "'Noto Sans'",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      "17xl": "36px",
      xl: "20px",
      smi: "13px",
      "2xs": "11px",
      "7xs": "6px",
      "3xs": "10px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

