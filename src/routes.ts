import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { DetailUserController } from "./controllers/User/DetailUserController";
import { AuthUserController } from "./controllers/User/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/users", isAuthenticated, new DetailUserController().handle);

export { router };
