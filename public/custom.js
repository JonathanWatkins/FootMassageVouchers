/* Config */
var interestRate = 0.1;
var currency = 'USD';
var transactionFee = 0.02;
var startingFunds = 1E6;
var tradeLimit = 2000;
/* end Config */

// Placeholder
//function GetExternalData()
//{
  /*var gameData = {
    'Share A' :[ 100, 114.8414657, 118.2470432, 129.1500565, 133.4615956, 135.0292187, 142.1379071, 127.8689748, 132.4886364, 154.0075277, 158.6206989, 142.4269814, 138.5917506],
    'Call A' : [ 16.73413358, 27.1076512, 29.01064913, 37.73791156, 40.80309484, 41.34452072, 47.29121763, 32.59866581, 36.03461412, 56.48249788, 60.27372055, 43.25688473, 38.59175058],
    'Put A' : [ 7.217875386, 3.50710902, 2.768047375, 1.362203669, 0.892197768, 0.648847053, 0.27625294, 0.648636677, 0.267587763, 0.005961426, 0.000167042, 3.26E-05, 0],
    'Share B' : [100,98.43151312,98.75970582,114.7981615,136.3326824,158.0129332,168.2009878,180.8014057,162.7675335,119.1217318,113.7170723,133.6113685,101.1570266],
    'Call B' : [23.92674483,21.75593992,20.79965657,30.8690763,47.16800316,65.55882759,74.07638891,85.27559034,66.55501363,24.81560016,18.38628953,34.5592185,1.157026607],
    'Put B' : [14.41048663,14.56535032,14.04439221,8.84526342,4.386019309,1.879439414,0.998343573,0.393130307,0.509090141,3.224859538,3.016362607,0.117979277,0],
    'Share C' : [100,101.9725439,88.72091611,94.32038988,95.99131318,95.71019482,102.922829,96.86308398,76.53401086,93.59448601,66.55125236,80.5606921,77.8260129],
    'Call C' : [23.92674483,24.12193136,14.72156086,16.81918402,16.57897083,15.08751669,18.13444073,12.83517308,2.910373641,7.666088139,0.175671877,0.432236852,0],
    'Put C' : [14.41048663,13.390311,18.00508622,15.27314277,14.13835616,13.71086686,10.33455414,11.89103482,23.09797283,11.60259333,31.97156489,19.04167401,22.1739871],
    'Share D' : [100,102.3906081,101.8674708,102.2914146,104.0423178,106.4125137,106.991208,112.5461449,115.6370665,120.9714637,123.2366675,131.3253908,138.1964297],
    'Call D' : [10.30815093,11.66402472,10.45063575,10.06470914,10.85672443,12.26635775,12.01096093,16.64164437,18.9171248,23.44048203,24.88952211,32.15526157,38.19642966],
    'Put D' : [0.791892729,0.514340174,0.587606396,0.547643193,0.365105103,0.187389019,0.142695367,0.014445134,0.001668304,9.50E-06,1.26E-08,3.78E-23,0],
    'Share E' : [100,90.99550467,98.41366033,112.9329817,109.2586223,116.8901437,117.4210261,121.3853223,146.942264,138.2928418,114.3825156,119.2795977,109.3743677],
    'Call E' : [20.31846931,13.71435757,17.22854679,26.41089072,22.44948548,27.09638621,26.23316686,28.18964643,50.60111488,41.139816,17.6932707,20.40170462,9.374367731],
    'Put E' : [10.80221111,13.95977643,10.81932793,6.252257693,6.741561722,4.539787538,3.935083196,2.723269839,0.380460963,0.377965402,1.657900484,0.292236203,0]
  };*/


   /*  Month 0
  var studentData = {
    'Share A' : [0],
    'Call A' : [0],
    'Put A' : [0],
    'Share B' : [0],
    'Call B' : [0],
    'Put B' : [0],
    'Share C' : [0],
    'Call C' : [0],
    'Put C' : [0],
    'Share D' : [0],
    'Call D' : [0],
    'Put D' : [0],
    'Share E' : [0],
    'Call E' : [0],
    'Put E' : [0]
  };
   */

   /*  Month 4
  var studentData = {
    'Share A' : [0,1000,1000,1000,],
    'Call A' : [0,-2000,1000,-2000],
    'Put A' : [0,3000,2000,1000],
    'Share B' : [0,0,0,2000],
    'Call B' : [0,0,0,3000],
    'Put B' : [0,0,0,-3000],
    'Share C' : [0,0,0,-5000],
    'Call C' : [0,0,0,-2000],
    'Put C' : [0,0,0,-3000],
    'Share D' : [0,0,0,-1500],
    'Call D' : [0,0,0,0],
    'Put D' : [0,0,0,0],
    'Share E' : [0,0,0,0],
    'Call E' : [0,0,0,0],
    'Put E' : [0,0,0,0],
  };
   */

  //  Month 11
