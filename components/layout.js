import Head from 'next/head'
import { useRouter } from 'next/router'

import Footer from './footer'
import Header from './header'
import ShowCase from './showcase'
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
            {router.pathname === '/' && <ShowCase />}
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'music, dj, em'
}

Layout.propTypes = {
    title: string,
    description: string,
    // eslint-disable-next-line react/forbid-prop-types
    children: object,
    // eslint-disable-next-line react/forbid-prop-types
    keywords: array
}
