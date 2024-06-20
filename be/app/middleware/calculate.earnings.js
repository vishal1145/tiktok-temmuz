function truncateToDecimals(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.floor(num * factor) / factor;
}

exports.calculateEarning = (first_commission, second_commission, third_commission, d) => {
    var rate = first_commission;
    if (d.diamonds_this_month >= 300000 && d.diamonds_this_month < 500000) {
        rate = second_commission;
    }
    if (d.diamonds_this_month >= 500000) {
        rate = third_commission;
    }
    let num = rate * d.diamonds_this_month / 100;
    let earn = truncateToDecimals(num, 2);
    return earn;//.toFixed(2);
}