/*
  var studentData = {
    'Share A' : [0,10000,10000,20000,1000,0,-2000,-2000,-5000,10000,15000,0],
    'Call A' : [0,-2000,1000,3000,50000,-2000,3000,5000,-6000,4000,8000,6000],
    'Put A' : [0,3000,2000,1000,6000,3000,2000,5000,40000,1000,2000,3000],
    'Share B' : [0,0,0,0,0,0,0,0,0,0,0,-2000],
    'Call B' : [0,0,0,0,0,0,0,0,0,0,0,200],
    'Put B' : [0,0,0,0,0,0,0,0,0,0,0,-300],
    'Share C' : [0,0,0,0,0,0,0,0,0,0,0,500],
    'Call C' : [0,0,0,0,0,0,0,0,0,0,0,0-3000],
    'Put C' : [0,0,0,0,0,0,0,0,0,0,0,500],
    'Share D' : [0,0,0,0,0,0,0,0,0,0,0,-200],
    'Call D' : [0,0,0,0,0,0,0,0,0,0,0,0],
    'Put D' : [0,0,0,0,0,0,0,0,0,0,0,0],
    'Share E' : [0,0,0,0,0,0,0,0,0,0,0,0],
    'Call E' : [0,0,0,0,0,0,0,0,0,0,0,0],
    'Put E' : [0,0,0,0,0,0,0,0,0,0,0,0],
  };


  var keys = ['Share A', 'Call A', 'Put A', 'Share B', 'Call B', 'Put B', 'Share C', 'Call C', 'Put C', 'Share D', 'Call D', 'Put D', 'Share E', 'Call E', 'Put E'];

  return { Game: gameData, Student: studentData, Keys: keys}*/
//}/*


// Main
$(function()
{
  //var externalData = GetExternalData();
  var calculatedData = CalculateData(externalData.Student, externalData.Game, externalData.Keys);
  var currentMonth = calculatedData.length - 1;
  $('#Title').css({'margin' : 0, 'margin-bottom' : 20}).text('Month ' + currentMonth);

  UpdateCurrentDashboard (calculatedData, externalData.Student, externalData.Keys, currentMonth);
  UpdateMarket (externalData.Game, externalData.Keys, currentMonth);
  UpdatePortfolio (calculatedData[currentMonth].Money, externalData.Student, externalData.Game, externalData.Keys, currentMonth);
  UpdateCurrentPortfolio(externalData.Student, externalData.Game, externalData.Keys, currentMonth);
})


