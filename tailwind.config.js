/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bgSecondary: '#00111A',
      bgPrimary: '#000A0F',
      textWhite: '#fff',
      redButton: '#92000E',
      priceBlue: '#82F3FF',
      placeHolder: '#7C7C8A',
      title: '#E1E1E6',
      descriptionField: '#C4C4CC',
      textFooter: '#FFFAF1',
      bgForm: '#0D1D25',
      bgContentForm: '#001119',
      white: '#FFF',
      transparent: 'transparent'
    },
  },
  plugins: [],
}
