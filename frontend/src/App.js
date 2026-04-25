import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Signup from "./pages/Signup";

function App(){
  return(
    <div>
      <h1>SmartPrep AI</h1>
      <div className="App"><Signup/> </div> 
      <Upload/>
      <Dashboard/>
      <Quiz/>
    </div>
  );
}

export default App;