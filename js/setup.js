'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
var userDialogClose = userDialog.querySelector('.setup-close');
//показываем окно
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');
//закрываем окно
userDialogClose.addEventListener('click', function () {
  userDialog.classList.add('hidden');
});

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [
  {
    name: 'Kirill',
    coatColor: 'rgb(241, 43, 107)'
  },
  {
    name: WIZARD_NAMES[0],
    coatColor: 'rgb(215, 210, 55)'
  },
  {
    name: WIZARD_NAMES[0],
    coatColor: 'rgb(101, 137, 164)'
  },
  {
    name: WIZARD_NAMES[0],
    coatColor: 'rgb(127, 127, 127)'
  }
];

var randomElement = function (array) {
  var elementRandom = array[Math.floor(Math.random() * array.length)];
  return elementRandom;
};

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_SURNAMES);//wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = randomElement(coatColor);
  wizardElement.querySelector('.wizard-eyes').style.fill = randomElement(eyesColor);

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
