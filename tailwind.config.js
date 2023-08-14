/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: 
  
  {extend:{
    colors: {
      bgSecondary: '#00111A',
      bgPrimary: '#fafafa',
      textWhite: '#fff',
      redButton: '#f97316',
      priceBlue: '#82F3FF',
      placeHolder: '#7C7C8A',
      title: '#fb923c',
      descriptionField: '#C4C4CC',
      textFooter: '#FFFAF1',
      bgForm: '#transparent',
      bgContentForm: '#fffff',
      white: '#FFF',
      transparent: 'transparent'
    },
  }
  },
  plugins: [],
}
