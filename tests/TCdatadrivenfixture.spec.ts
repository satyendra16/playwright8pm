
 import { POManager } from '../pageObject/POManager'
 import { customtest as test } from '../fixture/testfixture'
test('registration',async({page,testdataForregistration})=>
{
    
    const pomanager=new POManager(page)
     const homepage=pomanager.getHomePage()
     await homepage.goTo()
     await homepage.clickOnRegisterLink()

     const registerpage=pomanager.getRegistrationPage()
      await registerpage.registerUser(
        testdataForregistration.firstname,
        testdataForregistration.lastname,
        testdataForregistration.address,
        testdataForregistration.city,
        testdataForregistration.state,
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber,
        testdataForregistration.ssn,
        testdataForregistration.username,
        testdataForregistration.password,
        testdataForregistration.confirmpassword
      )
      await registerpage.clickOnRegisterbutton()

     // await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
})