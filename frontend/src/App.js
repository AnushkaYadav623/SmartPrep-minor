import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Quiz from "./pages/Quiz";

function App(){

    return(
        <div>

            <h1>SmartPrep AI</h1>

            <Signup/>

            <hr/>

            <Login/>

            <hr/>

            <Upload/>

            <hr/>

            <Quiz/>

        </div>
    );
}

export default App;