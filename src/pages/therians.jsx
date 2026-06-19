import { useState, useEffect } from "react";
import getAllFilePathsFromFolder from "../utils/assets_map.jsx";
import '../globalStyles/therians.css';

const nameList = [
    "Mar",
    "Angel",
    "Keamberly",
    "Lluvia",
    "Kimberly2",
    "Sergio",
    "Jorge",
    "Rafa",
    "Aranza",
    "Javi",
    "Jennifer",
    "El Matematico",
    "Christian",
    "Martha"
]



function Therians() {
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("The Wise therians");
    const [currentImage, setCurrentImage] = useState();


    const nameRandom = () => {
        document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const newRandomName = Math.floor(Math.random() * nameList.length);

        setTitle(nameList[newRandomName]);
        setCurrentImage(images[newRandomName]);
    }

    useEffect(() => {
        const loadImages = async () => {
            const assets = await getAllFilePathsFromFolder("therians");
            setImages(assets);
        };
        loadImages();
    }, []);


    return (
        <div className="container">
            <img src={currentImage}></img>
            <h1>{title}</h1>
            <div className="therian-container">
                {images.map((imgSrc, index) => (
                    <img
                        key={index}
                        src={imgSrc}
                        alt={`Therian ${index}`}
                        className="therian-img"
                        onClick={() => nameRandom()}
                    />
                ))}
            </div>
        </div>
    );
}
export default Therians;