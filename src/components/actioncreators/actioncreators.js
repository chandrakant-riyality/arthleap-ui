import axios from "axios";

const loginAPI = async ( mobile, pancode ) => {
    try {
        const response = await axios.post( "https://arthaleap.arthavedh.com/authn/auth", {
            mobile: mobile,
            pan: pancode
        } );

        return response.data;
    } catch ( error ) {
        throw error;
    }
};

const verifyOtpAPI = async ( otp ) => {
    try {
        const response = await axios.post( "https://arthaleap.arthavedh.com/authn/val", {
            otp: otp
        } );

        return response.data;
    } catch ( error ) {
        throw error;
    }
};

const userDashboardAPI = () => {
    return fetch( 'https://arthaleap.arthavedh.com/user/dashboard', {
        method: "get",
    } )
        .then( res => res.json() )
        .then( res => {
            return res.content;
        } );
}


const createLoanApplication = () => {
    return fetch( 'https://arthaleap.arthavedh.com/personal-loan/create-loan-application', {
        method: "get",
    } )
        .then( res => res.json() )
        .then( res => {
            console.log( res );
            return res.content;
        } );
}

const getPersonalDetails = ( ap_id, loan_app_id ) => {
    let headers = {
        "x-apid": ap_id,
        "x-loanappid": loan_app_id
    }
    return fetch( 'http://localhost:9696/user/loan/personal/details', {
        method: "get",
        headers: headers
    } )
        .then( res => res.json() )
        .then( res => {
            console.log( res.content );
            return res.content;
        } );
}


export { loginAPI, verifyOtpAPI, userDashboardAPI, createLoanApplication, getPersonalDetails };