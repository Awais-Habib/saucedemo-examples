# Saucedemo Test Auomation
This testframework in developed in javascript using Webdriverio library automating theUI tests of the application 

## Assessment Criteria
Theassesment crteria was based on the following points: 

- Demonstrated JavaScript or TypeScript and Node.js knowledge (the more modernsyntax the better!)
- The testcode is concise and easy to understand
- The testeffectively validates the intended functionality
- Theframework is well structured
- Theframework can be extended in an intuitive way 

## Technical DetailsTheautomation framework covers the following parts of the application: 

- Login tohttps://www.saucedemo.com/ using the "standard_user" account
- Sort theproducts by Price (high to low)
- Add thetwo cheapest products to your basket
- Open thebasket
- Removethe cheapest product from your basket
- Checkout- Finish onthe page where you need to enter your name and postal code (you do not need tofill in this form) 

### ToolsUsed

#### Note:I have not used cucumber to define the test structure since the tests arereadable 

- Webdriverio
- Chai 
- Chromedriver
- Mocha  

### TestFunctionalities

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
  
  ### Teststructure  
  
  - pages    
    - login.page.js    
    - inventory.page.js    
    - checkoutOverviewPage.js    
    - checkoutCompletePage.js    
    - cart.page.js- tests    
    - login.test.js    
    - inventory.test.js   
    
    ### How ToRun Tests In order torun the tests locally, perform the following steps:   
    
    Use thepackage manager `npm` to install dependencies:
    
    ```npm install``` 
    
    Use audixfixes if required:
    
    ```npm auditfix``` 
    
    Run thetests (At the moment it is onöy Chrome). The "script" in"package.json" points the tests to "./node_modules/.bin/wdio ./wdio.conf.js":
    
    ```json
    
    "script": {      
      
      "./node_modules/.bin/wdio./wdio.conf.js"
    
    }
    
    ```
    
    So to runthe automation tests simply use:
    
    ```npm runtest```
    
    ### BranchingThe projectcurrenrly has master branch. Use master branch to clone. 
    
    Clone therepository from Github
    
    ```https://github.com/Awais-Habib/saucedemo-examples.git``` 
