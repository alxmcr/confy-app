import { TalkCard } from 'components/cards/TalkCard';
import { useTalks } from 'hooks/useTalks';
import styles from './TalksList.module.css'

export function TalksList() {
    const { loading, talks } = useTalks();

    if (loading) return <p className={styles.talksListInfoMSG}>Loading talks...</p>;

    return (
        <div className={styles.TalksList}>
            {
                talks.map(talk => <TalkCard key={talk.id} talk={talk} />)
            }
        </div>
    )
}