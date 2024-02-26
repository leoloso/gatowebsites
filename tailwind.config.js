/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'nycd': ['var(--font-nycd)', 'cursive'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.017em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.017em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.017em' }],
        '5xl': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.017em' }],
        '6xl': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      animation: {
        'endless': 'endless 20s linear infinite',
        'shine': 'shine 5s linear 500ms infinite',
        'float': 'float 2s ease-in-out infinite',
      },
      keyframes: {
        'endless': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-245px)' }
        },
        'shine': {
          '0%': { top: '0', transform: 'translateY(-100%) scaleY(10)', opacity: '0' },
          '2%': { opacity: '.5' },
          '40%': { top: '100%', transform: 'translateY(0) scaleY(200)', opacity: '0' },
          '100%': { top: '100%', transform: 'translateY(0) scaleY(1)', opacity: '0' },
        },
        'float': {
          '0%': { transform: 'translateY(3%)' },
          '50%': { transform: 'translateY(-3%)' },
          '100%': { transform: 'translateY(3%)' }
        },
      },
    //   colors: {
    //     gray: {
    //       100: '#EBF1F5',
    //       200: '#D9E3EA',
    //       300: '#C5D2DC',
    //       400: '#9BA9B4',
    //       500: '#707D86',
    //       600: '#55595F',
    //       700: '#33363A',
    //       800: '#25282C',
    //       900: '#151719',
    //     },
    //     purple: {
    //       100: '#F4F4FF',
    //       200: '#E2E1FF',
    //       300: '#CBCCFF',
    //       400: '#ABABFF',
    //       500: '#8D8DFF',
    //       600: '#5D5DFF',
    //       700: '#4B4ACF',
    //       800: '#38379C',
    //       900: '#262668',
    //     },
    //     blue: {
    //       100: '#E6F0FD',
    //       200: '#CCE2FC',
    //       300: '#99C5FA',
    //       400: '#66A9F7',
    //       500: '#338CF5',
    //       600: '#0070F4',
    //       700: '#0064DA',
    //       800: '#0059C2',
    //       900: '#004391',
    //     },
    //   }
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
