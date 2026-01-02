// export default function App() {
//   return <div>
//     {/* <button type="button" className="btn btn-primary">Primary</button>
//     <button type="button" className="btn btn-secondary">Secondary</button>
//     <button type="button" className="btn btn-success">Success</button>
//     <button type="button" className="btn btn-danger">Danger</button>
//     <button type="button" className="btn btn-warning">
//       Warning</button>
//     <button type="button" className="btn btn-info">Info</button>
//     <button type="button" className="btn btn-light">Light</button>
//     <button type="button" className="btn btn-dark">Dark</button>

//     <button type="button" className="btn btn-link">Link</button>



//     <button type="button" className="btn btn-outline-primary">Primary</button>
//     <button type="button" className="btn btn-outline-secondary">Secondary</button>
//     <button type="button" className="btn btn-outline-success">Success</button>
//     <button type="button" className="btn btn-outline-danger">Danger</button>
//     <button type="button" className="btn btn-outline-warning">Warning</button>
//     <button type="button" className="btn btn-outline-info">Info</button>
//     <button type="button" className="btn btn-outline-light">Light</button>
//     <button type="button" className="btn btn-outline-dark">Dark</button>



//     <div className="btn-group">
//       <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//         Danger
//       </button>
//       <ul className="dropdown-menu">
//         <li><a className="dropdown-item" href="#">Action</a></li>
//         <li><a className="dropdown-item" href="#">Another action</a></li>
//         <li><a className="dropdown-item" href="#">Something else here</a></li>
//         <li><hr className="dropdown-divider" /></li>
//         <li><a className="dropdown-item" href="#">Separated link</a></li>
//       </ul>
//     </div>

//     <div className="btn-group">
//       <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//         Primary
//       </button>
//       <ul className="dropdown-menu">
//         <li><a className="dropdown-item" href="#">Action</a></li>
//         <li><a className="dropdown-item" href="#">Another action</a></li>
//         <li><a className="dropdown-item" href="#">Something else here</a></li>
//         <li><hr className="dropdown-divider" /></li>
//         <li><a className="dropdown-item" href="#">Separated link</a></li>
//       </ul>
//     </div>

//     <div className="btn-group">
//       <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//         Warning
//       </button>
//       <ul className="dropdown-menu">
//         <li><a className="dropdown-item" href="#">Action</a></li>
//         <li><a className="dropdown-item" href="#">Another action</a></li>
//         <li><a className="dropdown-item" href="#">Something else here</a></li>
//         <li><hr className="dropdown-divider" /></li>
//         <li><a className="dropdown-item" href="#">Separated link</a></li>
//       </ul>
//     </div>


//     <label for="range1" className="form-label">Example range</label>
//     <input type="range" className="form-range" id="range1"></input>


//     <nav className="navbar bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand">Navbar</a>
//         <form className="d-flex" role="search">
//           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//           <button className="btn btn-outline-success" type="submit">Search</button>
//         </form>
//       </div>
//     </nav> */}


//     {/* <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
//       <div className="progress-bar" style={{width: "0%"}}></div>
//     </div>
//     <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
//       <div className="progress-bar" style={{width: "25%"}}></div>
//     </div>
//     <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
//       <div className="progress-bar" style={{width: "50%"}}></div>
//     </div>
//     <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
//       <div className="progress-bar" style={{width: "75%"}}></div>
//     </div>
//     <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
//       <div className="progress-bar" style={{width: "100%"}}></div>
//     </div> */}

//   </div>
// }



// export default function App() {
//   return
  // <div>
  //   <div>
  //     <h1>To-Do List</h1>
  //     <br />
  //     <div class="input-group">
  //       <input type="text" class="form-control" placeholder="Work To Do" aria-label="Username" aria-describedby="visible-addon" />
  //       <input type="text" class="form-control d-none" placeholder="Hidden input" aria-label="Hidden input" aria-describedby="visible-addon" />
  //     </div>
  //     <input type="date" />
  //     <button type="button" class="btn btn-success">Add</button>
  //   </div>
  //   <div>
  //     <p>Bring son from school</p>
  //     <p>12/31/2025</p>
  //     <button type="button" class="btn btn-danger">Delete</button>
  //   </div>
  //   <div>
  //     <p>Buy fish from Birtabazar</p>
  //     <p>12/31/2025</p>
  //     <button type="button" class="btn btn-danger">Delete</button>
  //   </div>
  // </div>
// }


import Heading from './heading.jsx'
import AddToDo from './AddToDo.jsx'
import ToDoItem1 from './ToDoItem1.jsx'
import ToDoItem2 from './ToDoItem2.jsx'
import './App.css'
export default function App(){
  return <div>
    <Heading></Heading>
    <AddToDo></AddToDo>
    <ToDoItem1></ToDoItem1>
    <ToDoItem2></ToDoItem2>
  </div>
}