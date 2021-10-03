import Head from 'next/head'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import Footer from './Footer'
import Header from './Header'
import Showcase from './Showcase'
import styles from '@/styles/Layout.module.css'

export default function Layout({ title, keywords, description, children }) {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>

            <Header />

            {router.pathname === '/' && <Showcase />}

            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'music, dj, edm, events'
}

Layout.propTypes = {
    title: PropTypes.string,
    // eslint-disable-next-line
    keywords: PropTypes.string,
    description: PropTypes.string,
    // eslint-disable-next-line
    children: PropTypes.array
}
