import { Request, Response, NextFunction } from "express"; 
import { validateJWT } from "../utils" 


export const authorized = async(
    req: Request, 
    res: Response, 
    next: NextFunction) => {  
    
    const AuthHeader = await req.headers['authorization']
    const token = AuthHeader && AuthHeader.split(' ')[1]; 

    if(!token) 
    {
        await res.status(401).send("need to figure out that status") 
        return; 
    }

    const user = validateJWT(token); 

    if(!user){
        await res.send("Bad Request"); 
        return; 
    } 

    console.log(user); 
    req.body.user = user; 

    next(); 
}