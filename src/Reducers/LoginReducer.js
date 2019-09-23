const defaultLoginState = {
    email : '',
    password : '',
    keepMeLog : '',
    loginType : '',
    isLoggedIn : false
}
const LoginReducer = ( state = defaultLoginState , action) => {
    switch ( action.type ) {
        case 'LOGIN' :
            console.log(action.payload)
            // return {
            //     ...defaultLoginState,
            //     type : 'login'
            // }
        // case 'SIGNUP' :
        //     return {
        //         ...defaultLoginSignUpState,
        //         type : 'signup',
        //         typeofUser : 'user'
        //     }
        // case 'SIGNUP_DOC' :
        //     return {
        //         ...defaultLoginSignUpState,
        //         type : 'signup',
        //         typeofUser : 'doctor'
        //     }
        default :
            return state;
    }
} 


export default LoginReducer;