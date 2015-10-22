'use strict';
var $ = require('jquery');

var $begin = $('#begin');
var $itemForm = $('#itemForm');
var $finish = $('#finish');
var $itemName = $('#name');
var $itemPrice = $('#price');
var $itemQuantity = $('#quantity');
var $subtotal = $('#subtotal');
var $total = $('#total');

$itemForm.hide();
$finish.hide();
$('#itemList').hide();
var prices = [];
var subtotal = 0;

$begin.on('click', function(e) {
	$('#welcome').hide();
	$begin.hide();
	$itemForm.show();
	$finish.show();
	$('#itemList').show();
})

$itemForm.on('submit', function(e) {
	e.preventDefault();
	prices.push($itemPrice.val()*$itemQuantity.val());
	for(var i = 0; i < prices.length; i++) {
		subtotal += prices[i];
		console.log(prices);
	}
	$('#itemList').append('<div>' + $itemName.val() + ' @ ' + $itemPrice.val() + ' X ' + $itemQuantity.val() + ' --> ' + ($itemQuantity.val() * $itemPrice.val()).toFixed(2) + '</div>')
	$subtotal.html('<div>Subtotal: $' + subtotal.toFixed(2) + '</div>');
	$itemName.val('');
	$itemPrice.val('');
	$itemQuantity.val('');
	$finish.show();
})

$finish.on('click', function(e) {
	$finish.hide();
	$total.html('<div>Tax: $' + (subtotal*5.5/100).toFixed(2) + '</div><div>Total: $' + (Math.round(subtotal * 105.5)/100).toFixed(2) + '</div>')
})


// subtotal = prices.forEach(toInteger).join('');
// console.log(subtotal);

