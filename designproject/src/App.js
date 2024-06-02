import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Ground Control Systems Software for Satellites</h2>
        <p style = {{color:"#61dafb"}}>
        Ayşe İrem YALÇIN | 21946696 | Advisor: Doç. Dr. Adnan ÖZSOY
        </p>

        <h3>Introduction</h3>
        <div className="paragraf"> This project provides a Ground Station Systems Software for CubeSats on Low Earth Orbit. It facilitates communication with satellites
        thanks to its user-friendly interface. Using the application, We can track our Satellite on LEO orbit and establish data communication. The
        GCS application sends the requested files and commands to the satellite when it enters the coverage area of the ground station. It also
        collects telemetry packets from the satellite. It saves this data to the database and thus allows us to analyze it.
        </div>
        <h3>Problem definition</h3>
        <div className="paragraf"> CubeSats are used in various fields like scientific research, education, technology demonstrations, and Earth observation. Because of its small size and standard design, the development and launch costs are low, making space missions more accessible. The main problem is how to effectively
          manage and control CubeSats in Low Earth
          Orbit (LEO). CubeSats can only connect
          with ground stations a few times each day,
          for about 10 minutes each time. This short
          communication time makes it hard to send
          and receive data. The application solves
          these problems by automating the
          communication process.
          </div>
          <h3>Project Requirements</h3>
        <div className="paragraf"> 
        Selecting a code file from local storage
        for transmission.<br/>
        Autonomous file transmission at
        predetermined intervals.<br/>
        Determining the frequency for the
        telemetry packets sent by the satellite.<br/>
        Displaying the latest telemetry packet.<br/>
        Graphical representation of the ground
        station antenna's movements.<br/>
        Displaying the satellite's location and
        upcoming passes using N2YO data.<br/>
        Storing all received data in a database.
          </div>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
