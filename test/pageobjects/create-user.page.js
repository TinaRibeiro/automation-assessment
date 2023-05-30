import Page from "./page.js";
/**
 * sub page containing specific selectors and methods for a specific page
 */
class createUserPage extends Page {
  open() {
    return super.open();
  }

  async login(user, password) {
    await browser.pause(5000);
    await $("#user-name").setValue(user);
    await $("#password").setValue(password);
    await browser.pause(2000);
    await $("#login-button").click();
    await browser.pause(5000);
  }

  async selectMenuAbout() {
    await $('//*[@id="react-burger-menu-btn"]').click();
    await browser.pause(2000);
    await $('//*[@id="about_sidebar_link"]').click();
    await browser.pause(8000);
  }

  async clickTryfree() {
    await browser.pause(2000);
    var modalCoockies = await $(
      '//*[@id="onetrust-banner-sdk"]/div/div'
    ).isExisting();

    if (modalCoockies == true) {
      await $('//*[@id="onetrust-accept-btn-handler"]').click();
      await browser.pause(5000);
    } else {
      console.log("Modal não existiiu!");
    }

    await $(
      '//*[@id="__next"]/div[2]/div[1]/div/div[1]/div[1]/div/div[4]/div[1]/a/button'
    ).click();
    await browser.pause(5000);
  }

  async selectOpSignUp(option) {
    authenticatorOption = await option;

    if (authenticatorOption == "Google") {
      $('//*[@id="__next"]/div/main/div[1]/div/nav/ul/li[1]/a').click();
    } else if (authenticatorOption == "GitHub") {
      $('//*[@id="__next"]/div/main/div[1]/div/nav/ul/li[2]/a').click();
    } else if (authenticatorOption == "email") {
      $('//*[@id="signUpWithEmail"]').click();
    }
    await browser.pause(5000);
  }

  async loginData(email, username, password) {
    if (authenticatorOption == "Google") {
      $('//*[@id="identifierId"]').setValue(email);
      await browser.pause(2000);
      $('//*[@id="identifierNext"]/div/button/div[1]').click();
      await browser.pause(3000);
      $('//*[@id="password"]/div[1]/div/div[1]/input').setValue(password);
      await browser.pause(2000);
      $('//*[@id="passwordNext"]/div/button/div[1]').click();
    } else if (authenticatorOption == "GitHub") {
      $('//*[@id="login_field"]').setValue(email);
      await browser.pause(2000);
      $('//*[@id="password"]').setValue(password);
    } else if (authenticatorOption == "email") {
      $('//*[@id="email"]').setValue(email);
      await browser.pause(2000);
      $('//*[@id="username"]').setValue(username);
      await browser.pause(2000);
      $('//*[@id="password"]').setValue(password);
      await browser.pause(2000);
      // check in box
      $('//*[@id="subscription"]').click();
    }
    await browser.pause(5000);
  }

  async buttonSignUp() {
    if (featureName.includes("email")) {
      await $('//button[@type="submit"]').click();
    } else if (featureName.includes("google")) {
      await $('//*[@id="passwordNext"]/div/button/div[1]').click();
    } else if (featureName.includes("github")) {
      await $('//*[@id="login"]/div[3]/form/div/input[13]').click();
    }
    await browser.pause(30000);
  }
}

export default new createUserPage();
