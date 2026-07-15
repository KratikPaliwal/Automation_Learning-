import {test,expect} from "@playwright/test";
import {loginPage} from "../pages/login";
import {HomePage} from "../pages/homepage";
import testData from "../testdata/data.json"
test("Home Page Functionality", async function({page}){
    const loginPageObj = new loginPage(page);
    const homePageObj = new HomePage(page);
    await test.step("Login",async()=>{
        await loginPageObj.openWebsite();
        await loginPageObj.enterDetails();
    });
    await test.step("Logout", async()=>{
        await homePageObj.clickMenu();
    })

})