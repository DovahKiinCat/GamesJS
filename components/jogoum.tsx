import React, { useState } from 'react';

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SorteioMegaSena() {
    const [numerosSorteados, setNumerosSorteados] = useState<number[]>([]);

    const realizarSorteio = () => {
        const numeros: React.SetStateAction<number[]> = [];
        while (numeros.length < 6) {
            const numero = getRandomNumber(1, 60);
            if (!numeros.includes(numero)) {
                numeros.push(numero);
            }
        }
        setNumerosSorteados(numeros);
    };

    const formatNumber = (number: number) => number.toString().padStart(2, '0');

    const resultado = numerosSorteados.map((numero) => {
        const formattedNumber = formatNumber(numero);
        return (
            <span
                key={numero}
                className={`rounded-full text-white text-2xl p-2 bg-orange-400`}
            >
                {formattedNumber}
            </span>
        );
    });

    return (
        <section className='h-screen w-full bg-[#FFB4B4]' id='jogoum'>


            <section className='flex flex-col justify-center items-center h-screen'>
                <h1 className='font-bold text-3xl p-4'>Sorteio Mega-Sena!</h1>

                <section className='bg-black w-[280px] h-[5px] rounded-full'>
                    <span></span>
                </section>

                <section className='p-4 flex flex-col items-center'>
                    <button className='bg-black text-white rounded w-[170px] h-[40px] font-bold ' onClick={realizarSorteio}>Clique Para Sortear!</button>
                    <p className='font-bold text-3xl p-4 space-x-4'>{resultado}</p>
                </section>
            </section>
        </section>
    );
}

export default SorteioMegaSena;
