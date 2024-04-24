import { useState } from 'react'
import toast from 'react-hot-toast'
import { changePassword } from '../../services'

export const useChangePassword = () => {
    const [isLoading, setIsLoading] = useState(false)

    const updatePassword = async (password, newPassword) => {
        setIsLoading(true)

        console.log({ password, newPassword })
        const response = await changePassword({
            password,
            newPassword
        })

        setIsLoading(false)
        console.log(response)
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al iniciar sesion'
            )
        }

        toast.success("Acción realizada correctamente")

    }
    return {
        updatePassword,
        isLoading
    }
}