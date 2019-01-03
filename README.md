# SEBA Naming Convention Tags
_Website that displays S.E.B.A.'s approved tags based on their naming convention_
--- --- --- --- --- --- --- --- --- --- --- ---
## Frameworks/Libraries/etc. used:
+ Good ol' VanillaJS
+ Bootstrap (Goal: to replicate style myself in CSS)

## Goals and Lessons Learned:
+ [x] Create a functioning website that displays a table of tags
+ [x] Allow for searching of the tags' name and/or description
+ [ ] Allow for filtering of tag type before/after searching
+ [ ] Have a link that download's the table as a CSV file
+ [ ] Accessibility: Make sure to use latest in a11y tags/etc.
+ [ ] Internationalization: Incorporate multiple languages
+ Avoid as many external calls from code base as possible
+ Gain confidence in JavaScript by replicating framework features in vanilla JavaScript
+ Gain confidence in CSS by replicating Bootstrap in standard CSS

## Motivations and Explanations:
+ Since hosting of site is out of my control and will be done via a large corporation intranet, I want to create a site that can be single page and limits calls to external frameworks/libraries
+ Styling is something I struggle with, so I will be using Bootstrap so I can focus on functionality; once I am very comfortable with the HTML/JavaScript, I can come back and redo the styling in CSS myself
+ Being one of the more major (read as public) projects I am working on, I decided I should have a more formal structure to the development process and use branches to separate development/features from `master` as opposed to the single thread style I have done in the past since they were collaboratorless projects
  + This leads to a shift of having `master/origin` as public release, `development` to actually work on, and then feature branches for as it seems appropriate
