
import { styled } from '@mui/material/styles';

const NavStyles = styled("nav")(({ theme }) => ({
    position: 'absolute',
    right: '43px',
    top: '68px',

    ul: {
        display: 'flex',
        justifyContent: 'space-Between',
        fontSize: '20px',
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
        right: '43px',
        top: '98px',
        ul: {
            width: '100%',
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
                            title='Solução DynaPredict'>
                            DynaPredict
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            title='Sensores para Manutenção Preditiva'>
                            Sensores
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            title='Conheça como tornamos a alta tecnologia acessível e fácil de usar!'>
                            Contato
                        </a>
                    </li>
                </ul>
        </NavStyles>
    )
}