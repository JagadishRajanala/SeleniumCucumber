$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UserRegistration.feature");
formatter.feature({
  "name": "Validate the user registration",
  "description": "  As a new moneygaming.com player\n  I want to be able to register using my full details\n  So that I can play online casino games",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@RegisterUser"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on a Money Gaming Landing Page",
  "keyword": "Given "
});
formatter.step({
  "name": "I clicked on JOIN NOW button",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the following details \"\u003cTitle\u003e\", \"\u003cFirstName\u003e\", \"\u003cSurname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the checkbox and click on JoinNow button",
  "keyword": "And "
});
formatter.step({
  "name": "verify field level error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Title",
        "FirstName",
        "Surname"
      ]
    },
    {
      "cells": [
        "Mr",
        "Jagadish",
        "Rajanala"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegisterUser"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on a Money Gaming Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDefination.i_am_on_a_Money_Gaming_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on JOIN NOW button",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDefination.i_clicked_on_JOIN_NOW_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027Jagadishs-MacBook-Pro.local\u0027, ip: \u00272a00:23c7:6899:3f01:ccc0:5268:cfd1:6d46%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/n2/qxc7zgrs64d...}, goog:chromeOptions: {debuggerAddress: localhost:53255}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 54b87fff941b4a71ab512b46480f2cf3\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat stepDefinitions.RegistrationStepDefination.i_clicked_on_JOIN_NOW_button(RegistrationStepDefination.java:26)\n\tat ✽.I clicked on JOIN NOW button(file:src/test/resources/features/UserRegistration.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter the following details \"Mr\", \"Jagadish\", \"Rajanala\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepDefination.iEnterTheFollowingDetails(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the checkbox and click on JoinNow button",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepDefination.i_select_the_checkbox_and_click_on_JoinNow_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify field level error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepDefination.verify_field_level_error_message_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});