import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange-service.js';
import getConversion from './js/getConversion.js';

$(document).ready(function() {
  $('#exchangeForm').submit(function(event) {
    event.preventDefault();
    Exchange.convertUSD()
      .then(function(response) {
        getConversion(response);
      });
  });
});