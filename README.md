# Saucedemo Test Auomation
This test framework in developed in javascript using Webdriverio library automating the UI tests of the application 

## Assessment Criteria
The assesment crteria was based on the following points: 

- Demonstrated JavaScript or TypeScript and Node.js knowledge (the more modernsyntax the better!)
- The testcode is concise and easy to understand
- The test effectively validates the intended functionality
- The framework is well structured
- The framework can be extended in an intuitive way 

## Technical Details The automation framework covers the following parts of the application: 

- Login to https://www.saucedemo.com/ using the "standard_user" account
- Sort the products by Price (high to low)
- Add the two cheapest products to your basket
- Open the basket
- Remove the cheapest product from your basket
- Checkout- Finish on the page where you need to enter your name and postal code (you do not need tofill in this form) 

### ToolsUsed

#### Note:I have not used cucumber to define the test structure since the tests are readable 

- Webdriverio
- Chai 
- Chromedriver
- Mocha  

### Test Functionalities

- UI Tests  
  - Login tests     
  - Check Login Page    
  - Verify the user Login  
  - Product Tests    
  - Sort the items    
  - Add Items into the cart    
  - Add second item into the cart    
  - Remove item from the cart    
  - Checkout the cart    
  - Complete checkout to finish the order    
  
  ### Test Structure  
  
  - pages    
    - login.page.js    
    - inventory.page.js    
    - checkoutOverviewPage.js    
    - checkoutCompletePage.js    
    - cart.page.js- tests    
    - login.test.js    
    - inventory.test.js   
    
    ### How To Run Tests 
    
    In order torun the tests locally, perform the following steps:   
    
    Use the package manager `npm` to install dependencies:
    
    ```npm install``` 
    
    Use audixfixes if required:
    
    ```npm audit fix``` 
    
    Run the tests (At the moment it is onöy Chrome). The "script" in "package.json" directed the tests to "./node_modules/.bin/wdio ./wdio.conf.js":
    
    ```json
    
    "script": {      
      
      "./node_modules/.bin/wdio ./wdio.conf.js"
    
    }
    
    ```
    
    So to run the automation tests use:
    
    ```npm run test```
    
    ### Branching 
    
    This project currently has master branch. Use master branch to clone. 
    
    Clone the repository from Github
    
    ```https://github.com/Awais-Habib/saucedemo-examples.git``` 
