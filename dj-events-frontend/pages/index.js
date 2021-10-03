import Link from 'next/link'
import PropTypes from 'prop-types'

import EventItem from '@/components/EventItem'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default function HomePage({ events }) {
    return (
        <Layout>
            <h1>Upcoming Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}

            {events.map(evt => (
                <EventItem key={evt.id} evt={evt} />
            ))}

            {events.length > 0 && (
                <Link href="/events">
                    <a className="btn-secondary">View All Events</a>
                </Link>
            )}
        </Layout>
    )
}

export async function getServerSideProps({}) {
    const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
    const events = await res.json()

    return {
        props: { events }
    }
}

HomePage.propTypes = {
    // eslint-disable-next-line
    events: PropTypes.array
}
