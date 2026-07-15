import {test} from "@playwright/test";
class AddToCart{
    constructor(page){
        this.page=page;
        this.productOne=page.getByAltText("Sauce Labs Backpack");
        this.productTwo=page.getByAltText("Sauce Labs Bike Light");
        this.addToCartBtn=page.locator("#add-to-cart");


    }
    async clickFirstProduct(){
        await this.productOne.click();
    }
    async clickSecondProduct(){
        await this.productTwo.click();
    }
    async clickAddToCartBtn(){
        await this.addToCartBtn.click();
        await this.page.goBack();
        await this.page.waitForTimeout(3000);
    }
}
export {AddToCart};