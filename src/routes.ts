import { Router, Request, Response } from "express";
import multer from 'multer'
import { CreateUserController } from "./controllers/User/CreateUserController";
import { DetailUserController } from "./controllers/User/DetailUserController";
import { AuthUserController } from "./controllers/User/AuthUserController";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { ListCategoryController } from "./controllers/Category/ListCategoryController";
import { CreateProductController } from "./controllers/Product/CreateProductController";
import { ListByCategoryController } from "./controllers/Product/ListByCategoryController";
import { CreateOrderController } from "./controllers/Order/CreateOrderController";
import { DeleteOrderController } from "./controllers/Order/DeleteOrderController";
import uploadConfig from './config/multer'


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/users", isAuthenticated, new DetailUserController().handle);

router.post("/category", isAuthenticated,  new CreateCategoryController().handle)
router.get("/category", isAuthenticated, new ListCategoryController().handle)

router.post("/product", isAuthenticated, upload.single("file"), new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

router.post('/orders', isAuthenticated, new CreateOrderController().handle)
router.delete('/orders', isAuthenticated, new DeleteOrderController().handle)

export { router }
