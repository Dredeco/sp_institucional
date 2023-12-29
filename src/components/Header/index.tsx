'use client'

import Image from "next/image";
import styled from "styled-components";
import LogoImg from "../../../public/images/logo.svg"
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";

const HeaderContainer = styled.header`
    height: 6rem;
    border-bottom: 1px solid var(--gray-200);
    background: var(--gray-700);

    @media (max-width: 870px){
        height: 11rem;
        padding: 0.5rem 0;
    }
`

const HeaderContent = styled.div`
    max-width: 1120px;
    height: 6rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;

    img{
        cursor: pointer;
    }

    @media (max-width: 870px){
        display: flex;
        flex-direction: column;
    }
`

const HeaderNav = styled.nav`
    height: 6rem;
    width: 100%;
    text-align: center;

    span{
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        height: 6rem;
        line-height: 6rem;
        color: var(--gray-100);
        transition: color 0.2s;

        & + span {
            margin-left: 2rem;
        }

        &:hover{
            color: var(--white);
        }

        &.active{
            color: var(--yellow-500);
            font-weight: bold;
        }
    }

    @media (max-width: 870px){
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`

const HeaderReadyButton = styled.a`
    height: 3rem;
    border-radius: 3rem;
    background: var(--blue-900);
    border:0;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-weight: bold;
    transition: filter 0.2s;

    &:hover{
        filter: brightness(1.1)
    }

    @media (max-width: 870px){
        display: none;
    }
`
const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Link href="/">
                    <Image 
                        src={LogoImg}
                        alt="Sujeito Programador Logo"
                    />
                </Link>

                <HeaderNav>
                    <ActiveLink href="/" activeClassName='active'>
                        <span>Home</span>
                    </ActiveLink>
                    <ActiveLink href="/posts" activeClassName='active'>
                        <span>Conteúdos</span>
                    </ActiveLink>
                    <ActiveLink href="/sobre" activeClassName='active'>
                        <span>Quem somos?</span>
                    </ActiveLink>
                </HeaderNav>

                <HeaderReadyButton type="button" href="/">
                    Começar
                </HeaderReadyButton>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header