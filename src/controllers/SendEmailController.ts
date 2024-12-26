import { Request, Response } from "express";
import { sendEmail } from "../email/emailTest";

export class SendEmailController {
    static postSendEmail = (req: Request, res: Response) => {
        try {
            
            const data = req.body;
            sendEmail(data);

            res.send("Mensaje enviado correctamente.")

        } catch (error) {
            res.status(500).json({error: "Hubo un error"})
        }
    }
}