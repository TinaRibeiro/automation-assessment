import { Given, When, Then } from "@wdio/cucumber-framework";
import createUserPage from "../pageobjects/create-user.page.js";

Given("the user is on the login page", async () => {
  await createUserPage.open();
});

When("login with {string} and {string}", async (user, password) => {
  await createUserPage.login(user, password);
});

When("select the About option from the menu", async () => {
  await createUserPage.selectMenuAbout();
});

Then("the Sauce Labs home page will be displayed", async () => {});

When("user clicks Try Free", async () => {
  await createUserPage.clickTryfree();
});

When("to choose to create a new account with {string}", async (option) => {
  await createUserPage.selectOpSignUp(option);
});

When(
  "to inform the work email: {string}, username: {string} and password {string}",
  async (email, username, password) => {
    await createUserPage.loginData(email, username, password);
  }
);

When("to click Sign Up", async () => {
  await createUserPage.buttonSignUp();
});

Then("the account will be created", async () => {});

When("to inform the email: {string} and password {string}", async () => {
  await createUserPage.loginData(email, password);
});
