module.exports = {
  purge: [],
  content: [ "./**/*.{html,js}",
 
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {  
      
    fontFamily: {
        'Venus-Carrare': ["'Venus-Carrare'", 'sans-serif'], 
        'Venus-Plomb':["'Venus-Plomb'", 'sans-serif'],
        'Venus-Acier':["'Venus-Acier'", 'sans-serif'],
        'Venus-Martre':["'Venus-Martre'", 'sans-serif'],
        

      },


      
      

      colors: {


        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        colors: {
          Gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
        }

      },
        
      },
  },
  variants: {
    extend: {

      


    },
  },

}
