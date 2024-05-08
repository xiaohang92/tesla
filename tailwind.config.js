/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "tw-", // Ensures all utility classes are prefixed with 'tw-', reducing the risk of conflicts
  theme: {
    extend: {
      colors: {
        // Use built-in color utilities where possible and define custom properties for specific use
        border: colors.gray["300"], // Example using Tailwind's color utilities
        input: colors.gray["200"],
        ring: colors.blue["500"],
        background: colors.white,
        foreground: colors.black,
        primary: colors.blue,
        secondary: colors.green,
        destructive: colors.red,
        muted: colors.gray["500"],
        accent: colors.purple,
        popover: colors.yellow["400"],
        card: colors.gray["100"],
        // Defining complex properties as needed
        "primary-foreground": colors.blue["700"],
        "secondary-foreground": colors.green["700"],
        "destructive-foreground": colors.red["700"],
        "muted-foreground": colors.gray["600"],
        "accent-foreground": colors.purple["700"],
        "popover-foreground": colors.yellow["600"],
        "card-foreground": colors.gray["200"],
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },
      keyframes: {
        "accordion-down": {
          "0%": { height: "0px" },
          "100%": { height: "100px" }, // Assuming 100px is the height you want at end
        },
        "accordion-up": {
          "0%": { height: "100px" }, // Match end state of accordion-down
          "100%": { height: "0px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Including the plugin for animations
  ],
};