function UpdateCurrentDashboard(calculatedData, studentData, keys, currentMonth)
{
  var CurrentTotal = calculatedData[currentMonth].Money + calculatedData[currentMonth].Assets;
  var Change = (calculatedData[currentMonth].Interest + calculatedData[currentMonth].shareWorthChange);


  $('#Last-Funds').text(calculatedData[currentMonth].Money.toLocaleString('en-UK', { style: 'currency', currency: currency }));
  $('#Last-Assets').text(calculatedData[currentMonth].Assets.toLocaleString('en-UK', { style: 'currency', currency: currency }));

  var str = '';

  if ( calculatedData[currentMonth].Interest >= 0 )
    str += '<tr><td>Interest</td><td style="color:green">' + calculatedData[currentMonth].Interest.toLocaleString('en-UK', { style: 'currency', currency: currency }) + '</td></tr>';
  else
    str += '<tr><td>Debt</td><td  style="color:red">' + calculatedData[currentMonth].Interest.toLocaleString('en-UK', { style: 'currency', currency: currency }) + '</td></tr>';

  str += '<tr><td>Asset Price Changes</td>'
  if ( calculatedData[currentMonth].shareWorthChange >= 0 )
    str += '<td style="color:green">' + calculatedData[currentMonth].shareWorthChange.toLocaleString('en-UK', { style: 'currency', currency: currency }) + '</td>';
  else
    str += '<td style="color:red">' + calculatedData[currentMonth].shareWorthChange.toLocaleString('en-UK', { style: 'currency', currency: currency }) + '</td>';

  str += '</tr>'

  if ( Change > 0 )
    str += '<tr class="success"><td>Total</td><td style="color:green">' + Change.toLocaleString('en-UK', { style: 'currency', currency: currency }) + '</td></tr>';
  else if ( Change < 0 )
    str += '<tr class="danger"><td>Total</td><td style="color:red">' + Change.toLocaleString('en-UK', { style: 'currency', currency: currency }) + '</td></tr>';
  else
    str += '<tr class="warning"><td>Total</td><td style="color:orange">' + Change.toLocaleString('en-UK', { style: 'currency', currency: currency }) + '</td></tr>';

  $('#Last-Table tbody').html(str);

  var arr = []
  var yMax = 1E6;
  var yMin = 0;

  for ( var i = 0; i < currentMonth + 1; i++ )
  {
    arr.push({
      period : 'Month ' + i,
      total : calculatedData[i].Money + calculatedData[i].Assets,
      money : calculatedData[i].Money,
      assets :  calculatedData[i].Assets
    });

    yMax = Math.max(yMax, calculatedData[i].Money, calculatedData[i].Assets, calculatedData[i].Money + calculatedData[i].Assets);
    yMin = Math.min(yMin, calculatedData[i].Money, calculatedData[i].Assets, calculatedData[i].Money + calculatedData[i].Assets);
  }

  yMax = Math.ceil(yMax / 200000) * 200000; // round up to .2m
  yMin = Math.floor(yMin / 200000) * 200000; // round down to .2m


  Morris.Line({
          element: 'Total-Tracker',
          data: arr,
          xkey: 'period',
          ykeys: [
            'total',
            'money',
            'assets',
          ],
          labels: [
            'Total',
            'Money',
            'Assets',
          ],
          pointSize: 3,
          hideHover: 'auto',
          resize: true,
          parseTime:false,
          ymax: yMax,
          ymin: yMin,
          goals: [0],
          yLabelFormat: function (y) { return y.toLocaleString('en-UK', { style: 'currency', currency: currency, maximumFractionDigits: 0 }) },
      });




}

function UpdateMarket(gameData, keys, currentMonth)
{
  for ( var i = 0; i < keys.length; i++)
  {
    var price = gameData[keys[i]][currentMonth];

    var str = '<td>' + keys[i] + '</td><td>' + price.toLocaleString('en-UK', { style: 'currency', currency: currency }) + '</td>';

    if ( currentMonth === 0 )
      var change = 0;
    else
      var change = price - gameData[keys[i]][currentMonth - 1]

    if ( change > 0 )
      str = '<tr class="success">' + str + '<td style="color:green"><i class="fa fa-chevron-up fa-1x"></i> ';
    else if ( change < 0 )
      str = '<tr class="danger">' + str + '<td style="color:red"><i class="fa fa-chevron-down fa-1x"></i> ';
    else
      str = '<tr class="warning">' + str + '<td style="color:orange"><i class="fa fa-minus fa-1x"></i> ';

    str += change.toLocaleString('en-UK', { style: 'currency', currency: currency }) + '</td></tr>';
    $('#Market-Table tbody').append(str);
    $('#Market-Table tr:eq(' + i + ')').mouseenter( function(){ UpdateMarketGraph.call(this, gameData, keys, currentMonth) } );
  }

  UpdateMarketGraph.call($('#Market-Table tr:eq(1)')[0], gameData, keys, currentMonth);
}
function UpdateMarketGraph(gameData, keys, currentMonth)
{
  var share = keys[this.rowIndex - 1];
  if ( typeof share === 'undefined' )
    return;

  var shareData = gameData[share];
  var arr = [];

  for ( var i = 0; i <= currentMonth; i++)
    arr.push({ period: 'Month ' + i, shareData : shareData[i] });

  $('#Market-Heading').text(share);
  $('#Market-Chart').empty();

    Morris.Line({
          element: 'Market-Chart',
          data: arr,
          xkey: 'period',
          ykeys: ['shareData'],
          labels: ['Share'],
          pointSize: 3,
          hideHover: 'auto',
          resize: true,
          parseTime:false,
          yLabelFormat: function (y) { return y.toLocaleString('en-UK', { style: 'currency', currency: currency }) },
      });
}

