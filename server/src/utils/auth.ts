import dotenv from "dotenv"  
import jwt from "jsonwebtoken"
import  { User, ROLE }  from "@prisma/client"

export const createJWT = (user: User ) => {     
    try {
        const secret = process.env.TOKEN_SECRET;  

        if(!secret) {
            throw new Error("no secret provided"); 
        }  
        const token = jwt.sign({id: user.id, Tole: user.role }, secret, {expiresIn: '10min'});   
        return token; 
    }  
    catch(e) 
    {
        console.error(e);
    }
} 

    export const validateJWT = (token: string) => { 
        try {
            const secret = process.env.TOKEN_SECRET; 
            if(!secret) 
            {
                throw new Error("No Secret Provided")
            } 

            const valid = jwt.verify(token, secret )     
            console.log(valid)
            return valid;
        }  
        catch(e) 
        {
            console.error(e);
        }
}