# ask-me-anything

This README outlines the details of collaborating on this Ember application.
This is a webpage that allows the user to post a question and anyone to post an answer to the question. The ability to edit/delete any question or answer is also included. The questions and answers are held in an online firebase database.


## Steps for creating this page:
* $ ember new ask-me-anything
* $ ember g route about
* $ add content to app/templates/about.hbs
* $ ember g route index
* Add a navbar to  templates/application.hbs: using bootstrap navbar as found on w3schools webpage.
* generate the first Ember Data model:  $ ember g model question
* $ ember install emberfire
* Configure Firebase by going into config/environment.js and add placeholders for apiKey, etc.
* Manually import data to Firebase:
* - create questions.json in the root directory of our project
* - go to routes/index.js, cut the questions info and paste it into questions.json
* import questions.json to firebase by following their on screen instructions.
* update Firebase permissions to true for read and write
* add Firebase apiKey, etc. data to config/environment.js
* Update the Model hook by going into app/routes/index.js:  return this.store.findAll('question')
* Add a component to show the question answers:  $ ember g component question-tile
* Move the contents of the {{#each}} loop on the app/templates/index.hbs into the question-tile template (app/templates/components/question-tile.hbs).
* In app/templates/index.hbs alter the contents of the code between the <ul></ul> tags with:
   {{#each model as |question|}}
    {{question-tile question=question}}
  {{/each}}
* Add stuff from https://www.learnhowtoprogram.com/javascript/ember-js/components-hide-show-image.
* Add a navbar to  templates/application.hbs: using bootstrap navbar as found on w3schools webpage.
* Install bootstrap: $ ember install ember-bootstrap
* $ ember g route contact
* * update contact.hbs with contact info
* Add functionality to delete a question: https://www.learnhowtoprogram.com/javascript/ember-js/components-delete
* Add functionality to add a question:  https://www.learnhowtoprogram.com/javascript/ember-js/components-save ~
* Add functionality to update a question:
https://www.learnhowtoprogram.com/javascript/ember-js/components-update
* Add functionality to add answers to each question by making each question list item in the index a link to a template containing individual question details.:
https://www.learnhowtoprogram.com/javascript/ember-js/dynamic-routing-find-record
* $ ember g route question
* Add a Dynamic segment to access each question Object
* - update app/router.js to show: this.route('rental', {path: '/question/:question_id'});
* Generate code to display details of each question post in it's own page:
* - $ ember g component question-detail
* Add question.detail to questions.json, question.js, update-question.js, update-question.hbs and new-question.js files to allow a freeform entry of text for details about the question.
* Refactor the code:  https://www.learnhowtoprogram.com/javascript/ember-js/dynamic-routing-find-record
* Create a answer Model: https://www.learnhowtoprogram.com/javascript/ember-js/one-route-multiple-models
* - $ ember g model answer
* - define its attributes in app/models/answer.js:
* import DS from 'ember-data';

* export default DS.Model.extend({
  answerer: DS.attr(),
  content: DS.attr()
* });

* Did this section: Return Multiple Model Types in One Model Hook
* Update app/templates/index.hbs to include the list of answers.
* Add functionality to allow visitors to add a new answer on individual posts - "Creating a new answer".
* Implement a relationship between questions and answers: https://www.learnhowtoprogram.com/javascript/ember-js/model-relationships
* Update question and answer models with hasMany keyword
* Refactor new-answer component...see lesson referenced above: add question: this.get('question') to app/components/new-answer.js and...
* Change text input field for question.details in new-question.hbs and question-update.hbs to be a text area field for easier editing of the text: {{textarea value=detail id="detail"}}
* Update styling in app.css to make .thumbnail color transparent and added rows and columns to question-tile.hbs and application.hbs files to improve visual appeal.
* Add code to delete a answer: https://www.learnhowtoprogram.com/javascript/ember-js/deleting-model-relationships

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ask-me-anything`
* `npm install`


## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

There are no current plans to actually deploy this webpage. This is intended as an ability demonstrator only.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
