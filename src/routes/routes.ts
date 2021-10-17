import {Router} from 'express'
import UserController from "../controller/UserController";
import RecipeController from '../controller/RecipeController';
const router=Router()

router.get('/users',UserController.all)
router.get('/recipe/new',RecipeController.create)


export default router