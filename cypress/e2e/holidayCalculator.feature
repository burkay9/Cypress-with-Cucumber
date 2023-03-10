Feature: Users is able to submit holiday entitlement.

    User calculates holiday entitlement using multiple pathways.

    Background:
        Given I go to the start page
        Given I accept cookies

    Scenario: days worked for a full leave year.
        When I click the start button
        Then I click on "days worked per week" radio button and click continue
        Then I click on "for a full leave year" radio button and click continue
        Then I input "4" days worked per week and click continue
        Then I land on the Results page
        Then I assert holiday entitlement value is "22.4"
        Then I click start again link 
        Then I am taken to start page

    Scenario: days worked for someone starting part way through a leave year.
        When I click the start button
        Then I click on "days worked per week" radio button and click continue
        Then I click on "for someone starting part way through a leave year" radio button and click continue
        Then I input "5" days "11" months "2021" years for the employee 'start date page' and click continue
        Then I input "10" days "02" months "2021" years for the employee 'leave year page' and click continue
        Then I input "3" days worked per week and click continue
        Then I land on the Results page
        Then I assert holiday entitlement value is "6"
        Then I click start again link 
        Then I am taken to start page

    Scenario: days worked for a full leave year - Error scenarios.
        When I click the start button
        Then I click on "days worked per week" radio button and click continue
        Then I click on "for a full leave year" radio button and click continue
        Then I input "7." days worked per week and click continue
        Then I receive an error message 'There are only 7 days in a week. Please check and enter a correct value.'
        Then I input "7.01" days worked per week and click continue
        Then I receive an error message 'There are only 7 days in a week. Please check and enter a correct value.'
        Then I input "five" days worked per week and click continue
        Then I receive an error message 'There are only 7 days in a week. Please check and enter a correct value.'
        Then I input "5" days worked per week and click continue
        Then I land on the Results page
        Then I assert holiday entitlement value is "28"
        Then I click start again link 
        Then I am taken to start page

        # Days worked per week error steps are covered in Scenario above
     Scenario: days worked for someone starting part way through a leave year - Error scenarios.
        When I click the start button
        Then I click on "days worked per week" radio button and click continue
        Then I click on "for someone starting part way through a leave year" radio button and click continue
        Then I input "5" days "Nov" months "2021" years for the employee 'start date page' and click continue
        Then I receive an error message 'Please answer this question.'
        Then I input "5" days "11" months "2021" years for the employee 'start date page' and click continue
        Then I input "6" days "11" months "2021" years for the employee 'leave year page' and click continue
        Then I receive an error message 'Your leave year start date must be earlier than your employment start date of 05 November 2021.'
        Then I input "4" days "11" months "2021" years for the employee 'leave year page' and click continue
        Then I input "2.5" days worked per week and click continue
        Then I land on the Results page
        Then I assert holiday entitlement value is "14"
        Then I click start again link 
        Then I am taken to start page

        