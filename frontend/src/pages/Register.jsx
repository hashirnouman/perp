import React, { useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { Center, Stack, Input, FormControl, Button } from '@chakra-ui/react'
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    let history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        setRedirect(true)
        if (redirect) {
            history.push('/login')

        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Center mt={9} p={5} >
                    <Stack direction="column">
                        <FormControl>
                            <Input type="text" placeholder='Enter name' mb={3} value={name} onChange={(e) => setName(e.target.value)} isRequired />
                            <Input type="email" placeholder='Enter email' mb={3} value={email} onChange={(e) => setEmail(e.target.value)} isRequired />
                            <Input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} isRequired />
                        </FormControl>
                        <Button type='submit'>Register</Button>
                    </Stack>

                </Center>
            </form>

        </div>
    )
}

export default Register