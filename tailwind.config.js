/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        100: '#337EEA',
      },
      secondary: {
        10: '#EDEEF3',
        20: '#A2B1C1',
        100: '#131828',
      },
    },
    fontSize: {
      lg: '2rem',
      md: '1.6rem',
      sm: '1.4rem',
      xs: '1.2rem',
      '2xl': '2.4rem',
    },
  },
  plugins: [],
});
