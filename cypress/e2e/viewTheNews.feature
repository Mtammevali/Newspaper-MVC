Feature: View News Articles on Front Page
  As a user
  I want to view the news articles on the front page
  So that I can stay up-to-date with the latest news

  Scenario: View News Articles
    Given I am on the front page
    Then I should see a list of news articles
    And each article should display its headline, date, and summary