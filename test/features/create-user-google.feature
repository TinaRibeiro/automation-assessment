Feature: Create user account with Google
As a user
I want to be able 
to create a new account with Google

Scenario: Create user account - with Google
 Given the user is on the login page
 When login with "standard_user" and "secret_sauce"
 And select the About option from the menu
 Then the Sauce Labs home page will be displayed
 When user clicks Try Free
 And to choose to create a new account with "Google"
 When to inform the email: "usertesteautomation@gmail.com" and password "Test2469@"
 And to click Sign Up
 Then the account will be created