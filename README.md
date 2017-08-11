# ask-me-anything

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.


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
* Add a component to show the question previews:  $ ember g component question-tile
* Move the contents of the {{#each}} loop on the app/templates/index.hbs into the question-tile template (app/templates/components/question-tile.hbs).
* In app/templates/index.hbs alter the contents of the code between the <ul></ul> tags with:
   {{#each model as |question|}}
    {{question-tile question=question}}
  {{/each}}
* Add stuff from https://www.learnhowtoprogram.com/javascript/ember-js/components-hide-show-image.
* Add a navbar to  templates/application.hbs: using bootstrap navbar as found on w3schools webpage.
* Install bootstrap: $ ember install ember-bootstrap
* $ ember g route contact


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

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
