import $ from 'jquery';

export default function getConversion(response) {
  let amount = parseInt($('#amount').val());
  let usdTo = $("select#convertTo").val();
  if (response.result === "success" && typeof response.conversion_rates[`${usdTo}`] != "undefined") {
    let final = (amount * response.conversion_rates[`${usdTo}`]);
    $('#results').text(`$ ${amount} USD is equal to ${final} ${usdTo}`);
    console.log(response.conversion_rates.xyz);
  } else if (response.result === "success" && typeof response.conversion_rates[`${usdTo}`] == "undefined") {
    $('#results').text(`We're sorry, but that doesn't look to be a currency our application supports`);
  } else {
    $('#results').text(`We're sorry, but an error has occured. Error: ${response[`error-type`]}`);
  }
}