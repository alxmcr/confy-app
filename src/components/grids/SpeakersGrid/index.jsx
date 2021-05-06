import { SpeakerCard } from 'components/cards/SpeakerCard';
import { useSpeakers } from 'hooks/useSpeakers'
import styles from './SpeakersGrid.module.css'

export function SpeakersGrid() {
    const { loading, speakers, error } = useSpeakers();

    if (loading) return <p className={styles.speakersGridInfoMSG}>Loading speakers...</p>;
    if (error) return <p className={styles.speakersGridErrorMSG}>There was an error with speakers information. Try again, please!</p>;

    return (
        <div className={styles.SpeakersGrid}>
            {
                speakers.map(speaker => {
                    return (
                        <SpeakerCard
                            id={speaker.login.uuid}
                            key={speaker.login.uuid}
                            speaker={speaker}
                        />
                    )
                })
            }
        </div>
    )
}