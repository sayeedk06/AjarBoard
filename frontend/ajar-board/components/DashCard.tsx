import styles from '../styles/DashCard.module.css'


export default function DashCard (props: any) {
    
    return (
        <div className={styles.card}>
            <h5>{props.name}</h5>
            <h5>Last Edited: {props.last_edited}</h5>
            <hr />
            <p>Dashboard Type - {props.type == 'DR'? 'DRAFT': 'PUBLISHED'}</p>
        </div>
    )
}