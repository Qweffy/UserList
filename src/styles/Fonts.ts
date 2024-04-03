import { TextStyle } from 'react-native'

const h1Headline: TextStyle = {
  fontFamily: 'Nunito',
  fontWeight: '300',
  fontSize: 96,
  letterSpacing: -1.5,
}

const h2Headline: TextStyle = {
  fontFamily: 'Nunito',
  fontWeight: '300',
  fontSize: 60,
  letterSpacing: 0,
}

const h2HeadlineBold: TextStyle = {
  ...h2Headline,
  fontWeight: 'bold',
}

const h3Headline: TextStyle = {
  fontFamily: 'Nunito',
  fontWeight: '300',
  fontSize: 48,
  letterSpacing: 0,
}

const h3HeadlineBold: TextStyle = {
  ...h3Headline,
  fontWeight: 'bold',
}

const h4Headline: TextStyle = {
  fontFamily: 'Nunito',
  fontWeight: 'bold',
  fontSize: 34,
  letterSpacing: 0,
}

const h5Headline: TextStyle = {
  fontFamily: 'Nunito',
  fontWeight: 'bold',
  fontSize: 24,
  letterSpacing: 0,
}

const h6Headline: TextStyle = {
  fontFamily: 'Nunito',
  fontWeight: 'bold',
  fontSize: 20,
  letterSpacing: 0,
}

const subtitle: TextStyle = {
  fontFamily: 'Nunito',
  fontWeight: 'bold',
  fontSize: 16,
  letterSpacing: 0,
  lineHeight: 24,
}

const caption: TextStyle = {
  fontFamily: 'Open Sans',
  fontWeight: '600',
  fontSize: 12,
  letterSpacing: 0,
  lineHeight: 18,
}

const bodyRegular: TextStyle = {
  fontFamily: 'Open Sans',
  fontSize: 16,
  letterSpacing: 0,
  lineHeight: 24,
}

const bodyItalic: TextStyle = {
  ...bodyRegular,
  fontStyle: 'italic',
}

const bodyBold: TextStyle = {
  ...bodyRegular,
  fontWeight: 'bold',
}

const tinyDetails: TextStyle = {
  fontFamily: 'Open Sans',
  fontSize: 12,
  letterSpacing: 0,
  lineHeight: 18,
}

const tinyDetailsBold: TextStyle = {
  ...tinyDetails,
  fontWeight: 'bold',
}

const tinyDetailsItalic: TextStyle = {
  ...tinyDetails,
  fontStyle: 'italic',
}

const defaultInsightValues: TextStyle = {
  fontFamily: 'Nunito',
  fontWeight: 'bold',
  fontSize: 40,
}

const labelFieldRegular: TextStyle = {
  fontFamily: 'Open Sans',
  fontSize: 16,
  letterSpacing: 0,
  lineHeight: 24,
}

const labelFieldBold: TextStyle = {
  ...labelFieldRegular,
  fontWeight: 'bold',
}

const activeLabelField: TextStyle = {
  fontFamily: 'Open Sans',
  fontSize: 14,
  letterSpacing: 0,
  lineHeight: 21,
}

const smallInisghtValue: TextStyle = {
  fontFamily: 'Nunito',
  fontWeight: '800',
  fontSize: 20,
  letterSpacing: 0,
  lineHeight: 30,
}

const buttons: TextStyle = {
  fontFamily: 'Open Sans',
  fontWeight: '600',
  fontSize: 16,
  letterSpacing: 0,
  lineHeight: 24,
}

const chartText: TextStyle = {
  lineHeight: 20,
  letterSpacing: -0.53,
  ...bodyBold,
}
const MAX_FONT_SIZE_MULTIPLIER = 1.4

export {
  h1Headline,
  h2Headline,
  h2HeadlineBold,
  h3Headline,
  h3HeadlineBold,
  h4Headline,
  h5Headline,
  h6Headline,
  subtitle,
  caption,
  bodyRegular,
  bodyItalic,
  bodyBold,
  tinyDetails,
  tinyDetailsBold,
  tinyDetailsItalic,
  labelFieldRegular,
  labelFieldBold,
  activeLabelField,
  smallInisghtValue,
  buttons,
  defaultInsightValues,
  chartText,
  MAX_FONT_SIZE_MULTIPLIER,
}
