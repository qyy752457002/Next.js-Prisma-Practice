import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          '50': '#f7f2e7', // 淡棕色
          '100': '#ecd9bf', // 更浅棕色
          '200': '#e1bf96', // 浅棕色
          '300': '#d6a56e', // 中等棕色
          '400': '#cc8b45', // 暗棕色
          '500': '#c2711d', // 默认棕色，稍暗
          '600': '#a35d17', // 更暗棕色
          '700': '#854911', // 暗棕色
          '800': '#66350b', // 很暗棕色
          '900': '#472105', // 最暗棕色
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
