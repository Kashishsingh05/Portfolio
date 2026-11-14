/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10131c",
        panel: "#181c29",
        line: "#272c3d",
        soft: "#9aa2b8",
        accent: "#8ab4ff",
        gold: "#f2c14e",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        code: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
