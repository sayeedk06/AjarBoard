import styles from '../styles/Modal.module.css'

export default function CreateDashModal (props: any) {
    
    return (
        <div className={styles.modal}>
            <form action="/api/form" method="post">
                <input type="text" id="name" name="name" autoComplete='on' autoFocus placeholder='Name'/>
                <label htmlFor="type">Dashboard is DRAFT(DR) type on creation</label>
                <input type="text" id="type" name="type" value="DR" readOnly />
                <button type="submit" value='submit'>Submit</button>
            </form>
        </div>
    )
}