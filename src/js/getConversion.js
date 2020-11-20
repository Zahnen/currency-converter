import $ from 'jquery';

export default function getConversion(response) {
  let amount = parseInt($('#amount').val());
  let usdTo = ($("#convertTo").val()).toUpperCase();
  if (response.result === "success" && typeof response.conversion_rates[`${usdTo}`] != "undefined") {
    let final = (amount * response.conversion_rates[`${usdTo}`]);
    $('#results').text(`$ ${amount} USD is equal to ${final} ${usdTo}`);
  } else if (response.result === "success" && typeof response.conversion_rates[`${usdTo}`] == "undefined") {
    $('#results').html(`We're sorry, but that doesn't look to be a currency our application supports. To view a full list of supported currencies, <a href="https://www.exchangerate-api.com/docs/supported-currencies" target="_blank"> click here.</a>`);
  } else {
    $('#results').text(`We're sorry, but an error has occured. Error: ${response[`error-type`]}`);
  }
}