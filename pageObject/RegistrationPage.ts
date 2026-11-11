import { Page, Locator } from '@playwright/test'

export class RegistrationPage {
    private page: Page
    private FirstName: Locator
    private LastName: Locator
    private Address: Locator
    private City: Locator
    private State: Locator
    private ZipCode: Locator
    private PhoneNumber: Locator
    private Ssn: Locator
    private UserName: Locator
    private Password: Locator
    private ConfirmPassword: Locator
    private registerbutton: Locator

    constructor(page: Page) {
        this.page = page;
        this.FirstName = page.locator("//input[@id='customer.firstName']")
        this.LastName = page.locator("//input[@id='customer.lastName']")
        this.Address = page.locator("//input[@id='customer.address.street']")
        this.City = page.locator("//input[@id='customer.address.city']")
        this.State = page.locator("//input[@id='customer.address.state']")
        this.ZipCode = page.locator("//input[@id='customer.address.zipCode']")
        this.PhoneNumber = page.locator("//input[@id='customer.phoneNumber']")
        this.Ssn = page.locator("//input[@id='customer.ssn']")
        this.UserName = page.locator("//input[@id='customer.username']")
        this.Password = page.locator("//input[@id='customer.password']")
        this.ConfirmPassword = page.locator("//input[@id='repeatedPassword']")
        this.registerbutton = page.locator("//input[@value='Register']")
    }

    async registerUser(
        fnanme: string,
        lname: string,
        address: string,
        city: string,
        state: string,
        zipcode: string,
        phone: string,
        ssn: string,
        username: string,
        pass: string,
        cpassword: string
    ) {
        await this.FirstName.fill(fnanme)
        await this.LastName.fill(lname)
        await this.Address.fill(address)
        await this.City.fill(city)
        await this.State.fill(state)
        await this.ZipCode.fill(zipcode)
        await this.PhoneNumber.fill(phone)
        await this.Ssn.fill(ssn)
        await this.UserName.fill(username)
        await this.Password.fill(pass)
        await this.ConfirmPassword.fill(cpassword)
    }

    async clickOnRegisterbutton()
    {
         await this.registerbutton.click()
    }
}