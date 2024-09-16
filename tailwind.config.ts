import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        success: {
          50: '#ECFDF3',
          700: '#027A48',
        },
        blue: {
          900: '#080F2B',
          800: '#101E56',
          700: '#182E81',
          400: '#DCF3FD',
          50: '#284CD7',
        },
        purple: {
          50: '#D4DBF7',
          100: '#F2F4FD',
          300: '#A9B7EF',
          600: '#605EED',
          700: '#4F4DCB',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#eaecf0',
          300: '#CCCCCC',
          500: '#3A3A3A',
          700: '#344054',
          900: '#242424',
        },
        red: {
          50: '#FEF3F2',
          100: '#FEE4E2',
          300: '#FDA29B',
          400: '#FE736E',
          500: '#F04438',
          700: '#B42318',
        },
        brown: {
          100: '#f7f6f2',
          300: '#936045',
          500: '#49382e',
          600: '#302822',
          700: '#190e0f',
        },
      },
      fontSize: {
        h1: ['80px', { fontWeight: '700', lineHeight: '74px' }],
        h2: ['56px', { fontWeight: '700', lineHeight: '54px' }],
        h3: ['36px', { fontWeight: '500', lineHeight: '44px' }],
        h4: ['24px', { fontWeight: '700', lineHeight: '44px' }],
        h5: ['14px', { fontWeight: '600', lineHeight: '20px' }],
        h6: ['12px', { fontWeight: '500', lineHeight: '18px' }],
        h7: ['12px', { fontWeight: '600', lineHeight: '18px' }],
        p1: ['18px', { fontWeight: '400', lineHeight: '30px' }],
        p2: ['14px', { fontWeight: '400', lineHeight: '20px' }],
        p3: ['20px', { fontWeight: '400', lineHeight: '30px' }],
      },
    },
    variants: {
      extend: {
        borderColor: ['focus'], // Enable borderColor on focus state
      },
    },
    plugins: [],
  },
};
export default config;
