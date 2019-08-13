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
//var myjson2;

//$.getJSON("https://richlist.arhash.xyz/overalls.php", function(data) {
//  myjson2 = `${data.supply}`;
//});

// Pulls BTC Price
var myjson;

$.getJSON("https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true", function(data) {
  myjson = `${data.market_data.current_price.usd}`;
});

//BTC Value MCAP
function updateDiff2() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 19905066.69);
    var fix = text.toFixed(4);


    $(".price2").html(fix);
    setTimeout(updateDiff2(), 72000000000);

  });
}

setTimeout(updateDiff2(), 72000000000);

//USD Value MCAP
function updateDiff3() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 19905066.69) * myjson;
    var usdm = text.toFixed(3);


    $(".price3").html(usdm);
    setTimeout(updateDiff3(), 72000000000);

  });
}

setTimeout(updateDiff3(), 72000000000);

//Chain Node BTC
function updateChain() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.last}` * 5000;
    var fix = text.toFixed(5);

    $(".chain").html(fix);
    setTimeout(updateChain(), 72000000000);

  });
}

setTimeout(updateChain(), 72000000000);

//Chain Node USD
function updateChain1() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 5000) * myjson;
    var usdm = text.toFixed(3);

    $(".chainu").html(usdm);
    setTimeout(updateChain1(), 72000000000);

  });
}

setTimeout(updateChain1(), 72000000000);

//XERO Node BTC
function updateXERO() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.last}` * 20000;
    var fix = text.toFixed(5);

    $(".xero").html(fix);
    setTimeout(updateXERO(), 72000000000);

  });
}

setTimeout(updateXERO(), 72000000000);

//XERO Node USD
function updateXERO1() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 20000) * myjson;
    var usdm = text.toFixed(3);

    $(".xerou").html(usdm);
    setTimeout(updateXERO1(), 72000000000);

  });
}

setTimeout(updateXERO1(), 72000000000);

//Link Node BTC
function updateLink() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.last}` * 40000;
    var fix = text.toFixed(5);

    $(".link").html(fix);
    setTimeout(updateLink(), 72000000000);

  });
}

setTimeout(updateLink(), 72000000000);

//Link Node USD
function updateLink1() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 40000) * myjson;
    var usdm = text.toFixed(3);

    $(".linku").html(usdm);
    setTimeout(updateLink1(), 72000000000);

  });
}

setTimeout(updateLink1(), 72000000000);

//Super Node BTC
function updateSuper() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.last}` * 80000;
    var fix = text.toFixed(5);

    $(".super").html(fix);
    setTimeout(updateSuper(), 72000000000);

  });
}

setTimeout(updateSuper(), 72000000000);

//Super Node USD
function updateSuper1() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = (`${data.ticker.last}` * 80000) * myjson;
    var usdm = text.toFixed(3);

    $(".superu").html(usdm);
    setTimeout(updateSuper1(), 72000000000);

  });
}

setTimeout(updateSuper1(), 72000000000);

//Currenct BTC Price
function updatePusd() {
  $.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

    var text = `${data.ticker.last}` * myjson;
    var usd = text.toFixed(5);

    $(".priceu").html(usd);
    setTimeout(updatePusd(), 72000000000);

  });
}

setTimeout(updatePusd(), 72000000000);

//calc btc
var myjson3;

$.getJSON("https://tradecx.io/api/tickers/xerobtc", function(data) {
  myjson3 = `${data.ticker.last}`;
});

function calc() {
  var xeroamount = parseFloat(document.getElementById('xeroamount').value); {
    document.getElementById('result').value = xeroamount * myjson3;
  }
}

//calc usd

function calc2() {
  var xeroamount2 = parseFloat(document.getElementById('xeroamount2').value); {
    document.getElementById('result2').value = (xeroamount2 * myjson3) * myjson;
  }
}
