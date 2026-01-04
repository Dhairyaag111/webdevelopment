export function Time(){
    let dt = new Date()
    return <div>
        <h2>{dt.getHours}:{dt.getMinutes}:{dt.getSeconds}</h2>
    </div>
}