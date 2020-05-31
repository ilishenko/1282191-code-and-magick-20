'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 90;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_X = 30;
var GAP_Y = 20;
var FONT_GAP = 20;
var fontSize = '16px';
var fontFamily = 'PT Mono';
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#000000';
  ctx.font = fontSize + fontFamily;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_X, CLOUD_Y + GAP_Y);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_X, CLOUD_Y + GAP_Y + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsla(240, 100%, 50%, ' + Number(Math.random()) + ')';
    ctx.fillRect(CLOUD_X + GAP_X + BAR_GAP * i, CLOUD_Y + 90 + BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], CLOUD_X + GAP_X + BAR_GAP * i, 260);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_X + BAR_GAP * i, CLOUD_Y + 70 + BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime));
  }

};
