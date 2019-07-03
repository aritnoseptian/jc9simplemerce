import axios from 'axios'
import cookies from 'universal-cookie'

const cookie = new cookies()

export const onLoginUser = (user, pass) => {
    return (dispatch) => { 
        axios.get(
            'http://localhost:2019/users',
            {
                params: {
                    username: user,
                    password: pass
                }
            }
        ).then(res => {
            
            if(res.data.length > 0){
                const {id, username} = res.data[0]

                
                dispatch(
                    {
                        type: "LOGIN_SUCCESS",
                        payload: {id,username}
                    }
                )

                
                cookie.set('userName', {id, username}, {path: '/'})
            } else {
                console.log('Username / Password incorrect')
            }
        })
    }

}

export const keepLogin = (objUser) => {
    
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            id: objUser.id,
            username: objUser.username
        }
    }
}

export const onLogoutUser = () => {
    cookie.remove('userName')
    return {
        type: 'LOGOUT_SUCCESS'
    }
}