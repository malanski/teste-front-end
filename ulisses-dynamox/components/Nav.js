
import { styled } from '@mui/material/styles';

const NavStyles = styled("nav")(({ theme }) => ({
    position: 'absolute',
    right: '43px',
    top: '68px',

    ul: {
        display: 'flex',
        justifyContent: 'space-Between',
        fontSize: '20px',
        fontWeighr: '500',
        gap: '37px',
        lineHeight: '23px',
        listStyleType: 'none',
        margin: '0',
        padding: '0',
    },

    li:{
        transition: "all ease-in-out 0.6s",
        borderBottom: '10px solid transparent',
        borderRadius: '10px',
        '&:hover':{
            transition: "all ease-in-out 0.6s",
            borderColor: '#ffff',
        },  
        
    },  

    [theme.breakpoints.down("laptop")]: {
    },


    [theme.breakpoints.down("tablet")]: {
        right: '28px',
        top: '120px',
        ul: {
            width: '100%',
            gap: '25px',
        }
    },

}));

export default function Nav() {
    return (
        <NavStyles>
                <ul>
                    <li>
                        <a
                            href="https://dynamox.net/dynapredict/"
                            target="_blank"
                            title='Solução DynaPredict'>
                            DynaPredict
                        </a>
                    </li>
                    <li>
                        <a
                            href="#sensores"
                            title='Sensores para Manutenção Preditiva'>
                            Sensores
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contato"
                            title='Conheça como tornamos a alta tecnologia acessível e fácil de usar!'>
                            Contato
                        </a>
                    </li>
                </ul>
        </NavStyles>
    )
}