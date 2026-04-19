import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";

function App(){
  return(
    <div>
      <h1>SmartPrep AI</h1>
      <Upload/>
      <Dashboard/>
      <Quiz/>
    </div>
  );
}

export default App;