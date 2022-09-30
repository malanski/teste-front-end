import { Box, Button, TextField, useFormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';





const FormStyles = styled("section")(({ theme }) => ({
    width: '100%',

    form: {
        width: '426px',

       div:{
        width: '100%',

        div: {
            label: {
                textAlign: 'center',
                // width: 'auto',
                width: '99%',
                borderRadius: '10px 10px 0 0',
                background: '#F4F7FC',
            },
            div: {
                background: '#F4F7FC',
                marginBottom: '11px',
                height: 'auto',

            },
        },
       }
    },



    [theme.breakpoints.down("tablet")]: {
        form: {
            width: '99%',
            marginLeft: 'auto',
            marginRight: 'auto',

            div: {
                margin: 0,
            }
        },

    },



}));
export default function Forms() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const validateForm = (d) => {
        alert(d.seuNome + ' trabalha em ' + d.ondeTrabalha + ". " +  " Email: " + d.seuEmail + " Telefone: " + d.seuTelefone)
    }
    return (
        <FormStyles id="contato" >
            <Box
                component="form"

                sx={{
                    margin: '31px auto 30px auto',
                }}
                onSubmit={handleSubmit(validateForm)}
            >
                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='seuNome'
                        label="Como você gostaria de ser chamado?"
                        {...register('seuNome', { required: true, pattern: /^[A-Za-z]+$/i })}
                    />
                    {errors.seuNome && errors.seuNome.type == 'required' && <p>Por favor diga-nos como devemos lhe chamar.</p>}
                    {errors.seuNome && errors.seuNome.type == 'pattern' && <p>O seu nome deve conter apenas letras.</p>}
                </div>

                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='ondeTrabalha'
                        label="Em qual empresa você trabalha?"
                        {...register('ondeTrabalha', { required: true })}
                    />
                    {errors.ondeTrabalha && errors.ondeTrabalha.type == 'required' && <p>Por favor diga-nos como devemos lhe chamar.</p>}
                </div>

                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='seuEmail'
                        label="Digite aqui o seu email"
                        {...register('seuEmail', { required: true, pattern: /\S+@\S+\.\S+/ })}
                    />
                    {errors.seuEmail && errors.seuEmail.type == 'required' && <p>Por favor digite seu emal.</p>}
                    {errors.seuEmail && errors.seuEmail.type == 'pattern' && <p>Digite um email valido.</p>}

                </div>

                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='seuTelefone'
                        label="Qual o seu telefone?"
                        // type='number'
                        max="9999999999999"
                        min="99999999999"
                        
                        {...register('seuTelefone', { pattern:/[0-9]+/, required: true })}
                    />
                    
                    {errors.seuTelefone && errors.seuTelefone.type == 'pattern' && <p>O número de telefone deve conter apenas números.</p>}
                    {errors.seuTelefone && errors.seuTelefone.type == 'required' && <p>Por favor digite seu número de telefone.</p>}
                                      
                    {errors.seuTelefone && errors.seuTelefone.type == 'minLength' && <p>O seu número de telefone deve ter 11 dígitos.</p>}

                </div>
                <Button
                    sx={{
                        width: '183px',
                        fontSize: '23px',
                        fontWeight: '700',
                    }}
                    variant="contained"
                    type='submit'>
                    Enviar
                </Button>
            </Box>


        </FormStyles>
    )
}