import { Request, Response } from "express";
import EmailService from "../services/EmailService";
const users = [{ name: "User1", email: "user1@example.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: "User1", email: "user1@example.com" },
      message: { subject: "Welcome to our app", body: "Lets get started" },
    });

    return res.send();
  },
};
