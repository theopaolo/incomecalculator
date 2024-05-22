function calculate() {
    const workDaysPerWeek = parseInt(document.getElementById('work_days_per_week').value);
    const vacationDays = parseInt(document.getElementById('vacation_days').value);
    const monthlyFees = parseInt(document.getElementById('monthly_fees').value);
    const desiredMonthlyNetIncome = parseInt(document.getElementById('desired_monthly_net_income').value);
    const chargeRate = parseFloat(document.getElementById('charge_rate').value);

    // Calculate the number of workable days per year (52 weeks in a year)
    const workableDaysPerYear = (52 * workDaysPerWeek) - vacationDays;

    // Calculate necessary monthly and annual gross income
    const totalMonthlyCost = monthlyFees + desiredMonthlyNetIncome;
    const necessaryMonthlyGrossIncome = totalMonthlyCost / (1 - chargeRate);
    const necessaryAnnualTurnover = necessaryMonthlyGrossIncome * 12;

    // Calculate necessary daily gross income
    const necessaryDailyGrossIncome = necessaryAnnualTurnover / workableDaysPerYear;

    // Display the results
    document.getElementById('workable_days_per_year_result').innerText = workableDaysPerYear.toFixed(0);
    document.getElementById('necessary_annual_turnover_result').innerText = necessaryAnnualTurnover.toFixed(2);
    document.getElementById('necessary_monthly_gross_income_result').innerText = necessaryMonthlyGrossIncome.toFixed(2);
    document.getElementById('necessary_daily_gross_income_result').innerText = necessaryDailyGrossIncome.toFixed(2);
}
