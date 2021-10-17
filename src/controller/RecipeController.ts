import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Recipe} from "../entity/Recipe";

class RecipeController {
  static create= async(request: Request, response: Response, next: NextFunction)=> {
     const RecipeRepository = getRepository(Recipe);
        let recipe=new Recipe()
        recipe.imgUrl='./myImg'
        recipe.description='My first recipe'
        recipe.title='Rice and Stew with pork'
        const saveRecipe=await RecipeRepository.save(recipe)
        response.status(200).json({success:true,data:saveRecipe})
    }
}

export default RecipeController