import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import tca from '../public/assets/sensor-tca.png';
import as from '../public/assets/sensor-af.png';
import hf from '../public/assets/sensor-hf.png';


const SensoresStyle = styled("div")(({ theme }) => ({
    height: "auto",
    paddingTop: '95px',
    paddingBottom: '39.41px',
    backgroundColor: '#F4F7FC',

    section: {
        height: "100%",

        div: {
            margin: '0',

            h3: {
                color: '#37383D',
                margin: '0',
                fontSize: '40px',
                fontWeight: 'bolder',
                textShadow:'1.4px 0px #37383D',
                lineHeight: '47px',
                // height: '54px',
            },
            div: {
                // height: '158px',
                margin: '10px',
                p: {
                    fontSize: '24px',
                    lineHeight: '28px',
                    color: '#454545',
                    margin: '9px',
                },
            },
            a: {
                textTransform: 'uppercase',
                marginTop: '27px',
                backgroundColor: '#263252',
                height: '39px',
                width: '183px',
                fontSize: '20px',
            }
        },

        picture:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            margin: 'auto',
            div:{
                width: '33%',

                span:{
                    color: '#5D7A8C',
                    fontSize: '40px',
                    marginTop: '13.46px',
                    lineHeight: '46.96px',
                    textShadow:'1.4px 0px #5D7A8C',
                    letterSpacing:'0',
                    fontWeight: '700',

                },
            },
        },
    },



    [theme.breakpoints.down("tablet")]: {
        section: {
            div: {
                margin: '0',
                h3: {
                    fontSize: '30px',
                    textShadow:'1.4px 0px #37383D',
                    lineHeight: '37px',
                    // height: '54px',
                },
                div: {
                    p: {
                        fontSize: '19px',
                    },
                },
                a: {
                    fontSize: '19px',
                }
            },
            picture:{
                flexDirection: 'column',
                div:{
                    width: '80%',
                    marginTop:'30px',
                    marginBottom:'30px',
                    // borderBottom: '1px solid #37383D',
                    borderRadius: '20px',
                    boxShadow: '0 4px 0.8px 0 #263252',
                    span:{
                        fontSize: '30px',
                    },
                },
            },
        },
    
    },


}));


export default function Sensores() {

    return (
        <SensoresStyle id='sensores'>
            <Box component="section"
                height='100vh'
                width='100%'
                textAlign='center'
            >
                <div>
                    <h3>Sensores para Manutenção Preditiva</h3>
                    <div>
                        <p>
                            Opções de sensores sem fio, ou DynaLoggers com sensores de vibração triaxial e
                        </p>
                        <p>
                            temperatura embarcados, que comunicam por Bluetooth com App mobile ou Gateway,
                        </p>
                        <p>
                            registrando os dados monitorados em sua maioria interna. Por conexão internet esses dados
                        </p>
                        <p>
                            são centralizados na Plataforma DynaPredict Web para análise, prognóstico e tomada de decisão.
                        </p>
                    </div>
                    <Button variant="contained" href="#outlined-buttons">
                        ver mais
                    </Button>
                </div>

                <picture>
                    <div>
                        <Image
                            src={tca}
                            sx={{
                                
                            }}
                            // blurDataURL="data:..." automatically provided
                            placeholder="blur" // Optional blur-up while loading
                        />
                        <span>TcA+</span>
                    </div>
                    <div>
                        <Image
                            src={as}
                            sx={{
                                
                            }}
                            // blurDataURL="data:..." automatically provided
                            placeholder="blur" // Optional blur-up while loading
                        />
                        <span>AS</span>
                    </div>
                    <div>
                        <Image
                            src={hf}
                            sx={{
                                
                            }}
                            // blurDataURL="data:..." automatically provided
                            placeholder="blur" // Optional blur-up while loading
                        />
                        <span>HF</span>
                    </div>
                </picture>
            </Box>

        </SensoresStyle>
    )
}