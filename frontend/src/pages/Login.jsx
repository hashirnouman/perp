import React, { useState } from 'react'
import { Input, FormControl, Center, Button, Stack } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
        setRedirect(true)
        if (redirect) {
            return (
                history.push('/dashboard')
            )

        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <Center mt={9} p={5} >
                <Stack direction="column">
                    <FormControl>
                        <Input type="text" placeholder='Enter email' mb={3} value={email} onChange={(e) => setEmail(e.target.value)} isRequired />
                        <Input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} isRequired />
                    </FormControl>
                    <Button type='submit'>login</Button>
                </Stack>

            </Center>
        </form>
    )
}

export default Login