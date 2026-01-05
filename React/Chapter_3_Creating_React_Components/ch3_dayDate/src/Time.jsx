export default function Time() {
  let dt = new Date()

  return (
    <div>
      <h2>
        {dt.toLocaleTimeString()}
      </h2>
    </div>
  )
}
