const loginPayload = ( response ) => {
    return {
        type: 'LOGIN_PAYLOAD',
        payload: response
    }
}

const login = ( response ) => {
    return {
        type: 'LOGIN_RESPONSE',
        payload: response
    }
}

const verifyOtp = ( response ) => {
    return {
        type: 'OTP_VERIFY_RESPONSE',
        payload: response
    }
}

const createLoanApplication = ( response ) => {
    return {
        type: 'CREATE_LOAN_APPLICATION',
        payload: response
    }
}

const getPersonalDetails = ( response ) => {
    return {
        type: 'PERSONAL_DETAILS_PL',
        payload: response
    }
}

export { loginPayload, login, verifyOtp, createLoanApplication, getPersonalDetails };