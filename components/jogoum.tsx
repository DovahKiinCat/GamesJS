import { SetStateAction, useState } from 'react';

function SorteioMegaSena() {
    const [numerosSorteados, setNumerosSorteados] = useState<number[]>([]);

    const realizarSorteio = () => {
        const numeros: SetStateAction<number[]> = [];
        while (numeros.length < 6) {
            const numero = getRandomNumber(1, 60);
            if (!numeros.includes(numero)) {
                numeros.push(numero);
            }
        }
        setNumerosSorteados(numeros);
    };

    const formatNumber = (number: number) => {
        return number.toString().padStart(2, '0');
    };

    const numerosFormatados = numerosSorteados.map(formatNumber);
    const resultado = numerosFormatados.join(' - ');

    return (
        <section className='h-screen w-full bg-[#FFB4B4]'>

            <section className='flex flex-col justify-center items-center h-screen'>
                <button className='bg-white rounded w-[100px] h-[40px]' onClick={realizarSorteio}>Sortear</button>
                <p className='font-bold text-3xl'>{resultado}</p>
            </section>

        </section>
    );
}

export default SorteioMegaSena;

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}