import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import FormLogin from '../componentes/FormLogin'
import FormRegister from '../componentes/FormRegister'
import Navbar from '../componentes/Nav'
const Login = () => {
    const [form, setForm] = useState(true);

    return (
        <>

            {form ? <FormLogin />

                : <FormRegister />
            }

            <Button variant="primary" onClick={() => setForm(!form)}>
                {form ? "Registrar"
                    : "Login"
                }
            </Button>
        </>
    )
}

export default Login