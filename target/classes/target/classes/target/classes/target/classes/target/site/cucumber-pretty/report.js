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
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027Jagadishs-MacBook-Pro.local\u0027, ip: \u00272a00:23c7:6899:3f01:b82f:aa18:56ed:fae%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: ChromeDriver\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:192)\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat stepDefinitions.Hook.openBrowser(Hook.java:16)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:77)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:110)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:106)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:33517/status] to be available after 20002 ms\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:187)\n\t... 58 more\nCaused by: java.util.concurrent.TimeoutException\n\tat java.util.concurrent.FutureTask.get(FutureTask.java:205)\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:147)\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\n\t... 59 more\n",
  "status": "failed"
});
formatter.step({
  "name": "I am on a Money Gaming Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDefination.i_am_on_a_Money_Gaming_Landing_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I clicked on JOIN NOW button",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDefination.i_clicked_on_JOIN_NOW_button()"
});
formatter.result({
  "status": "skipped"
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
formatter.after({
  "error_message": "java.lang.NullPointerException\n\tat stepDefinitions.Hook.takeScreenshot(Hook.java:24)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:77)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:110)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:106)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
});