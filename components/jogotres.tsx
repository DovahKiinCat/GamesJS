import { useState } from 'react';
import Image from 'next/image';

const options = ['pedra', 'papel', 'tesoura'];

const Jogo = () => {
    const [userChoice, setUserChoice] = useState('');
    const [systemChoice, setSystemChoice] = useState<string | undefined>(undefined);
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


            <section className='flex flex-col h-screen justify-center items-center font-bold'>
                <h1 className='font-bold text-3xl p-4'>Pedra Papel Tesoura</h1>

                <section className='bg-black w-[300px] h-[5px] rounded-full'></section>

                <section className='p-4 text-center text-2xl'>
                    <p>Escolha uma opção:</p>
                    {options.map((option) => (
                        <button key={option} onClick={() => handleUserChoice(option)}>
                            <Image src={`/images/${option}.png`} alt={option} width="50" height="50"/>
                        </button>
                    ))}
                </section>
                
                {userChoice && systemChoice && (
                    <section className='text-center text-2xl'>
                        <p>Você escolheu</p>
                        <Image className='mx-auto' src={`/images/${userChoice}.png`} alt={userChoice} width="50" height="50"/>
                        <p>O sistema escolheu</p>
                        <Image className='mx-auto' src={`/images/${systemChoice}.png`} alt={systemChoice} width="50" height="50"/>
                        <p className='text-3xl'>{result}</p>
                    </section>
                )}
            </section>
        </section>
    );
};

export default Jogo;