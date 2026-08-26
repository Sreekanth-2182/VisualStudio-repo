const {test,expect}= require('@playwright/test')

test('Aborting api requests to the broswesr',async()=>{


  const username= page.locator("#userEmail")
  const password= page.locator("#userPassword")
  const login= page.locator("[value='Login']")
  const products=page.locator(".card-body")
  

  //await page.route('**/*.{jpg,png,jpeg}',route=>route.abort())

  //the above  statement is used to block the request which having jpg,png,jpeg extensions


  const productName="ZARA COAT 3"

   await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
   await username.fill("Sree25686@gmail.com")
   await password.fill("Sree@1310")
   await login.click();

  page.on('request', request=> console.log(request.url()))
  // the above statement is used to log the request calls 

  page.on('response',response=> console.log(response.url(), response.status()))
   //the above statement is used to display all the request url and their status


  const text=  page.locator("div h4").last();
//console.log(text.textContent())

   await expect(text).toHaveText("Filters");

    const titles= await page.locator(".card-body b").allTextContents();
    const count= titles.length;
    console.log(titles);
    console.log(count);

 
     
})