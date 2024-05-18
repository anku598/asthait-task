/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "2xl": "36px",
      "3xl": "45px",
      "5xl": "55px",
    },

    lineHeight: {
      "2xl": "62px",
      "3xl": "56px",
      "5xl": "68px",
    },
    colors: {
      white: "#FFFFFF",
      primary: "#01002F",
      btnColor: "#635BFF",
    },
    fontFamily: {
      global: ["Inter", "sans-serif"],
      "clash-display-medium": ['"clash-display-medium"', "sans-serif"],
      "clash-display-semibold": ['"clash-display-semibold"', "sans-serif"],
      jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
    },
    extend: {
      boxShadow: {
        "custom-box-shadow": "-10px 14px 124px 0px #00000026",
      },
      backgroundImage: {
        "shadow-gradient": "url('/assets/img/Shadow.svg')",
        "circle-gradient":
          "linear-gradient(91.28deg, #3F68FF 0%, #CD63FF 100%)",
        "custom-list-icon": 'url("/assets/img/list-icon.svg")',
        pattern: "url('/assets/img/bg-pattern.svg')",
      },
    },
  },
  plugins: [],
};
