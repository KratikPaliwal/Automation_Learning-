import {test} from "@playwright/test";

class HomePage{
    constructor(page){
        this.page=page;
        this.threeDot=page.locator("#react-burger-menu-btn");
        this.logoutLink=page.locator("#logout_sidebar_link");
    }
    async clickMenu(){
        await this.threeDot.click();
        await this.logoutLink.click();
    }
}
export {HomePage};