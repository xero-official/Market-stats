function updateDiff() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.last}`

    $(".price").html(text);
    setTimeout(updateDiff(), 72000000000);

  });
}

setTimeout(updateDiff(), 72000000000);

function updatePer() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.change}`

    $(".per").html(text);
    setTimeout(updatePer(), 72000000000);

  });
}

setTimeout(updatePer(), 72000000000);

var myjson2;

$.getJSON("https://richlist.arhash.xyz/overalls.php", function(data) {
  myjson2 = `${data.supply}`;
});

var myjson;

$.getJSON("https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true", function(data) {
  myjson = `${data.market_data.current_price.usd}`;
});

function updateDiff2() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 19905066.69);


    $(".price2").html(text);
    setTimeout(updateDiff2(), 72000000000);

  });
}

setTimeout(updateDiff2(), 72000000000);

function updateDiff3() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 19905066.69)  * myjson;


    $(".price3").html(text);
    setTimeout(updateDiff3(), 72000000000);

  });
}

setTimeout(updateDiff3(), 72000000000);
