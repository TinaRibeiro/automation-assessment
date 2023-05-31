Feature: Create user account with Email
As a user
I want to be able 
to create a new account with email

Scenario: Create user account - with Email
 Given the user is on the login page
 When login with "standard_user" and "secret_sauce"
 And select the About option from the menu
 Then the Sauce Labs home page will be displayed
 When user clicks Try Free
 And to choose to create a new account with "email"
 When to inform the work email: "autousertest@outlook.com", username: "user_automation_test" and password "Test2469@"
 And to click Sign Up
 Then the account will be created