function UpdatePortfolio (oldMoney, studentData, gameData, keys, currentMonth)
{
  var buySelect = $('#Buy-Input select');
  var sellSelect = $('#Sell-Input select');

  for ( var i = 0; i < keys.length; i++ )
  {
    buySelect.append('<option>' + keys[i] + '</option>');
    sellSelect.append('<option>' + keys[i] + '</option>');
  }

  BuySellUpdate(oldMoney, studentData, gameData, keys, currentMonth, 'Buy')
  BuySellUpdate(oldMoney, studentData, gameData, keys, currentMonth, 'Sell')

  $('#Buy-Input input').keyup(  function() { BuySellUpdate(oldMoney, studentData, gameData, keys, currentMonth, 'Buy') } );
  $('#Buy-Input select').change(  function() { BuySellUpdate(oldMoney, studentData, gameData, keys, currentMonth, 'Buy') } );
  $('#Sell-Input input').keyup(  function() { BuySellUpdate(oldMoney, studentData, gameData, keys, currentMonth, 'Sell') } );
  $('#Sell-Input select').change(  function() { BuySellUpdate(oldMoney, studentData, gameData, keys, currentMonth, 'Sell') } );
}

function BuySellUpdate (oldMoney,studentData, gameData, keys, currentMonth, opt)
{
  var id = '#' + opt;

  // Get form data
  var selectedAsset = $(id + '-Input select').val();
  var enteredNumber = $(id + '-Input input').val();

  // Parse the number
  if (enteredNumber !== '')
  {
    if ( enteredNumber != parseInt(enteredNumber) )
    {
      $(id + '-Button').addClass('disabled').prop('disabled', true)
      return;
    }
    enteredNumber = parseInt(enteredNumber);
  }
  if ( enteredNumber < 0 )
    enteredNumber = NaN;

  // Calculate the new Asset count
  var oldAssetCount = studentData[selectedAsset][currentMonth];
  var newAssetCount = oldAssetCount;
  if ( opt === 'Buy' )
    newAssetCount += enteredNumber;
  else
    newAssetCount -= enteredNumber;

  // Calculate transaction charge
  var unitCost = gameData[selectedAsset][currentMonth];
  var transactionCharge = (transactionFee * enteredNumber * unitCost);

  // Get starting money
  var newMoney = oldMoney

  var shareCost = unitCost;

  var strAsset = '';
  var strTotal = '';

  if ( opt === 'Buy' )
  {
    shareCost *= enteredNumber;
    strAsset = '<td style="color:red">'
             + shareCost.toLocaleString('en-UK', { style: 'currency', currency: currency })
             + '</td>';

    strTotal = '<tr class="danger"><td>Total Cost</td><td style="color:red">'
             + (shareCost + transactionCharge).toLocaleString('en-UK', { style: 'currency', currency: currency })
             + '</td></tr>';
    newMoney -= (shareCost + transactionCharge);
  }
  else
  {
      var shareCost = shareCost * ( Math.abs(oldAssetCount) - Math.abs(newAssetCount) );

      if ( shareCost >= 0 )
      {
        strAsset = '<td style="color:green">'
             + shareCost.toLocaleString('en-UK', { style: 'currency', currency: currency })
             + '</td>';

        var check = shareCost - transactionCharge;
        if ( check >= 0 )
        {
          strTotal = '<tr class="success"><td>Total Profit</td><td style="color:green">'
                   + check.toLocaleString('en-UK', { style: 'currency', currency: currency })
                   + '</td></tr>';
        }
        else
        {
          strTotal = '<tr class="danger"><td>Total Cost</td><td style="color:red">'
                   + Math.abs(check).toLocaleString('en-UK', { style: 'currency', currency: currency })
                   + '</td></tr>';
        }
        newMoney += check;
      }
      else
      {
        strAsset = '<td style="color:red">'
                 + Math.abs(shareCost).toLocaleString('en-UK', { style: 'currency', currency: currency })
                 + '</td>';
        strTotal = '<tr class="danger"><td>Total Cost</td><td style="color:red">'
                   + (Math.abs(shareCost) + transactionCharge).toLocaleString('en-UK', { style: 'currency', currency: currency })
                   + '</td></tr>';
        newMoney -= (Math.abs(shareCost) + transactionCharge);
      }
    }

  var str = '<tr><td>' + selectedAsset +'</td>'
          + strAsset
          + '<tr><td >Transaction Charge</td><td style="color:red">'
          + transactionCharge.toLocaleString('en-UK', { style: 'currency', currency: currency })
          + '</td></tr>'
          + strTotal

  $(id + '-Table tbody').html(str);

  $(id + '-Resulting-Funds').text(newMoney.toLocaleString('en-UK', { style: 'currency', currency: currency }));
  $(id + '-Resulting-Assets').text(newAssetCount);

  if ( isNaN(newMoney) || enteredNumber > tradeLimit || enteredNumber === '' || enteredNumber === 0)
    $(id + '-Button').addClass('disabled').prop('disabled', true);
  else
    $(id + '-Button').removeClass('disabled').prop('disabled', false);

  $(id + '-Button').off('click');
  $(id + '-Button').one('click', function(){clickBuySell(id, selectedAsset, newAssetCount, newMoney, studentData, gameData, keys, currentMonth)});
}

