$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Linkedin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Verify login  functionality of Linkedin",
  "description": "",
  "id": "verify-login--functionality-of-linkedin",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 22,
  "name": "As  a admin I should login with all access",
  "description": "",
  "id": "verify-login--functionality-of-linkedin;as--a-admin-i-should-login-with-all-access",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "the browser is launched and LinkedIn home page is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "we enter the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "click on the Signin button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.the_browser_is_launched_and_LinkedIn_home_page_is_opened()"
});
formatter.result({
  "duration": 9439935677,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.we_enter_the_username_and_password()"
});
formatter.result({
  "duration": 2888032476,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_the_Signin_button()"
});
formatter.result({
  "duration": 4519035022,
  "status": "passed"
});
});