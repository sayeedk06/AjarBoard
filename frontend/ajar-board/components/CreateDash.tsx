

export default function CreateDash (props: any) {
    
    return (
        <div className={props.className}>
            <button onClick={() => props.setVisibilityStatus('block')}>New Dashboard</button>
        </div>
    )
}