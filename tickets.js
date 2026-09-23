function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  let total = quantity * basePrice;
  if(quantity >= 5){
    total = total * 0.9; // 10% group discount
  }
  total = total * 1.5; // 50% VIP surchange for premium seating
  return Math.round(total); // rounding
}

module.exports = { isValidQuantity, calculateTicketPrice };
