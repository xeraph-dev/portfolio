/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const withFonts = require('next-fonts')
module.exports = withFonts({
  enableSvg: true,
  images: {
    domains: [`www.minjus.gob.cu`, 'www.epromap.cu'],
  },
})
