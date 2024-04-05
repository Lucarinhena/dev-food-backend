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
import { AddItemsController } from "./controllers/Order/AddItemsController";
import { DeleteItemController } from "./controllers/Order/DeleteItemController";
import { SendOrderController } from "./controllers/Order/SendOrderController";
import { ListOrdersController } from "./controllers/Order/ListOrdersControllers";
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
router.post('/orders/items', isAuthenticated, new AddItemsController().handle)
router.delete('/orders/items', isAuthenticated, new DeleteItemController().handle)
router.put('/orders/send', isAuthenticated, new SendOrderController().handle)
router.get ('/orders', isAuthenticated, new ListOrdersController().handle)


export { router }
