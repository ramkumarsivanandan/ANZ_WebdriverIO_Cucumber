Feature: ANZ Loan Calculator Page

  Scenario Outline: Verify correct borrow amount is shown

    Given I am on the ANZ Mortage Calculator page
    Then I verify button calculator is visible
    When I enter the annual amount as <annualAmount>
    Then I enter the other income amount as <otherIncomeAmount>
    Then I enter the living expense as <livingExpenseAmount>
    Then I enter the current home loan repayment amount as <currentHomeLoanAmount>
    Then I enter other loans amount as <otherLoanAmount>
    Then I total credit limit as <totalCreditLimitAmount>
    When I click on Work out how much I could borrow button
    Then I can see that total amount I can borrow is <eligibleForBurrow>
    When I click on start over button
    Then I can see that total amount I can borrow is <initialBurrowAmount>


    Examples:
      | annualAmount | otherIncomeAmount | livingExpenseAmount | currentHomeLoanAmount | otherLoanAmount | totalCreditLimitAmount | eligibleForBurrow | initialBurrowAmount | 
      | 80000        | 10000             | 500                 | 0                     | 100             | 10000                  | $528,000          | $0                  |

  Scenario Outline: Verify error message incase of entering living expense as $1 and all other value as 0

    Given I am on the ANZ Mortage Calculator page
    Then I verify button calculator is visible
    Then I enter the living expense as <livingExpenseAmount>
    When I click on Work out how much I could borrow button
    Then I verify if error message <errorMessage> is displayed


    Examples:
      | livingExpenseAmount | errorMessage | 
      | 1                   | Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500. |

