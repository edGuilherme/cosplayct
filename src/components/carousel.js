import { useState } from 'react';
import './css/carousel.css';

const Carousel = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % props.items.length;
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = currentIndex === 0 ? props.items.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
    };

    const currentItem = props.items[currentIndex];

    return (
        <div className="carousel">
            <div className="carousel-item">
                {props.items.map((item, index) => (
                    <img
                        key={index}
                        src={item.imagem}
                        alt="imagem"
                        className={index === currentIndex ? 'active' : ''}
                    />
                ))}
                <div className="carousel-info">
                    <h2>{currentItem.titulo}</h2>
                    <p>{currentItem.descricao}</p>
                </div>
            </div>
            <button onClick={handlePrev} className="esquerda">Prev</button>
            <button onClick={handleNext} className="direita">Next</button>
        </div>
    );
};

export default Carousel;
