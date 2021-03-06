import colors from '../styles/constants/_colors.scss'

export const theme = {
  light: {
    backgroundColor: colors.$WHITE,
    componentBgColor: 'rgba(128,128,128,0.2)',
    textColor: 'rgba(0,0,0,0.8)',
    mainColor: 'rgba(0,0,128,0.5)',
    toggleColor: 'rgba(254,254,254)',
    switchBgColor: 'rgba(0,0,0,0.8)',
    componentAreaBgColor: 'rgba(254,254,254,0.1)',
    componentTextColor: 'rgba(128,128,128,0.9)',
    headerBgColor: 'rgba(127,127,127,0.1)',
    sliderMainColor: 'rgba(0,0,128)',
  },
  dark: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    componentBgColor: 'rgba(255,255,255,0.3)',
    textColor: 'rgba(255,255,255,0.9)',
    mainColor: 'rgba(4,146,194)',
    toggleColor: 'rgba(2,2,2,0.4)',
    switchBgColor: 'rgba(255,255,255,0.9)',
    componentAreaBgColor: 'rgba(2,2,2,0.5)',
    componentTextColor: 'rgba(255,255,255,0.5)',
    headerBgColor: 'rgba(0,0,0,0.7)',
    sliderMainColor: 'rgba(4,146,194)',
  },
}
