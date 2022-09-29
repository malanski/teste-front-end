
import Image from 'next/image';
import logo from '../public/assets/logo-dynamox.png'

import { styled } from '@mui/material/styles';

const HeaderStyles = styled("header")(({ theme }) => ({

    backgroundColor: '#263252',
    height: '120px',
    width: '100vw',
    paddingTop: '30.23px',
    paddingLeft: '77px',

    display: 'flex',
    justifyContent: 'space-Between',
    alignItems: 'center',
    img: {
        backgroundColor: 'red'
    },

    [theme.breakpoints.down("tablet")]: {
        paddingTop: '15.120px',
        paddingLeft: '38.4px',
    },

    [theme.breakpoints.down("laptop")]: {
        backgroundColor: '#263252',
        height: '180px',
        paddingTop: '10px',
        paddingLeft: '10px',
    },

}));

export default function Header() {
    return (
        <HeaderStyles>
            <Image
                src={logo} width='172.86px'
                height='65.15px'
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
            />

            <div>
                <a href="#" alt="" title=''>DynaPredict</a>
                <a href="#" alt="" title=''>Sensores</a>
                <a href="#" alt="" title=''>Contato</a>
            </div>
        </HeaderStyles>
    )
}