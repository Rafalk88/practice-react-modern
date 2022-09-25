import React from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);

    const [time, setTime] = React.useState(0);
    const [text, setText] = React.useState('');
    const [inputSigns, setInputSigns] = React.useState(0);
    const [length, setLength] = React.useState(0);

    const intervalId = React.useRef(null);

    React.useEffect(() => {
        regenerateWord();
    }, []);

    React.useEffect(() => {
        if (text === word) {
            regenerateWord();
            setTime(0);
            setInputSigns((currValue) => {
                return currValue + 1;
            });
            setLength((currValue) => {
                return currValue + text.length;
            });
            setText('');
        }
    }, [text]);

    function startInterval() {
        intervalId.current = setInterval(() => {
            setTime((currValue) => {
                return currValue + 1;
            });
        }, 1000);
    }

    function stopInterval() {
        clearInterval(intervalId.current);
    }

    return (
        <>
            <div>
                <h1>{word}</h1>
                <input
                    value={text}
                    onFocus={() => {
                        startInterval();
                    }}
                    onBlur={() => {
                        stopInterval();
                    }}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
            </div>
            <div>
                <h2>Czas: </h2>
                <p>{time < 10 ? `0${time}` : time} s</p>
                <h2>Ilość poprawnych wyników: </h2>
                <p>{inputSigns}</p>
                <h2>Łączna liczba poprawnie wpisanych znaków: </h2>
                <p>{length}</p>
            </div>
            <div>
                <input
                    type="button"
                    value="RESET"
                    onClick={() => {
                        regenerateWord();
                        setTime(0);
                        setText('');
                        setInputSigns(0);
                        setLength(0);
                    }}
                />
            </div>
        </>
    );
};

export default SpeedTest;
