import Display from "./components/Display";

const App = () => {
  const userdetails = [{id: "1", name: "Sivaprathap"}, {id: "2", name: "Karthikeyan"}, {id: "3", name: "Udhayarajan"}];
  const onClick = (e) => {
    alert(`You clicked ${e.target.innerHTML}`);
  }

  return (
    <div className="container">
      <div className="header"><p>Every Users</p></div>
      <Display onClick = {onClick} userdetails = {userdetails} />
    </div>
  )
}

export default App;