import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Homepage, JogoUm, JogoDois, JogoTres } from "components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vansan Games</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Homepage/>
      <JogoUm/>
      <JogoDois/>
      <JogoTres/>
    
    </>
  );
};

export default Home;