clickBuySell = function(id, selectedAsset, newAssetCount, newMoney, studentData, gameData, keys, currentMonth)
{
  var local = studentData;
  var change = Math.abs(newAssetCount -  studentData[selectedAsset][currentMonth])
  local[selectedAsset][currentMonth] = newAssetCount



  for ( var i = 0; i < keys.length; i++ )
  {
    if ( keys[i] === selectedAsset )
      continue;

    local[keys[i]][currentMonth] = studentData[keys[i]][currentMonth];
  }

  $(id + '-Input input').val('');
  BuySellUpdate(newMoney, local, gameData, keys, currentMonth, 'Buy');
  BuySellUpdate(newMoney, local, gameData, keys, currentMonth, 'Sell');
  UpdateCurrentPortfolio (local, gameData, keys, currentMonth)
  $(id + '-Button').addClass('disabled').prop('disabled', true);


  var str = '<li class="list-group-item">';

  if ( id === '#Buy')
    str += 'Bought ';
  else
    str += 'Sold ';

  str += change +  ' of ' +  selectedAsset + '</li>'

  var historyList = $('.Session-History');
  historyList.find('.active').after(str);

  if ( historyList.eq(0).children().length  === 7 )
  {
    var secondLastItem = historyList.find('li:nth-last-child(2)');
    var lastItem = historyList.find('li:last-child')

    var text = lastItem.text();
    var reg = /And (\d*) more items/;
    var test = reg.exec(text);

    if ( test === null )
      lastItem.after('<li class ="list-group-item list-group-item-disabled"><i>And 2 more items</i></li>');
    else
      lastItem.after('<li class ="list-group-item list-group-item-disabled"><i>And ' + (parseInt(test[1]) + 1) + ' more items</i></li>');

    lastItem.remove();
    secondLastItem.remove();
  }

  // Update portfolio fn
  $('#Buy-Input input').off('keyup').keyup(  function() { BuySellUpdate(newMoney, local, gameData, keys, currentMonth, 'Buy') } );
  $('#Buy-Input select').off('change').change(  function() { BuySellUpdate(newMoney, local, gameData, keys, currentMonth, 'Buy') } );
  $('#Sell-Input input').off('keyup').keyup(  function() { BuySellUpdate(newMoney, local, gameData, keys, currentMonth, 'Sell') } );
  $('#Sell-Input select').off('change').change(  function() { BuySellUpdate(newMoney, local, gameData, keys, currentMonth, 'Sell') } );

}

