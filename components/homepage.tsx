import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import React from 'react'

export default function Homepage() {
    return (
        <>
            <section className="h-screen bg-[#FEA1A1]">

                <section className='p-4 flex h-screen justify-center'>
                    <section className='bg-white/30 backdrop-blur-sm fixed flex w-[80%] h-16 items-center rounded-full'>
                        <section className='fixed flex flex-col justify-center w-full'>
                            <section className='px-6 font-bold'>
                                <Typewriter
                                    options={{
                                        strings: ['Clique para Jogar!'],
                                        autoStart: true,
                                        loop: true,
                                        
                                    }}
                                />
                            </section>
                            
                            <section className='flex justify-center items-center gap-16 w-full absolute'>
                                <section className='absolute' />

                                    <button className='font-bold text-black w-[240px] h-[40px] rounded-full'>
                                        <Link activeClass="active" to="jogoum" spy={true} smooth={true} offset={0} duration={500}>Mega Sena</Link>
                                    </button>

                                    <button className='font-bold text-black w-[240px] h-[40px] rounded-full'>
                                        <Link activeClass="active" to="jogodois" spy={true} smooth={true} offset={0} duration={500}>Par ou Ímpar?</Link>
                                    </button>

                                    <button className='font-bold text-black w-[240px] h-[40px] rounded-full'>
                                        <Link activeClass="active" to="jogotres" spy={true} smooth={true} offset={0} duration={500}>Pedra Papel Tesoura</Link>
                                    </button>
                                
                            </section>
                        </section>
                    </section>
                </section>


            </section>
        </>
    )
}