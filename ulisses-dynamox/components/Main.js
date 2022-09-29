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
        
                padding: '0',
                fontSize: '80px',
            },
            
            div: {
                width: '161px',
                height: '31.28px',
                margin: '0 0 0 106px',

            }
        },
    },
    


    [theme.breakpoints.down("tablet")]: {

    },


}));


export default function Main() {

    return (
        <MainStyle>
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

                <Image
                    src={medias}
                    sx={{
                        width: '692.06px',
                        height: '627px',
                    }}
                    // blurDataURL="data:..." automatically provided
                    placeholder="blur" // Optional blur-up while loading
                />
            </Box>

        </MainStyle>
    )
}