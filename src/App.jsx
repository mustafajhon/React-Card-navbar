import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div id="nav" className="container">
        <ul className="nav nav-tabs justify-content-end">
          <li id="navLink" className="nav-item">
            <a className="active nav-link" href="#">
              Card
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Service
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="card" id="card">
        <h1 id="sub" className="text text-center">
          <span>Mu</span>stafa John
        </h1>
        <hr />
        <p>
          Hi, I am a web developper. I can build diffrent web pages. I started
          learning to code when I was at school. Now I have a Good knowledge
          about programming and computers in genral. Pleas contact me if you
          think I can help You :)
        </p>
        <hr />
        <h3 className="text text-center">Contact</h3>
        <label htmlFor="text">Write Down your message:</label>
        <textarea
          placeholder="it will simply show your message in console."
          name="text"
          id="text"
          cols="10"
          rows="3"
        ></textarea>
        <button onClick={sender} className="btn btn-primary">
          Send
        </button>
      </div>
    </>
  );
}

function sender() {
  let text = document.getElementById("text").value;
  console.log(text);
}

export default App;
