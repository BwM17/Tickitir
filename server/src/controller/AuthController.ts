import {Router, Request, Response} from "express"; 
import { createJWT } from "../utils"; 
import { PrismaClient } from '@prisma/client'  


const prisma = new PrismaClient(); 

export const AuthController =  Router(); 

AuthController.post("/signup", async(req: Request, res: Response) => { 
    if(!req.body.username || !req.body.email)  {
        await res.status(400).send("Bad Request"); 
        return; 
    }

    const CheckUser  = await prisma.user.findFirst({   
        where: { 
            username: req.body.username,
            email: req.body.email
        }
    }) 

    if(CheckUser)  { 
        await res.status(400).send("User already exists"); 
        return; 
   } 

    const user = await prisma.user.create({data: req.body});

    const token = createJWT(user)

    if(!token) 
    {
        await res.status(403).send("Internal Server Error");  
        return; 
    }
    return res.status(200).json({token: `${token}`})  
})  

AuthController.post("/login", async(req: Request, res: Response) => {
    try { 
        if(!req.body.username || !req.body.password)
            return res.status(400).send("missing fields"); 

        const user = await prisma.user.findFirst({
            where: { 
                username: req.body.username,  
                password: req.body.password,
            }
        }) 

        if(!user)  
            return res.status(400).send("please sign in");  

        return res.status(200).json(`${createJWT(user)}`); 


    } catch(e) 
    {
        console.error(e); 
        return res.status(503).send("internal server error")
    }
})