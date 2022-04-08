const jwt = require('jsonwebtoken');
const secretKey = 'CafeChocolatePadanOsoGato2323..cocoa';

const validateToken = async (token) =>{
    
    try {
        const checktoken = await jwt.verify(token, secretKey)
        const acceso = {userID: checktoken.ID, acceso: true}
        return acceso
    } catch (error) {
        const acceso = {acceso: false}
        return acceso
    }
   
    
}

module.exports = validateToken