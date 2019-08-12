//Currenct BTC Price
function updateDiff() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.last}`

    $(".price").html(text);
    setTimeout(updateDiff(), 72000000000);

  });
}

setTimeout(updateDiff(), 72000000000);

//Pulls % Change
function updatePer() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.change}`

    $(".per").html(text);
    setTimeout(updatePer(), 72000000000);

  });
}

setTimeout(updatePer(), 72000000000);

//Pulls Circ Supply
var myjson2;

$.getJSON("https://richlist.arhash.xyz/overalls.php", function(data) {
  myjson2 = `${data.supply}`;
});

// Pulls BTC Price
var myjson;

$.getJSON("https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true", function(data) {
  myjson = `${data.market_data.current_price.usd}`;
});

//BTC Value MCAP
function updateDiff2() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 19905066.69);


    $(".price2").html(text);
    setTimeout(updateDiff2(), 72000000000);

  });
}

setTimeout(updateDiff2(), 72000000000);

//USD Value MCAP
function updateDiff3() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 19905066.69)  * myjson;


    $(".price3").html(text);
    setTimeout(updateDiff3(), 72000000000);

  });
}

setTimeout(updateDiff3(), 72000000000);

//Chain Node BTC
function updateChain() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.last}` * 5000;

    $(".chain").html(text);
    setTimeout(updateChain(), 72000000000);

  });
}

setTimeout(updateChain(), 72000000000);

//Chain Node USD
function updateChain1() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 5000) * myjson;

    $(".chainu").html(text);
    setTimeout(updateChain1(), 72000000000);

  });
}

setTimeout(updateChain1(), 72000000000);

//XERO Node BTC
function updateXERO() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.last}` * 20000;

    $(".xero").html(text);
    setTimeout(updateXERO(), 72000000000);

  });
}

setTimeout(updateXERO(), 72000000000);

//XERO Node USD
function updateXERO1() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 20000) * myjson;

    $(".xerou").html(text);
    setTimeout(updateXERO1(), 72000000000);

  });
}

setTimeout(updateXERO1(), 72000000000);

//Link Node BTC
function updateLink() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.last}` * 40000;

    $(".link").html(text);
    setTimeout(updateLink(), 72000000000);

  });
}

setTimeout(updateLink(), 72000000000);

//Link Node USD
function updateLink1() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 40000) * myjson;

    $(".linku").html(text);
    setTimeout(updateLink1(), 72000000000);

  });
}

setTimeout(updateLink1(), 72000000000);

//Super Node BTC
function updateSuper() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.last}` * 80000;

    $(".super").html(text);
    setTimeout(updateSuper(), 72000000000);

  });
}

setTimeout(updateSuper(), 72000000000);

//Super Node USD
function updateSuper1() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 80000) * myjson;

    $(".superu").html(text);
    setTimeout(updateSuper1(), 72000000000);

  });
}

setTimeout(updateSuper1(), 72000000000);
