import {test,expect} from "@playwright/test";
import {Homepage} from "../pages/login";

test("End to End Test of saucedemo", async function({page}){
    const loginPageObj = new loginPage(page)
    await test.step("Open website page", async()=>{
        await loginPageObj.openWebsite();
        
    })
    await test.step("Login In Website", async()=>{
        await loginPageObj.enterDetails();
    })
})