import { Router, Request, Response } from "express"; 
import { PrismaClient } from "@prisma/client"; 


const prisma = new PrismaClient();   

export const TicketContoller = Router(); 


TicketContoller.post("/ticket", async(req: Request, res: Response) => { 

    try {
    if(!req.body.title || !req.body.description )     
        return res.status(400).send("Missing Fields");  

    const ticket = await prisma.ticket.create({data: req.body});

    if(!ticket) 
        return res.status(500).send("internal server errror"); 

    return res.status(200).json(ticket);

    }catch(e) 
    {
        console.error(e); 
        return res.status(500).send("error");
    } 
}) 


TicketContoller.get("/tickets", async(req: Request, res: Response) => {  
    try { 
        const tickets = await prisma.ticket.findMany(); 

        if(!tickets) 
            throw new Error("error while getting tickets");  

        return res.status(200).json(tickets);

    }catch(e)
    {
        console.error(e);  
        return res.status(500);
    }
}); 


TicketContoller.get("/ticket/:id", async(req: Request, res: Response) => {
    try {
        if(!req.params.id)
            return res.status(400).send("id not provided"); 

        const ticket = await prisma.ticket.findUnique({ 
            where: {
                id: +req.params.id as number 
            }
        }) 

        if(!ticket)  
            return res.status(400).send("ticket not found");  

        return res.status(200).json(ticket);

    } 
    catch(e) 
    {
        console.error(e); 
        return res.status(500).send("sthm went wrong")
    }
}); 


TicketContoller.delete( "/ticket/:id", async(req: Request, res: Response) => {
    try {
        if(!req.params.id)
            return res.status(400).send("params missing"); 
        
        const Ticketid = +req.params.id;
        const DeleteTicket = await prisma.ticket.delete({
            where: {
                id: Ticketid
            }
        });  
        if(!DeleteTicket) 
            throw new Error("Error while deleting Ticket"); 

        return res.status(200).send("Sucess") 
    } 
    catch(e) 
    {
        console.error(e) 
        return res.status(503).send("Internal server Error")
    }
});


export default TicketContoller; 