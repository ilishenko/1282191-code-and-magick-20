'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 90;
var BAR_GAP_Y = 90;
var GAP_SHADOW = 10;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_BOTTOM_GAP = 20;
var CLOUD_TOP_GAP = 70;
var GAP_X = 30;
var GAP_Y = 20;
var FONT_GAP = 20;
var you = 'Вы';
var fontSize = '16px';
var fontFamily = 'PT Mono';
var colorText = '#000000';
var colorCloud = '#ffffff';
var colorCloudSadow = 'rgba(0, 0, 0, 0.7)';
var colorRed = 'rgba(255, 0, 0, 1)';
var textBaseline = 'hanging';
var blueHue = 240;
var blueLightness = 50;
var firstRow = 'Ура вы победили!';
var secondRow = 'Список результатов:';

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getColorMix = function (h, l) {
  var colorMix = Math.random() * 100;

  return 'hsl(' + h + ',' + colorMix + '%,' + l + '%)';
};

window.renderStatistics = function (ctx, players, times) {
  ctx.fillStyle = colorCloudSadow;
  ctx.fillRect(CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = colorCloud;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = colorText;
  ctx.font = fontSize + fontFamily;
  ctx.textBaseline = textBaseline;
  ctx.fillText(firstRow, CLOUD_X + GAP_X, CLOUD_Y + GAP_Y);
  ctx.fillText(secondRow, CLOUD_X + GAP_X, CLOUD_Y + GAP_Y + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = (players[i] === you) ? colorRed : getColorMix(blueHue, blueLightness);
    ctx.fillRect(CLOUD_X + GAP_X + BAR_GAP * i, CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = colorText;
    ctx.fillText(players[i], CLOUD_X + GAP_X + BAR_GAP * i, CLOUD_Y + CLOUD_HEIGHT - CLOUD_BOTTOM_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_X + BAR_GAP * i, CLOUD_Y + CLOUD_TOP_GAP + BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime));
  }

};
