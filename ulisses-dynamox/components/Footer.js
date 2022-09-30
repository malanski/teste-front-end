import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Forms from './Forms'


const callAllert = () => {
    alert(`Como você gostaria de ser chamado?\n${seuNome}\nEm qual empresa você trabalha?\n${ondeTrabalha}\nDigite aqui o seu email.\n${seuEmail}\nQual o seu telefone?\n${seuTelefone}`)
}


const FooterStyles = styled("footer")(({ theme }) => ({

    backgroundColor: '#263252',
    height: 'auto',
    width: '100vw',
    paddingTop: '41px',
    paddingBottom: '41px',
    textAlign: 'center',



    h4: {
        margin: '0',
        fontSize: '30px',
        fontWeight: '700',
        lineHeight: '35.22px',
    },

    // div: {
    //     width: '426px',
    //     div: {

    //         label: {
    //             textAlign: 'center',
    //             // width: 'auto',
    //             width: '99%',
    //             borderRadius: '10px 10px 0 0',
    //             background: '#F4F7FC',
    //         },
    //         div: {
    //             background: '#F4F7FC',
    //             marginBottom: '11px',
    //             height: 'auto',
    //             input: {

    //             },
    //         },
    //     },
    // },

    [theme.breakpoints.down("laptop")]: {
        h4: {
            fontSize: '25px',
            lineHeight: '30px',
        },

    },

    [theme.breakpoints.down("tablet")]: {
        h4: {
            fontSize: '23px',
            lineHeight: '28px',
        },

        div: {
            width: '99%',
            marginLeft: 'auto',
            marginRight: 'auto',

            div: {
                margin: 0,
            }
        },

    },



}));
export default function Footer() {
    return (
        <FooterStyles id="contato">
            <h4>Ficou com dúvida?</h4>
            <h4>Nós entramos em contato com você</h4>

            <Forms />
{/* 
            <Box
                sx={{
                    margin: '31px auto 30px auto',
                }}
            >
                <TextField
                    onChange={(event) => seuNome = event.target.value}
                    variant="outlined"
                    required
                    label="Como você gostaria de ser chamado?" />

                <TextField
                    onChange={(event) => ondeTrabalha = event.target.value}
                    required
                    label="Em qual empresa você trabalha?" />

                <TextField
                    onChange={(event) => seuEmail = event.target.value}
                    variant="outlined"
                    required
                    label="Digite aqui o seu email" />

                <TextField
                    onChange={(event) => seuTelefone = event.target.value}
                    variant="outlined"
                    required
                    label="Qual o seu telefone?" />
            </Box> */}

{/* 
            <Button
                sx={{
                    width: '183px',
                    fontSize: '23px',
                    fontWeight: '700',
                }}
                onClick={callAllert}
                variant="contained"
                href="#outlined-buttons">
                Enviar
            </Button> */}
        </FooterStyles>
    )
}