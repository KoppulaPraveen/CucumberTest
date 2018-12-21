package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class StepDefination {
	static FirefoxDriver driver;
	@Given("^the browser is launched and LinkedIn home page is opened$")
	public void the_browser_is_launched_and_LinkedIn_home_page_is_opened() throws Throwable {
		 driver=new FirefoxDriver();
		  driver.get("https://in.linkedin.com/");
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}

	@When("^we enter the username and password$")
	public void we_enter_the_username_and_password() throws Throwable {
		driver.findElement(By.id("login-email")).sendKeys("koppulapraveen20@gmail.com");
		driver.findElement(By.id("login-password")).sendKeys("9885248184");
		
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}

	@When("^click on the Signin button$")
	public void click_on_the_Signin_button() throws Throwable {
		driver.findElement(By.id("login-submit")).click();
		
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
	}

}
