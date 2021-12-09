module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
         '0': '0ms',
         '2000': '2000ms',
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
      },
    },
  },
  variants: {
    extend: {
      inset: ['responsive', 'hover', 'focus'],
      pointerEvents: ['responsive', 'hover', 'focus'],
      transitionProperty: ['responsive', 'hover', 'motion-safe', 'motion-reduce'],
      transitionDuration: ['responsive', 'hover', 'focus'],
      transitionDelay: ['responsive', 'hover', 'focus'],
      transitionTimingFunction: ['responsive', 'hover', 'focus'],

    },
  },
  plugins: [],
  
}
