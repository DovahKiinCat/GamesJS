import Typewriter from 'typewriter-effect'
import Image from 'next/image'

export default function Homepage(){
    return (
        <>
        <section className="h-screen bg-[#1D267D]"> 

            <section className='text-white font-bold text-6xl tracking-wide p-20'>
                <h1>Javascript</h1>
                <h1>Games</h1>
            </section>
            
            <section className='w-[400px] h-[6px] absolute bg-white rounded-full mx-8'>
                <span></span>
            </section>
            
            <section className=''>
                <section className="flex flex-wrap justify-end mt-16 ">
                    <div className="p-4 mx-4 mb-8 bg-opacity-30 backdrop-blur backdrop-filter">
                        <button className="p-4 font-bold text-white text-3xl bg-[#B2A4FF] rounded-2xl shadow-lg">
                            Mega Sena
                        </button>
                    </div>
                    <div className="p-4 mx-4 mb-8 bg-opacity-30 backdrop-blur backdrop-filter">
                        <button className="p-4 font-bold text-white text-3xl bg-[#B2A4FF] rounded-2xl shadow-lg">
                            Par ou ímpar
                        </button>
                    </div>
                    <div className="p-4 mx-4 mb-8 bg-opacity-30 backdrop-blur backdrop-filter">
                        <button className="p-4 font-bold text-white text-3xl bg-[#B2A4FF] rounded-2xl shadow-lg">
                            Pedra Papel Tesoura
                        </button>
                    </div>
                </section>
            </section>
            
        </section>
        </>
    )
}