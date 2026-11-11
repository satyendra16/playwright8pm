 import { POManager } from '../pageObject/POManager'
 import { customtest as test } from '../fixture/testfixture'
test('Login',async({page,testdataForregistration})=>
{
    
    const pomanager=new POManager(page)
     const homepage=pomanager.getHomePage()
     await homepage.goTo()
     await homepage.clickOnRegisterLink()

     const logipage=pomanager.getLoginPage()
     await logipage.loginToApp(
        testdataForregistration.username,
        testdataForregistration.password
     )

    
})