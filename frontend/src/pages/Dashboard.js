import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Dashboard() {

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="mainContent">

        <div className="headerCard">

          <h1>Welcome Back 👋</h1>

          <p>Exam in 32 Days</p>

        </div>

        <div className="statsGrid">

          <div className="statCard">
            <h3>Readiness</h3>
            <h1>78%</h1>
          </div>

          <div className="statCard">
            <h3>Quiz Score</h3>
            <h1>84%</h1>
          </div>

          <div className="statCard">
            <h3>Materials</h3>
            <h1>4</h1>
          </div>

          <div className="statCard">
            <h3>Study Streak</h3>
            <h1>15</h1>
          </div>

        </div>

        <div className="contentGrid">

          <div className="subjectsPanel">

            <h2>Subjects</h2>

            <div className="subjectCard">DBMS</div>
            <div className="subjectCard">Java</div>
            <div className="subjectCard">Operating System</div>
            <div className="subjectCard">Computer Networks</div>

          </div>

          <div className="workspacePanel">

            <h2>AI Learning Workspace</h2>

            <div className="workspaceCard">

              <h3>DBMS.pdf</h3>

              <p>Topics Found:</p>

              <ul>
                <li>Normalization</li>
                <li>SQL Joins</li>
                <li>Transactions</li>
                <li>Indexing</li>
              </ul>

            </div>

          </div>

          <div className="schedulePanel">

            <h2>Today's Plan</h2>

            <div className="taskCard">
              9 AM - DBMS
            </div>

            <div className="taskCard">
              11 AM - Java
            </div>

            <div className="taskCard">
              4 PM - Quiz Practice
            </div>

            <div className="taskCard">
              7 PM - Revision
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;