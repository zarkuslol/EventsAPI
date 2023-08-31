import { Request, Response, Router } from "express";
import { MainService } from "../services/main.service";

const mainRouter = Router();
const mainService = new MainService();

// Routes
mainRouter.get("/", (req: Request, res: Response) => {
    return res.status(200).json(mainService.sayHello());
});

export default mainRouter;
