export default function Day() {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let dt = new Date()

  return (
    <div>
      <h2>{days[dt.getDay()]}</h2>
    </div>
  )
}
