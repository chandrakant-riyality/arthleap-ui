const initialState = {
    loginPayload: {},
    loginResponse: {},
    createLoanApp: {},
    personalDetails: {},
    otpVerificationResponse: {}
}

const loanReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case "LOGIN_PAYLOAD":
            return {
                ...state,
                loginPayload: action.payload
            }
        case "OTP_VERIFY_RESPONSE":
            return {
                ...state,
                otpVerificationResponse: action.payload
            }

        case "LOGIN_RESPONSE":
            return {
                ...state,
                loginResponse: action.payload
            }
        case "CREATE_LOAN_APPLICATION":
            return {
                ...state,
                createLoanApp: action.payload
            }
        case "PERSONAL_DETAILS_PL":
            return {
                ...state,
                personalDetails: action.payload
            }

        default:
            return state;
    }

}

export default loanReducer;