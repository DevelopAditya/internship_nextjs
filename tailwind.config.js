/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#414348",
          "200": "#373a41",
          "300": "#2e3036",
          "400": "#2d2e35",
        },
        mediumvioletred: "#e1348b",
        gray: {
          "100": "#141518",
          "200": "rgba(255, 255, 255, 0.31)",
          "300": "rgba(255, 255, 255, 0.08)",
          "400": "rgba(255, 255, 255, 0.1)",
          "500": "rgba(255, 255, 255, 0.16)",
          "600": "rgba(255, 255, 255, 0.43)",
        },
        slategray: "#728095",
      },
      fontFamily: {
        inter: "Inter",
        raleway: "Raleway",
      },
      borderRadius: {
        "31xl": "50px",
        "3xs": "10px",
        "11xl": "30px",
        "8xs": "5px",
        "521xl-1": "540.1px",
        "10xs": "3px",
      },
    },
    fontSize: {
      mini: "15px",
      base: "16px",
      sm: "14px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
