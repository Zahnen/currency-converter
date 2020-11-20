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
        let amount = parseInt($('#amount').val());
        let usdTo = $("select#convertTo").val();
        if (usdTo === "DKK") {
          let final = (amount * response.conversion_rates.DKK);
          $('#results').text(`$ ${amount} USD is equal to ${final} DKK`);
        } else if (usdTo === "IDR") {
          let final = (amount * response.conversion_rates.IDR);
          $('#results').text(`$ ${amount} USD is equal to ${final} IDR`);
        } else if (usdTo === "EUR") {
          let final = (amount * response.conversion_rates.EUR);
          $('#results').text(`$ ${amount} USD is equal to ${final} EUR`);
        } else if (usdTo === "MXN") {
          let final = (amount * response.conversion_rates.IDR);
          $('#results').text(`$ ${amount} USD is equal to ${final} MXN`);
        } else if (usdTo === "CAD") {
          let final = (amount * response.conversion_rates.CAD);
          $('#results').text(`$ ${amount} USD is equal to ${final} CAD`);
        }
      });
  });
});