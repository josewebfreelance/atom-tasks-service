import { UserLogin } from '../interfaces/User'
import axios from 'axios'
import { handleHttpSuccess } from '../util/handleHttp'

const find = async (values: UserLogin): Promise<any> => {
    try {
        const response = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.API_KEY}`,
            {
                email: values.email,
                password: values.password,
                returnSecureToken: true
            }
        )

        return handleHttpSuccess({
            idToken: response.data.idToken,
            refreshToken: response.data.refreshToken,
            expiresIn: response.data.expiresIn,
            localId: response.data.localId,
            user: response.data
        })
    } catch (e: any) {
        console.log(e)
    }

}

export { find }
