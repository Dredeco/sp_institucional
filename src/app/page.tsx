'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import HeroImage from '../../public/images/banner-conteudos.png'
import SectionImage from '../../public/images/financasApp.png'
import SectionImage2 from '../../public/images/webDev.png'

const HomeContainer = styled.main`
  display: block;
  width: 100%;

  hr{
    width: 100%;
    bottom: 0;
    height: 1px;
    border-color: var(--gray-200) ;
  }
`

const HomeContent = styled.div`
  max-height: calc(100vh - 6rem);
  margin: 0 auto;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    position: relative;
    max-height: inherit;
    max-width: 640px;
    object-fit: contain;
  }
`

const HomeContentHero = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  h1 {
    font-size: 3.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    color: var(--white);
  }

  span {
    margin-top: .5rem;
    font-size: 1rem;
    line-height: 2.25rem;
    color: var(--white);
  }

  a {
    width: fit-content;
    background-color: var(--blue-900);
    border: 0;
    padding: 1rem 1.8rem;
    margin-top: 2.5rem;
    border-radius: 7px;
    color: var(--white);
    font-weight: bold;
    text-align: center;
    transition: filter .4s;

    &:hover{
        filter: brightness(1.1)
    }
  }
`

const SectionContent = styled.div`
  margin: 5.5rem auto;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    max-width: 600px;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;

    h2 {
    font-size: 2.2rem;
    line-height: 3.5rem;
    font-weight: 900;
    color: var(--white);
    }

    span {
      margin-top: 1rem;
      position: relative;
      font-size: 1rem;
      line-height: 2.25rem;
      color: var(--white);
    }
  }

  img {
    position: relative;
    max-height: inherit;
    max-width: 550px;
    object-fit: contain;
  }
`



export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>

      <HomeContainer>
        <HomeContent>
          <HomeContentHero>
            <h1>Levando você ao próximo nível</h1>
            <span>Uma plataforma com cursos que vão do zero até o profissional na prática, direto ao ponto e aplicando o que usamos no mercado de trabalho. 👊</span>
            <Link href='/posts'>
              COMEÇAR AGORA!
            </Link>
          </HomeContentHero>

          <Image
            src={HeroImage}
            alt='Conteúdos Sujeito Programador'
          />
        </HomeContent>

        <hr />

        <SectionContent>
          <section>
            <h2>Aprenda a criar aplicativos para Android e iOS</h2>
            <span>Você vai descobrir o jeito mais moderno de desenvolver apps nativos para iOS e Android, construindo aplicativos do zero.</span>
          </section>

          <Image 
            src={SectionImage}
            alt='Conteúdo Mobile - Desenvolvimento de apps'
          />
        </SectionContent>

        <hr />

        <SectionContent>
          <Image 
            src={SectionImage2}
            alt='Conteúdo Web - Desenvolvimento de aplicações web'
          />

          <section>
            <h2>Aprenda a criar sistemas web</h2>
            <span>Crie sistemas web e sites usando as tecnologias mais modernas e requisistadas pelo mercado.</span>
          </section>

        </SectionContent>

      </HomeContainer>
    </>
  )
}
