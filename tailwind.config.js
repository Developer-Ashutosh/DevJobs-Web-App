/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "#5964E0",
        mainHover: "#AFB4F0",
        lightGrey: "#6D7F97",
      },
      backgroundColor: {
        body: "#F3F5F7",
        darkBody: "#121721",
        darkBg: "#1D222A",
      },
      textColor: {
        primary: "#19212E",
      },
      fontFamily: { kumbh: ["Kumbh Sans", "sans-serif"] },
    },
  },
  plugins: [],
};
