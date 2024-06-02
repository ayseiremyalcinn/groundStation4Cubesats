import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Ground Control Systems Software for Satellites</h2>
        <p>
        Ayşe İrem YALÇIN | 21946696 | Advisor: Doç. Dr. Adnan ÖZSOY
        </p>
        <a
          className="App-link"
          href="https://github.com/ayseiremyalcinn/DesignProject.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Codes
        </a>
        <a
          className="App-link"
          href="https://youtu.be/Z1DeN8KP-3k"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demonstation Video
        </a>

        {/* <img src={process.env.PUBLIC_URL + "/poster.pdf"}></img> */}
        <a href={process.env.PUBLIC_URL + "/poster.pdf"} download="poster.pdf" className="download-link">
          Download Project Poster </a>
        
        
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
        Storing all received data in a database.<br/>
          </div>
          <h3>Methodology</h3>
        <div className="paragraf"> 
        The application collects data from
        N2YO.com sharing information from radar
        systems. And it displays this data in the
        interface. The backend of the application
        makes HTTP get requests to N2YO.com
        using the Feign Client library. The frontend
        of the application receives position and
        nearby passes information by sending an
        HTTP post request to the backend. It
        displays position information in the
        interface using the Leaflet library. Nearby
        passes data is listed in the nearby passes
        table. This information is also used to draw
        the ground station antenna graph.<br/>
        The application also allows users to set the
        frequency at which telemetry packets are
        sent by the satellite. Telemetry data
        corresponding to the specified frequency is
        subsequently received from the satellite by
        the backend. These telemetry data are
        then transmitted to the frontend through a
        WebSocket connection. WebSocket
        architecture is chosen due to its capability
        to handle continuous data streams. The
        SockJS library is utilized for WebSocket
        implementation.
        Also the Application was designed to allow
        users to select a code file from local
        storage for transmission to the satellite. A
        POST request is made to the backend with
        the code file using a REST API. The backend
        of the application sends the code file to the
        satellite via serial port. jSerialComm library
        was used here.

          </div>
          <h3>Results</h3>
        <div className="paragraf"> 
        The result of the project is the development of a specifically designed satellite control station application and efficiently manage satellite
        systems in low Earth orbit. Moreover, it is accessible through a user-friendly interface. The aim of this application is to enhance the efficiency
        of satellite systems by providing satellite operators with the ability to monitor, control, and intervene in satellite missions as necessary. The
        developed application holds significant potential impacts for both users and industries. Efficient satellite systems could provide more
        accurate data collection and communication in various fields, particularly in communication, geographic monitoring, and scientific research.
        <br/><br/><br/>
          </div>
          
        
      </header>
    </div>
  );
}

export default App;
