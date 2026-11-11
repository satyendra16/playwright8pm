/*import{test,expect} from '@playwright/test'
import { HomePage } from '../pageObject/HomePage'
import { RegistrationPage } from '../pageObject/RegistrationPage'

test('registration',async({page})=>
{
    const homepage=new HomePage(page)
     await homepage.goTo()
     await homepage.clickOnRegisterLink()

     const registerpage=new RegistrationPage(page)
      await registerpage.registerUser(
        'rama','shyama','india','delhi','delhi','110011','987654321','12121','ts13','asdf','asdf'
      )
      await registerpage.clickOnRegisterbutton()

      await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
})*/


import{test,expect} from '@playwright/test'
 import { POManager } from '../pageObject/POManager'

test('registration',async({page})=>
{
    
    const pomanager=new POManager(page)
     const homepage=pomanager.getHomePage()
     await homepage.goTo()
     await homepage.clickOnRegisterLink()

     const registerpage=pomanager.getRegistrationPage()
      await registerpage.registerUser(
        'rama','shyama','india','delhi','delhi','110011','987654321','12121','ts14','asdf','asdf'
      )
      await registerpage.clickOnRegisterbutton()

      await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
})