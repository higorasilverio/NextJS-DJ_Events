import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp

MyApp.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    Component: object,
    // eslint-disable-next-line react/forbid-prop-types
    pageProps: object
}