function CalculateData (studentData, gameData, keys, internal = false)
{
  var calculatedData = [];

  var Money = startingFunds;

  for ( var i = 0; i < studentData[keys[0]].length; i++)
  {
    var Assets = 0;
    var shareWorthChange = 0;

    for ( var j = 0; j < keys.length; j++ )
    {
      var ShareChange = 0;
      var oldCost = gameData[keys[j]][i];

      if ( i === 0 )
        ShareChange = studentData[keys[j]][i];
      else
      {
        ShareChange = studentData[keys[j]][i] - studentData[keys[j]][i - 1];
        oldCost = gameData[keys[j]][i - 1];
      }

      var ShareCost = gameData[keys[j]][i] * ShareChange;
      var TransactionCharge = transactionFee * Math.abs( ShareChange ) * gameData[keys[j]][i];
      Money -= ShareCost + TransactionCharge;

      var shareWorth = studentData[keys[j]][i] * gameData[keys[j]][i];
      Assets += shareWorth;

      shareWorthChange += ( gameData[keys[j]][i] - oldCost ) * studentData[keys[j]][i];
    }

    var interest = 0;
    var newMoney = Money;

    if ( i > 0 && !(internal && i === (studentData[keys[0]].length - 1)) )
    {
      newMoney *= Math.exp(interestRate/12);
      interest = newMoney - Money;
    }

    calculatedData.push({'Money' : newMoney, 'Assets' : Assets, 'Interest': interest, 'shareWorthChange': shareWorthChange});
  }

  return calculatedData;
}

function UpdateCurrentPortfolio (studentData, gameData, keys, currentMonth)
{
  var arrShares = [];
  var arrShorts = [];

  for ( var i = 0; i < keys.length; i++ )
  {
    var numShare = studentData[keys[i]][currentMonth];
    var costShare = gameData[keys[i]][currentMonth];
    var totalCost = numShare * costShare;
    if ( numShare > 0 )
      arrShares.push({label: keys[i], value: numShare, totalCost: totalCost});

    if ( numShare < 0 )
      arrShorts.push({label: keys[i], value: -numShare, totalCost: totalCost});
  }

  if ( arrShares.length !== 0 )
  {
    $('#Shares-Panel').show();
    var str = '';
    for ( var i = 0; i < arrShares.length; i++ )
      str += '<tr><td>' + arrShares[i].label
          +  '</td><td>' + arrShares[i].value
          + '</td><td>' + arrShares[i].totalCost.toLocaleString('en-UK', { style: 'currency', currency: currency })
          + '</td></tr>';
    $('#Shares-Table tbody').empty().html(str);

    $('#Shares-Donut').empty();
   Morris.Donut({
          element: 'Shares-Donut',
          data: arrShares,
          formatter: function (y, data) { return data.value + ' (' + data.totalCost.toLocaleString('en-UK', { style: 'currency', currency: currency }) + ')' },
          resize: true
    });

    verticalAlign('Shares');
    $(window).resize(function(){ verticalAlign('Shares') });

  }
  else
    $('#Shares-Panel').hide();

  if ( arrShorts.length !== 0 )
  {
    $('#Shorts-Panel').show();
    var str = '';
    for ( var i = 0; i < arrShorts.length; i++ )
      str += '<tr><td>' + arrShorts[i].label
          +  '</td><td>' + arrShorts[i].value
          + '</td><td>' + arrShorts[i].totalCost.toLocaleString('en-UK', { style: 'currency', currency: currency })
          + '</td></tr>';
    $('#Shorts-Table tbody').empty().html(str);

    $('#Shorts-Donut').empty();
    Morris.Donut({
          element: 'Shorts-Donut',
          data: arrShorts,
          formatter: function (y, data) { return data.value + ' (' + data.totalCost.toLocaleString('en-UK', { style: 'currency', currency: currency }) + ')' },
          resize: true
    });

    verticalAlign('Shorts');
    $(window).resize(function(){ verticalAlign('Shorts') });
  }
  else
    $('#Shorts-Panel').hide();
}

function verticalAlign (name)
{
  var donut = $('#' + name + '-Donut').height();
  var table = $('#' + name + '-Table').height()+30; //+30 for padding

  if ( donut === 0 )
     $('#' + name + '-Table').css('margin-top', '');
  else if ( donut > table )
    $('#' + name + '-Table').css('margin-top', (donut - table)/2);
  else
    $('#' + name + '-Donut').css('margin-top', (table - donut)/2);
}
