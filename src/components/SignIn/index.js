import React from 'react';
import { 
    Container,
    Icon,
    FormContent,
    Form,
    FormWrap, 
    FormH1, 
    FormLabel, 
    FormInput, 
    FormButton, 
    Text  } from './SignInElements';
const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">AltCoin</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1> Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel hrmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>   
                        </Form>
                    </FormContent>
            </FormWrap>
        </Container>       
        </>
    )
}

export default SignIn
