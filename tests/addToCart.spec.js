import {test,expect} from "@playwright/test";
import {loginPage} from "../pages/login";
import { AddToCart } from "../pages/addToCart";

test("Add Product to Cart", async function({page}){
    const loginPageObj = new loginPage(page);
    const  addToCartObj = new AddToCart(page);
    await test.step("Login Application", async()=>{
        await loginPageObj.openWebsite();
        await loginPageObj.enterDetails();
    });
    await test.step("Click First Product", async()=>{
        await addToCartObj.clickFirstProduct();
        await addToCartObj.clickAddToCartBtn();
    });
    await test.step("Click Second Product", async()=>{
        await addToCartObj.clickSecondProduct();
        await addToCartObj.clickAddToCartBtn();
        
    });

})
