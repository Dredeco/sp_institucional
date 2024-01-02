'use client'

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

import ThumbImage from '../../../public/images/thumb.png'

import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi'

const PostsContainer = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
`

const PostContent = styled.div`
    max-width: 720px;
    margin: 5rem auto;

    a {
        display: block;

        & + a {
            margin-top: 2rem;
            padding-top: 2rem;
        }

        time {
            font-size: 1rem;
            display: flex;
            align-items: center;
            color: var(--gray-200);
        }

        img {
            max-width: 100%;
            max-height: 410px;
            border: 2px solid var(--blue-900);
            border-radius: 6px;
            border-image: linear-gradient(95deg, #31b4d0, transparent);
        }

        strong {
            display: block;
            font-size: 1.5rem;
            margin-top: 1rem;
            line-height: 2rem;
            color: var(--white);
            transition: all .4s;
        };

        p {
            color: var(--white);
            margin-top: .5rem;
            line-height: 1.62rem;
        }

        &:hover {
            strong {
                color: var(--blue-900);
            }
        }
    }
`

const ButtonNavigate = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    div{
        display: flex;
        flex-direction: row;

        button {
            background-color: var(--blue-900);
            margin: 0 5px;
            border: 0;
            color: var(--white);
            display: flex;
            padding: .5rem;
            border-radius: 5px;

            svg {
                padding: 0 3px;
            }
        }
    }

`

export default function Posts() {
    return(
        <>
        <Head>
            <title>Blog | Sujeito Programador</title>
        </Head>
        
        <PostsContainer>
            <PostContent>
                <Link href='/'>
                    <Image
                        src={ThumbImage}
                        alt="Post titulo 1"
                        width={720}
                        height={410}
                        quality={100}
                    />
                    <strong>Criando o meu primeiro aplicativo</strong>
                    <time>14 OUT 2023</time>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam ab aliquam magni ea eveniet at sint dolorum, obcaecati quasi dolores sapiente iure iste quidem illum. Nobis exercitationem animi voluptatibus.</p>
                </Link>

                <Link href='/'>
                    <Image
                        src={ThumbImage}
                        alt="Post titulo 1"
                        width={720}
                        height={410}
                        quality={100}
                    />
                    <strong>Criando o meu primeiro aplicativo</strong>
                    <time>14 OUT 2023</time>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam ab aliquam magni ea eveniet at sint dolorum, obcaecati quasi dolores sapiente iure iste quidem illum. Nobis exercitationem animi voluptatibus.</p>
                </Link>

                <ButtonNavigate>
                    <div>
                        <button>
                            <FiChevronsLeft size={25} color='#fff' />
                        </button>
                        <button>
                            <FiChevronLeft size={25} color='#fff' />
                        </button>
                    </div>

                    <div>
                        <button>
                            <FiChevronRight size={25} color='#fff' />
                        </button>
                        <button>
                            <FiChevronsRight size={25} color='#fff' />
                        </button>
                    </div>
                </ButtonNavigate>

                

            </PostContent>
        </PostsContainer>
        </>
    )
}