'use strict';
var BAR_WIDTH = 150;

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
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsla(240, 100%, 50%, Math.round(Math.random() * 10) / 10)';
    }

    ctx.fillRect(130 + 90 * i, 100 + BAR_WIDTH - (BAR_WIDTH * times[i] / maxTime), 40, BAR_WIDTH * times[i] / maxTime);
    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], 130 + 90 * i, 260);
    ctx.fillText(Math.round(times[i]), 130 + 90 * i, 80 + BAR_WIDTH - (BAR_WIDTH * times[i] / maxTime));
  }

};
