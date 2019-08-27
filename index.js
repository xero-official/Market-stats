//Currenct BTC Price
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = `${data.ticker.last}`

  $(".price").html(text);

});

//calc btc
var myjson3;

$.getJSON("https://tradecx.io/api/tickers/xerobtc", function(data) {
  myjson3 = `${data.ticker.last}`;

  $.getJSON('https://blocks.xerom.org/api?module=account&action=balance&address=0x93b7a5c74793dcba765a1dd163e1744622306651', function(result) {

    var amount = `${result.result}` / 1000000000000000000;
    var btcv = amount * myjson3;
    var value = btcv.toFixed(4);

    console.log(value + " Final Answer in BTC");
    console.log(amount + " XERO");
    console.log(btcv + " XERO * Current BTC Price")

    $(".locks").html(value);

  });

  $.getJSON('https://blocks.xerom.org/api?module=account&action=balance&address=0xe44389c26fdeb581dea7df91efd0665a7cd404c1', function(result) {

    var amountl = `${result.result}` / 1000000000000000000;
    var btcvl = amountl * myjson3;
    var valuel = btcvl.toFixed(4);

    console.log(valuel + " Final Answer in BTC");
    console.log(amountl + " XERO");
    console.log(btcvl + " XERO * Current BTC Price")

    $(".lockl").html(valuel);

  });

  $.getJSON('https://blocks.xerom.org/api?module=account&action=balance&address=0xc46cc53b8f09fe6f4eb6b6df8ad5c6fe5da6638b', function(result) {

    var amountx = `${result.result}` / 1000000000000000000;
    var btcvx = amountx * myjson3;
    var valuex = btcvx.toFixed(4);

    console.log(valuex + " Final Answer in BTC");
    console.log(amountx + " XERO");
    console.log(btcvx + " XERO * Current BTC Price")

    $(".lockx").html(valuex);

  });

  $.getJSON('https://blocks.xerom.org/api?module=account&action=balance&address=0x3717ad55666577eb92fca3e5f9f71958bd60c620', function(result) {

    var amountc = `${result.result}` / 1000000000000000000;
    var btcvc = amountc * myjson3;
    var valuec = btcvc.toFixed(4);

    console.log(valuec + " Final Answer in BTC");
    console.log(amountc + " XERO");
    console.log(btcvc + " XERO * Current BTC Price")

    $(".lockc").html(valuec);

  });

  $.getJSON('https://blocks.xerom.org/api?module=account&action=balance&address=0xb69b9216b5089dc3881a4e38f691e9b6943dfa11', function(result) {

    var amountd = `${result.result}` / 1000000000000000000;
    var btcvd = amountd * myjson3;
    var valued = btcvd.toFixed(4);

    console.log(valued + " Final Answer in BTC");
    console.log(amountd + " XERO");
    console.log(btcvd + " XERO * Current BTC Price")

    $(".lockd").html(valued);

  });

  console.log(myjson3 + ' TCX BTC Price');

});

//Pulls % Change
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = `${data.ticker.change}`

  $(".per").html(text);

});

// Pulls BTC Price
var myjson;

$.getJSON("https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true", function(data) {
  myjson = `${data.market_data.current_price.usd}`;

  var myjson3;

  $.getJSON("https://tradecx.io/api/tickers/xerobtc", function(data) {
    myjson3 = `${data.ticker.last}`;

    $.getJSON('https://blocks.xerom.org/api?module=account&action=balance&address=0xb69b9216b5089dc3881a4e38f691e9b6943dfa11', function(result) {

      var amountdu = `${result.result}` / 1000000000000000000;
      var btcvdu = amountdu * myjson3;
      var valuedu = btcvdu * myjson;
      var final = valuedu.toFixed(3)

      console.log(valuedu + " Final Answer in BTC");
      console.log(amountdu + " XERO");
      console.log(btcvdu + " XERO * Current BTC Price")

      $(".lockdu").html(final);

    });

  });

  console.log(myjson + " BTC USD Price");
});

//BTC Value MCAP
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = (`${data.ticker.last}` * 22942685);
  var fix = text.toFixed(4);


  $(".price2").html(fix);

});

//USD Value MCAP
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = (`${data.ticker.last}` * 22942685) * myjson;
  var usdm = text.toFixed(3);


  $(".price3").html(usdm);

});

//Chain Node BTC
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = `${data.ticker.last}` * 5000;
  var fix = text.toFixed(5);

  $(".chain").html(fix);

});

//Chain Node USD
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = (`${data.ticker.last}` * 5000) * myjson;
  var usdm = text.toFixed(3);

  $(".chainu").html(usdm);

});

//XERO Node BTC
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = `${data.ticker.last}` * 20000;
  var fix = text.toFixed(5);

  $(".xero").html(fix);

});

//XERO Node USD
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = (`${data.ticker.last}` * 20000) * myjson;
  var usdm = text.toFixed(3);

  $(".xerou").html(usdm);

});

//Link Node BTC
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = `${data.ticker.last}` * 40000;
  var fix = text.toFixed(5);

  $(".link").html(fix);

});

//Link Node USD
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = (`${data.ticker.last}` * 40000) * myjson;
  var usdm = text.toFixed(3);

  $(".linku").html(usdm);

});

//Super Node BTC
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = `${data.ticker.last}` * 80000;
  var fix = text.toFixed(5);

  $(".super").html(fix);

});

//Super Node USD
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = (`${data.ticker.last}` * 80000) * myjson;
  var usdm = text.toFixed(3);

  $(".superu").html(usdm);

});

//Currenct BTC Price
$.getJSON('https://tradecx.io/api/tickers/xerobtc', function(data) {

  var text = `${data.ticker.last}` * myjson;
  var usd = text.toFixed(5);

  $(".priceu").html(usd);

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
