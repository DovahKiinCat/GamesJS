import { useState } from 'react';

const ParOuImpar = () => {
    const [userChoice, setUserChoice] = useState('');
    const [userNumber, setUserNumber] = useState('');
    const [result, setResult] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const systemNumber = Math.floor(Math.random() * 11);

        const isUserChoiceEven = userChoice === 'P';
        const isSystemChoiceEven = systemNumber % 2 === 0;

        const parsedUserNumber = parseInt(userNumber);

        const isSumEven = (parsedUserNumber + systemNumber) % 2 === 0;

        const userWins = (isSumEven && isUserChoiceEven) || (!isSumEven && !isUserChoiceEven);
        const systemWins = !userWins;

        if (userWins) {
            setResult(`Você venceu! A soma é ${parsedUserNumber + systemNumber}`);
        } else if (systemWins) {
            setResult(`O sistema venceu! A soma é ${parsedUserNumber + systemNumber}`);
        } else {
            setResult('Empate!');
        }
    };

    return (
        <section className='h-screen w-full bg-[#FFDEB4]'>
            <section className='flex flex-col justify-center align-center items-center h-screen'>
                <h1 className='font-bold text-3xl p-4'>Jogo de Par ou Ímpar</h1>
                <section className='bg-black w-[300px] h-[5px] rounded-full'>
                    <span className='p-4'></span>
                </section>
                <section className='font-bold'>
                    <form onSubmit={handleFormSubmit}>
                        <label className='flex flex-col text-center py-4 text-2xl'>
                            Escolha Par (P) ou Ímpar (I)
                            <select
                                className='rounded-2xl p-2'
                                value={userChoice}
                                onChange={(e) => setUserChoice(e.target.value)}
                            >
                                <option value="">Selecione</option>
                                <option value="P">Par</option>
                                <option value="I">Ímpar</option>
                            </select>
                        </label>
                        <br />
                        <label className='flex flex-col text-center text-2xl'>
                            Digite um número
                            <input
                                className='rounded-2xl p-2'
                                type="number"
                                value={userNumber}
                                onChange={(e) => setUserNumber(e.target.value)}
                            />
                        </label>
                        <section className='p-4 text-center'>
                            <button className='bg-black text-white rounded w-[300px] h-[40px]' type="submit">Jogar</button>
                        </section>
                    </form>
                </section>
                <p className='font-bold text-3xl'>{result}</p>
            </section>
        </section>
    );
};

export default ParOuImpar;