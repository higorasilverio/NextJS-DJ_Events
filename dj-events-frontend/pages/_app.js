import '../styles/globals.css'
import PropTypes from 'prop-types'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp

MyApp.propTypes = {
    Component: PropTypes.func,
    // eslint-disable-next-line
    pageProps: PropTypes.object
}
