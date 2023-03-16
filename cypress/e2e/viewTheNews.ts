import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the front page", () => {
    cy.visit("http://localhost:3000");
});

Then(/^I should see a list of news articles$/, function () {
    // Get the list of articles
    cy.get("article").should("have.length.greaterThan", 0);

});
Then(/^each article should display its headline, date, and summary$/, function () {
    // Check that each article has a headline, date, and summary
    cy.get("article").each((article) => {
        cy.wrap(article).find("h2").should("exist").and("have.length.greaterThan", 100);
        cy.wrap(article).find("time").should("exist").and("have.length.greaterThan", 0);
        cy.wrap(article).find("p").should("exist").and("have.length.greaterThan", 0);
    });
});