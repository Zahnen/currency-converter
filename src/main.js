import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange-service.js';

// function convert() {
//   let amount = $('#amount').val();
//   let usdTo = $("select#convertTo").val();
//   let final = (amount * response.conversion_rates.USD)
//   $('#results').text(`$ ${amount} USD is equal to ${usdTo}. ${final}`);
// }

$(document).ready(function() {
  $('#exchangeForm').submit(function(event) {
    event.preventDefault();
    Exchange.convertUSD()
      .then(function(response) {
        let amount = parseInt($('#amount').val());
        let usdTo = $("select#convertTo").val();
        let rate = response.conversion_rates.EUR;
        let final = (amount * rate);
        $('#results').text(`$ ${amount} USD is equal to ${final} ${usdTo}.`);
      });
  });
});