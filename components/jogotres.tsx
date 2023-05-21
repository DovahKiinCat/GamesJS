import { useState } from 'react';

const options = ['pedra', 'papel', 'tesoura'];

const Jogo = () => {
    const [userChoice, setUserChoice] = useState('');
    const [systemChoice, setSystemChoice] = useState('');
    const [result, setResult] = useState('');

    const handleUserChoice = (choice: string) => {
        setUserChoice(choice);

        const randomIndex = Math.floor(Math.random() * options.length);
        const systemChoice = options[randomIndex];
        setSystemChoice(systemChoice);

        if (choice === systemChoice) {
            setResult('Empate!');
        } else if (
            (choice === 'pedra' && systemChoice === 'tesoura') ||
            (choice === 'papel' && systemChoice === 'pedra') ||
            (choice === 'tesoura' && systemChoice === 'papel')
        ) {
            setResult('Você venceu!');
        } else {
            setResult('O sistema venceu!');
        }
    };

    return (
        <section className='h-screen w-full bg-[#FDF7C3]'>
            <h1>Jogo do Papel, Pedra e Tesoura</h1>
            <section>
                <p>Escolha uma opção:</p>
                {options.map((option) => (
                    <button key={option} onClick={() => handleUserChoice(option)}>
                        <img src={`/${option}.png`} alt={option} />
                    </button>
                ))}
            </section>
            {userChoice && systemChoice && (
                <section>
                    <p>Você escolheu:</p>
                    <img src={`/${userChoice}.png`} alt={userChoice} />
                    <p>O sistema escolheu:</p>
                    <img src={`/${systemChoice}.png`} alt={systemChoice} />
                    <p>{result}</p>
                </section>
            )}
        </section>
    );
};

export default Jogo;