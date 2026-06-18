/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './index.tsx', './App.tsx', './components/**/*.{ts,tsx}', './constants.ts'],
  theme: {
    extend: {
      colors: {
        paper: '#ffffff',
        ink: '#1d1d1f',
        vermilion: '#a83636',
        secondary: '#454548',
      },
      fontFamily: {
        serif: ['Songti SC', 'STSong', 'Noto Serif CJK SC', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
