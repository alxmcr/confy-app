import styles from './TalkCard.module.css'

export function TalkCard({ talk }) {
    const { id, time, title, speakerName, speakerPhoto } = talk;
    return (
        <div id={id} className={styles.TalkCard}>
            <span className={styles.TalkTime}>{time}</span>
            <img className={styles.TalkSpeakerPhoto}
                src={speakerPhoto}
                alt={speakerName}
            />
            <div className={styles.TalkSpeakerInfo}>
                <span className={styles.TalkSpeakerName}>{speakerName}</span>
                <h3 className={styles.TalkTitle}>{title}</h3>
            </div>
        </div>
    )
}