import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { DetailUserController } from "./controllers/User/DetailUserController";
import { AuthUserController } from "./controllers/User/AuthUserController";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { ListCategoryController } from "./controllers/Category/ListCategoryController";


const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/users", isAuthenticated, new DetailUserController().handle);

router.post("/category", isAuthenticated,  new CreateCategoryController().handle)
router.get("/category", isAuthenticated, new ListCategoryController().handle)

export { router }
