import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import grafismo from '../public/assets/grafismo.png';
import medias from '../public/assets/desktop-and-mobile.png';
import logoDynapredict from '../public/assets/logo-dynapredict.png';

const MainStyle = styled("main")(({ theme }) => ({
    height: "100vh",

    div: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',

        titleLogo: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',

            h2: {
                margin: '144px 0 31px 96px',
                textShadow:'1.4px 0px #FFFFFF',
                color:'#FFFFFF',
                padding: '0',
                fontSize: '80px',
            },

            div: {
                width: '161px',
                height: '31.28px',
                margin: '0 0 0 106px',

            }
        },
        picture:{
            width: 'auto',
            margin: 0,
            alignSelf: 'flex-end',
        },
    },

    [theme.breakpoints.down("laptop")]: {
        div: {
            width:'100%',
            titleLogo: {
                display: 'flex',
                justifyContent: 'center',

                h2: {
                    margin: '10px 0 10px 63px',
                    padding: '0',
                    fontSize: '55px',

                },
                div: {
                    width: '161px',
                    height: '31.28px',
                    margin: '0 0 0 63px',
                },
            },
            picture:{
                width: 'auto',
                margin: 0
            },
        },
    },

    [theme.breakpoints.down("tablet")]: {
        height: "100%",
        div: {
            flexDirection: 'column',
            height: "auto",
            width:'100%',

            titleLogo: {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                h2: {
                    margin: '10px 0 10px 43px',
                    padding: '0',
                    fontSize: '35px',
                },
                div: {
                    width: '161px',
                    height: '31.28px',
                    margin: '0 0 0 43px',
                },
            },
            div:{

            },
        },
    },
}));


export default function Main() {
    return (
        <MainStyle >
            <Box
                height='100vh'
                width='100%'
                sx={{
                    background: `url(${grafismo.src}) center / cover`,
                }}
            >
                <titleLogo>
                    <h2>Solução <br />DynaPredict</h2>
                    <div>
                        <Image
                            src={logoDynapredict}
                            // blurDataURL="data:..." automatically provided
                            placeholder="blur" // Optional blur-up while loading
                        />
                    </div>
                </titleLogo>

                <picture>
                    <Image
                        src={medias}
                        // sx={{
                        //     width: '692.06px',
                        //     height: '627px',
                        // }}
                        // blurDataURL="data:..." automatically provided
                        placeholder="blur" // Optional blur-up while loading
                    />
                </picture>
            </Box>

        </MainStyle>
    )
}