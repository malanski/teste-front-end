
import Image from 'next/image';
import logo from '../public/assets/logo-dynamox.png'

import { styled } from '@mui/material/styles';
import Nav from './Nav'

const HeaderStyles = styled("header")(({ theme }) => ({

    backgroundColor: '#263252',
    height: '120px',
    width: '100vw',
    paddingTop: '30.23px',
    paddingLeft: '77px',


    [theme.breakpoints.down("laptop")]: {
        height: '150px',
        paddingTop: '15.120px',
        paddingLeft: '38.4px',

    },

    [theme.breakpoints.down("tablet")]: {
        paddingTop: '10px',
        paddingLeft: '10px',
  
    },



}));

export default function Header() {
    return (
        <HeaderStyles>
            <a 
                href="https://dynamox.net/"
                title='Soluções de sensoriamento e análise de dados'target="_blank">
                <Image
                    src={logo} width='172.86px'
                    height='65.15px'
                    // blurDataURL="data:..." automatically provided
                    placeholder="blur" // Optional blur-up while loading
                />
            </a>

            <Nav />

        </HeaderStyles>
    )
}