import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

import styles from '@/styles/EventItem.module.css'

export default function EventItem({ evt }) {
    return (
        <div className={styles.event}>
            <div className={styles.img}>
                <Image
                    src={evt.image ? evt.image : '/images/event-default.png'}
                    width={170}
                    height={100}
                    alt="Event"
                />
            </div>

            <div className={styles.info}>
                <span>
                    {evt.date} at {evt.time}
                </span>
                <h3>{evt.name}</h3>
            </div>

            <div className={styles.link}>
                <Link href={`/events/${evt.slug}`}>
                    <a className="btn">Details</a>
                </Link>
            </div>
        </div>
    )
}


EventItem.propTypes = {
    // eslint-disable-next-line
    evt: PropTypes.object
}

