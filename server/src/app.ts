import express, {Request, Response, json} from "express";   
import dotenv from "dotenv";  
import cors from "cors"
import pc from "picocolors"; 
import { AuthController, TicketContoller  } from "./controller"; 

dotenv.config(); 
const app = express();   

app.use(json());
app.use(cors());
app.use("/auth", AuthController); 
app.use(TicketContoller);

app.get("/", (req: Request, res: Response) => { 
    return res.status(200).json({msg: "Hello World"});
})

app.listen(3000, () =>  {
    console.log("Server is running at ", pc.green(pc.underline("http://localhost:3000"))) 
}) 
