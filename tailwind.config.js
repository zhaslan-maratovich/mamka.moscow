module.exports = {
  purge: ['./assets/**/*.html', './assets/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: '768px',
      lg: '1199px',
      xl: '1440px',
      '2xl': '1920px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: '#2A2A2A',
      darkBg: '#202020',
      black: '#000000',
      white: '#FFFFFF',
      cream: '#FDFDF9',
      orange: {
        100: '#FFDCA6',
        500: '#C29A5C',
        900: '#87642E',
      },
      gray: {
        300: '#E5E5E5',
        500: '#D8D8D8',
        700: '#C4C4C4',
        900: '#808080',
      },
      sand: '#F5F5F1',
    },
    fontFamily: {
      display: ['TTRamillas-Regular', 'serif'],
      'body-regular': ['TTCommonsPro-Rg', 'sans-serif'],
      'body-medium': ['TTCommonsPro-Md', 'sans-serif'],
    },
    fontSize: {
      'xs-button': ['12px', '140%'],
      'xs-label': ['14px', '160%'],
      'xs-text': ['16px', '165%'],
      'xs-h4': ['21px', '130%'],
      'xs-h3': ['24px', '140%'],
      'xs-h2': ['28px', '120%'],
      'xs-h1': ['45px', '95%'],

      'md-button': ['12px', '140%'],
      'md-label': ['14px', '160%'],
      'md-text': ['16px', '165%'],
      'md-h4': ['21px', '130%'],
      'md-h3': ['24px', '140%'],
      'md-h2': ['40px', '120%'],
      'md-h1': ['70px', '95%'],

      'lg-button': ['12px', '140%'],
      'lg-label': ['14px', '160%'],
      'lg-text': ['16px', '165%'],
      'lg-h4': ['24px', '130%'],
      'lg-h3': ['48px', '140%'],
      'lg-h2': ['40px', '120%'],
      'lg-h1': ['70px', '95%'],

      'xl-button': ['14px', '140%'],
      'xl-label': ['14px', '160%'],
      'xl-text': ['16px', '165%'],
      'xl-h4': ['34px', '130%'],
      'xl-h3': ['48px', '140%'],
      'xl-h2': ['60px', '120%'],
      'xl-h1': ['120px', '95%'],

      '2xl-button': ['14px', '140%'],
      '2xl-label': ['14px', '160%'],
      '2xl-text': ['18px', '165%'],
      '2xl-h4': ['34px', '130%'],
      '2xl-h3': ['48px', '140%'],
      '2xl-h2': ['60px', '120%'],
      '2xl-h1': ['120px', '95%'],
    },
    extend: {
      spacing: {
        15: '3.75rem'
      },
      boxShadow: ({ theme }) => ({
        underline: '0 1px 0 0 ' + theme('colors.dark')
      }),
      zIndex: {
        100: '100',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
