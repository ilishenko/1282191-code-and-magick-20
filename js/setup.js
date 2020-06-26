'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var QUANTITY_PLAYERS = '4';
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


var userDialog = document.querySelector('.setup');
var userDialogClose = userDialog.querySelector('.setup-close');
var userDialogOpen = document.querySelector('.setup-open');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};


// показываем окно
userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

// закрываем окно
userDialogClose.addEventListener('click', function () {
  closePopup();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var randomElement = function (array) {
  var elementRandom = array[Math.floor(Math.random() * array.length)];
  return elementRandom;
};

var getWizard = function (name, surname, coat, eyes) {
  var wizard = {};
  wizard.name = randomElement(name) + ' ' + randomElement(surname);
  wizard.coatColor = randomElement(coat);
  wizard.eyesColor = randomElement(eyes);

  return wizard;
};

var getWizardCollection = function (wizard) {
  wizard = getWizard(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR);
  return wizard;
};


var getWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getWizardCollection(wizard).name;
  wizardElement.querySelector('.wizard-coat').style.fill = getWizardCollection(wizard).coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = getWizardCollection(wizard).eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < QUANTITY_PLAYERS; i++) {
  fragment.appendChild(getWizardElement());
}
similarListElement.appendChild(fragment);

// Валидация

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// Изменение цветовых характеристик персонажа по клику

var setapPlayer = document.querySelector('.setup-player');
var setapCoat = setapPlayer.querySelector('.wizard-coat');
var setapEyes = setapPlayer.querySelector('.wizard-eyes');

var setapFireball = setapPlayer.querySelector('.setup-fireball-wrap');
var setapFireballInput = setapFireball.querySelector('input');

var getWizardColorCoat = function () {
  var wizardCoat = randomElement(COAT_COLOR);
  return wizardCoat;
};

setapCoat.addEventListener('click', function () {
  setapCoat.style.fill = getWizardColorCoat();
});

var getWizardColorEyes = function () {
  var wizardCoat = randomElement(EYES_COLOR);
  return wizardCoat;
};

setapEyes.addEventListener('click', function () {
  setapEyes.style.fill = getWizardColorEyes();
});

var getWizardColorFireball = function () {
  var wizardCoat = randomElement(FIREBALL_COLOR);
  return wizardCoat;
};

setapFireball.addEventListener('click', function () {
  setapFireball.style.backgroundColor = getWizardColorFireball();
  setapFireballInput.value = setapFireball.style.backgroundColor;
});
