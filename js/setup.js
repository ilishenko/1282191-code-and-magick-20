'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var QUANTITY_PLAYERS = '4';
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
var userDialogClose = userDialog.querySelector('.setup-close');
// показываем окно
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');
// закрываем окно
userDialogClose.addEventListener('click', function () {
  userDialog.classList.add('hidden');
});

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var randomElement = function (array) {
  var elementRandom = array[Math.floor(Math.random() * array.length)];
  return elementRandom;
};

var getWizad = function (name, surname, coat, eyes) {
  var wizard = [];
  wizard.name = randomElement(name) + ' ' + randomElement(surname);
  wizard.coatColor = randomElement(coat);
  wizard.eyesColor = randomElement(eyes);

  return wizard;
};


var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getWizad(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR).name;
  wizardElement.querySelector('.wizard-coat').style.fill = getWizad(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR).coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = getWizad(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR).eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < QUANTITY_PLAYERS; i++) {
  fragment.appendChild(renderWizard());
}
similarListElement.appendChild(fragment);
