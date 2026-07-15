import {test} from "@playwright/test";
import testData from "../testdata/data.json"


class loginPage{
    constructor(page){
        this.page=page;
        this.userName=page.getByPlaceholder("Username");
        this.password=page.getByPlaceholder("password");
        this.loginBtn = page.locator("#login-button");


    }
    async openWebsite(){
        await this.page.goto("https://www.saucedemo.com/");
    }
    async enterDetails(){
        await this.userName.fill(testData.details.username);
        await this.password.fill(testData.details.password);
        await this.loginBtn.click();
        await this.page.waitForTimeout(3000);

    }
}
export {loginPage};