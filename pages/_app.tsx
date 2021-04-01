import { AnimatePresence } from 'framer-motion'
import { AppInitialProps } from 'next/app'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { ComponentType, useEffect } from 'react'
import SEO from '../next-seo.config'
import MUIThemeProvider from 'plugins/Theme'
import Head from 'next/head'

interface IApp {
  Component: ComponentType<AppInitialProps>
  pageProps: AppInitialProps
}

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

export default function PortfolioApp({ Component, pageProps }: IApp): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <MUIThemeProvider>
          <Component {...pageProps} key={router.route} />
        </MUIThemeProvider>
      </AnimatePresence>
    </>
  )
}
