/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        ['infinite-slider']: 'infiniteSlider 20s linear infinite',
      },
      keyframes: {
        infiniteSlider: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(calc(-250px * 5))',
          },
        },
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        btnPrimary: 'var(--color-bg-button)',
        btnPrimaryHover: 'var(--color-bg-button-hover)',
        btnSecondary: 'var(--color-bg-primary)',
        btnSecondaryHover: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        btnText: 'var(--color-bg-secondary)',
      },
      borderColor: {
        secondary: 'var(--color-bg-secondary)',
      },
      fill: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
    },
  },
  plugins: [require('daisyui')],
};
