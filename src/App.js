import logo from './J.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Juan Ayala</p>
                <a
                    className="App-link"
                    href="/about-me"
                    rel="noopener noreferrer"
                >
                    About Me
                </a>
            </header>
        </div>
    );
}

export default App;
