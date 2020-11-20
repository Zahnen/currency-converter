import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange-service.js';

$(document).ready(function() {
  $('#exchangeForm').submit(function(event) {
    event.preventDefault();
    Exchange.convertUSD()
      .then(function(response) {
        console.log(response);
        console.log(response.conversion_rates);
      });
  });
});

// let amount = $('#amount').val();
// let usdTo = $("select#convertTo").val();
// $('#results').text(`$ ${amount} USD is equal to ${usdTo}.`);