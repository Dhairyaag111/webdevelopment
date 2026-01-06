export default function App() {
  let arr = ["apple","mango","orange","pineapple","guava"]
    return<>
      <h1>Fruits</h1>
      <ul className="list-group">
        {arr.map((vaegetable)=>(
          <li key={vaegetable} className="list-group-item">{vaegetable}</li>
        ))}
      </ul>
    </>
}