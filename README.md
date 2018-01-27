Dan Levenson, October 27, 2017

ReciP Proposal

What is ReciP?

ReciP is an app that will allow users to search for cooking recipes based on keywords, utilizing the Food2Fork API.  Users will be able to save their favorite recipes, as well as any searches they would like to refer to for the future.   

Wireframe

(Your wireframes go here. Preferably two or more)

Initial thoughts on app structure

My goal is to have two separate tables within a database, one to store the searches users want to save, and another for favorited recipes.  One feature that I would like to try to incorporate if possible would be a re-order option so users can customize the order of their favorited recipes.  This is something I'd focus on the MVP and authentication have been completed.

One challenge I'm expecting is to get the Next button to appear after a search is executed, allowing the user to view the next page of results.  The API I'm using has a limit of 30 results per page, but has thousands of recipes available.  It's really important to make sure this feature works properly before moving onto authentication, because it would really limit the user's experience if they can only view 30 search results.





Phases of Completion

Phase 1:  Create landing page, search result page, favorited recipes and saved searches pages along with views and link them properly

Phase 2:  Test fetching from API and implement to Search bar

Phase 3:  Implement ability to save searches and favorite recipes

Phase 4:  Allow user to view multiple pages of results within search results

Phase 5:  Implement authentication (make db changes, create new views, routes, controllers)

Phase 6:  Re-order saved searches and favorited recipes.

The first four phases consist of my minimal viable product, as this will allow the user to get the most out of their searches.  Phase 5 is something I expect to be able to complete

Links and Resources

http://food2fork.com/about/api
http://www.passportjs.org/
https://www.html5rocks.com/en/tutorials/cors/