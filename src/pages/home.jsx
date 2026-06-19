


import jasus from '../assets/jesus-bailando.gif';
import '../globalStyles/home.css';

function Home() {
    const handleAboutClick = () => {
        alert("Hello there!");
    }
    return (
        <div className="container">
            <img src={jasus} alt="jesus dancing" />
            <h1 className="hover-box">Christian Ortega </h1>
            <p>
                <button onClick={handleAboutClick} className="win98-button">about</button>
            </p>
            <p> <a target="_blank" href="https://www.linkedin.com/in/christian-ortega-9307268a">LinkedIn</a> <a
                target="_blank" href="https://github.com/chrisortega">Github</a>
                <a target="_blank" href="mailto:[EMAIL_ADDRESS]">Contact me</a>
            </p>
        </div>
    );
}
export default Home;