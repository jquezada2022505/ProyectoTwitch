import React, { useState } from 'react'
import { useChangePassword } from '../../shared/hooks/useChangePassword.jsx'
import { Input } from '../Input'
import { validatePassword } from '../../shared/validators'

const PasswordSettings = () => {
    const [form, setForm] = useState({
        password: {
            isValid: false,
            value: "",
            showError: false,
        },
        newPassword: {
            isValid: false,
            value: "",
            showError: false,
        }
    })
    const { updatePassword, isLoading } = useChangePassword()

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}
        className='settings-form'
        >
            <Input
                field='password'
                label='Password'
                value={form.password.value}
                onChangeHandler={(e) => {
                    form.password.value = e
                    const isValid = validatePassword(e);
                    form.password.isValid = isValid;
                    setForm({...form})
                }}
                type='password'
                onBlurHandler={() => {
                    form.password.showError = !form.password.isValid;
                    setForm({...form})
                }}
                showErrorMessage={form.password.showError}
                validationMessage="Password Invalida"
            />
            <Input
                field='newPassword'
                label='newPassword'
                value={form.newPassword.value}
                onChangeHandler={(e) => {
                    form.newPassword.value = e
                    const isValid = validatePassword(e);
                    console.log({isValid})
                    form.newPassword.isValid = isValid;
                    setForm({...form})
                }}
                type='password'
                onBlurHandler={() => {
                    form.newPassword.showError = !form.newPassword.isValid;
                    setForm({...form})
                }}
                showErrorMessage={form.newPassword.showError}
                validationMessage={"Password Invalida"}
            />

            <button disabled={isLoading}
            style={{
                marginTop: "1rem"
            }}
             onClick={() => {
                console.log(form, validatePassword(form.newPassword.value), validatePassword(form.password.value))
                if (form.password.isValid && form.newPassword.isValid) updatePassword(form.password.value, form.newPassword.value)
            }}>Guardar</button>
        </div>
    )
}


export default PasswordSettings