import { GetServerSideProps } from 'next'
import styles from '../styles/Modal.module.css'

async function createDash (event:any) {
    event.preventDefault();
    try {
        const res = await fetch("http://127.0.0.1:8000/api/dashboard/", {
        method: 'POST',
        body: JSON.stringify({
        "name": 'frontend',
        "dash_type": "DR",
        }),
        headers: {
            'content-type' : 'application/json'
        }
    })
    const data = await res.json()
    console.log(data)
    } catch (error) {
        console.log(error)
    }
    
    
    

}


export default function CreateDashModal (props: any) {
    
    return (
        <div className={styles.modal} style={{display: props.visibilityStatus}}>
            
            <span onClick={()=>props.setVisibilityStatus('none')}>❌</span>
            <h3>Add New Dashbaord</h3><hr />
            <form onSubmit={createDash} method="post">
                <input type="text" id="name" name="name" autoComplete='on' autoFocus placeholder='Name'/>
                <label htmlFor="type">Dashboard is DRAFT(DR) type on creation</label>
                <input type="text" id="type" name="type" value="DR" readOnly />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}



// export const getServerSideProps: GetServerSideProps = async () => {
    
// }