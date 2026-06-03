import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {

    return (

        <div className="sidebar">

            <h2>SP</h2>

            <Link to="/">Dashboard</Link>

            <Link to="/upload">Upload</Link>

            <Link to="/notes">Notes</Link>

            <Link to="/quiz">Quiz</Link>

            <Link to="/schedule">Schedule</Link>

        </div>
    );
}

export default Sidebar;