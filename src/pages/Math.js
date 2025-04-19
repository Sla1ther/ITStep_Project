
import React, { useEffect, useState } from 'react';

const Mathe = () => {
    const [f, setF] = useState('');
    const [dif, setDif] = useState('');
    const [num, setNum] = useState('');
    const [res, setRes] = useState(0);

    const arifmProgrCalc = (e) => {
        e.preventDefault();

        const a1 = parseFloat(f);
        const d = parseFloat(dif);
        const n = parseFloat(num);
        if (n <= 0) {
            alert("Кількість членів прогресії повинна бути додатнім числом.");
            return;
        }
        const aN = a1 + (n - 1) * d;
        const sN = ((a1 + aN) * n) / 2;
        setRes({ aN, sN });

    }

    //

    const [f2, setF2] = useState('');
    const [znam,setZnam] = useState('');
    const [num2,setNum2] = useState('');
    const [res2, setRes2] = useState(0);
    const geomProgrCalc = (e) => {
        e.preventDefault();

        const b1 = parseFloat(f2);
        const q = parseFloat(znam);
        const n = parseFloat(num2);
        if (n <= 0) {
            alert("Кількість членів прогресії повинна бути додатнім числом.");
            return;
        }
        const bN = b1 * Math.pow(q, n-1);
        const sN = (b1 * (Math.pow(q, n)-1)) / (q-1);
        let s = 0;
        if (Math.abs(q)<1) {
            s = b1/(1-q);
        }
        if (s === 0){
            s = "Сума безкінечної прогресії не існує, оскільки q >= 1";
        }
        
        setRes2({ bN, sN, s });
    }

    //
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [time, setTime] = useState(30);
    useEffect(() => {
        if (!isGameStarted || isGameOver || time <= 0) {
            return;
        }
    
        const timer = setTimeout(() => {
            if (time === 1) {
                handleTimeUp();
            } else {
                setTime(time - 1);
            }
        }, 1000);
    
        return () => clearTimeout(timer);
    }, [time, isGameStarted, isGameOver]);
    const questions = [
        {
            question: "В арифметичній прогресії a₁ = 3 та d = 4. Знайдіть a₅",
            options: ["19", "15", "17", "21"],
            correct: "19"
        },
        {
            question: "Знайдіть перший член і різницю арифметичної прогресії, якщо a5=17 a10=32",
            options: ["1", "4", "5", "8"],
            correct: "5"
        },
        
        {
            question: "В геометричній прогресії b₁ = 2 та q = 3. Знайдіть b₄",
            options: ["54", "48", "52", "50"],
            correct: "54"
        },
        {
            question: "Знайдіть суму перших 5 членів геометричної прогресії: 1, 2, 4, 8, 16",
            options: ["30", "31", "32", "29"],
            correct: "31"
        },
        {
            question: "Знайдіть суму перших 4 членів арифметичної прогресії: 2, 5, 8, 11",
            options: ["26", "28", "24", "30"],
            correct: "26"
        },
        {
            question: "В геометричній прогресії b₁ = 1 та q = 2. Знайдіть суму перших 3 членів",
            options: ["7", "8", "6", "5"],
            correct: "7"
        },
        {
            question: "В арифметичній прогресії a₁ = 5 та d = 2. Знайдіть a₈",
            options: ["17", "21", "15", "19"],
            correct: "19"
        }
        
    ];
    const handleStart = ()=>{
        setIsGameStarted(true);
        setCurrentQuestion(0);
        setScore(0);
        setIsGameOver(false);
        setTime(30);
    };
    const handleAnswer = (option) => {
        if (option === questions[currentQuestion].correct) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setTime(30);
        } else {
            setIsGameOver(true);
        }
        
    };
    const handleTimeUp = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setTime(30);
        } else {
            setIsGameOver(true);
        }
    };

    const game=()=>{
        if (!isGameStarted) {
            return (
                <div className='progr-game'>
                    <h1>Гра "Прогресія"</h1>
                    <button className='progr-game-btn' onClick={handleStart}>Почати гру</button>
                </div>
            );
        }
        else if (isGameOver) {
            return (
                <div className='progr-game'>
                    <h1>Гра "Прогресія"</h1>
                    <h2>Ваш рахунок: {score}</h2>
                    <button className='progr-game-btn' onClick={handleStart}>Почати знову</button>
                </div>
            );
        }
        else{
            return (
                <div className='progr-game'>
                    <h1>Гра "Прогресія"</h1>
                    <h1>Час: {time}</h1>
                    <h2>Ваш рахунок: {score}</h2>
                    <div className='progr-game-quest'>
                        <h2>{questions[currentQuestion].question}</h2>
                        <div className='progr-game-options'>
                            {questions[currentQuestion].options.map((option, index) => (
                                <button key={index} className='progr-game-btn' onClick={() => handleAnswer(option)}>{option}</button>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
        
    }
    return (
        <main>

            <div className='math-main'>
                <div className='mathjs'>МАТЕМАТИКА&JavaScript</div>
            </div>

            <div className='math-arifmporgr-calc'>
                <h1>Калькулятор арифметичної прогресії</h1>
                <form onSubmit={arifmProgrCalc} className='math-arifmporgr-form'>
                    <div className='math-arifmporgr-inp'>
                        <label>Перший член прогресії:</label>
                        <input type="number" value={f} onChange={(e) => setF(e.target.value)} />
                    </div>
                    <div className='math-arifmporgr-inp'>
                        <label>Крок прогресії:</label>
                        <input type="number" value={dif} onChange={(e) => setDif(e.target.value)} />
                    </div>
                    <div className='math-arifmporgr-inp'>
                        <label>Кількість членів прогресії:</label>
                        <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
                    </div>
                    <button type="submit" >Розрахувати</button>
                    <div className='math-arifmporgr-res'>
                        <h2>Результат:</h2>
                        <p>n-ий член прогресії: {res.aN}</p>
                        <p>Сума n членів прогресії: {res.sN}</p>
                    </div>
                </form>
            </div>

            <div className='math-geomprogr-calc'>
                <h1>Калькулятор геометричної прогресії</h1>
                <form onSubmit={geomProgrCalc} className='math-geomprogr-form'>
                    <div className='math-geomporgr-inp'>
                        <label>Перший член прогресії:</label>
                        <input type="number" value={f2} onChange={(e) => setF2(e.target.value)} />
                    </div>
                    <div className='math-geomporgr-inp'>
                        <label>Крок прогресії:</label>
                        <input type="number" value={znam} onChange={(e) => setZnam(e.target.value)} />
                    </div>
                    <div className='math-geomporgr-inp'>
                        <label>Кількість членів прогресії:</label>
                        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
                    </div>
                    <button type="submit" >Розрахувати</button>
                    <div className='math-arifmporgr-res'>
                        <h2>Результат:</h2>
                        <p>n-ий член прогресії: {res2.aN}</p>
                        <p>Сума n членів прогресії: {res2.sN}</p>
                        <p>Сума безкінечної прогресії: {res2.s}</p>
                    </div>
                </form>
            </div>
            {game()}
            
        </main>


    );
    
    
}
export default Mathe;