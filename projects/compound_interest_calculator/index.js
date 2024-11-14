const prompt = require('prompt-sync')()

// Compound interest calculator that prompts the user for some input and finally calculates the compounded interest value

// let init_amount  = 20000
// let monthly_contribution = 400
// let number_of_years = 30
// let interest_rate = 10

// step 1 - define a fucntion that we can use to calculate the final value of the compound interest

function compound_interest(init_amount, monthly_contribution, number_of_years, interest_rate) {
    let total = init_amount
    let annual_contributions = monthly_contribution * 12

    for (let i = 0; i < number_of_years; i++) {
        total = total + annual_contributions
        total = total * ((100 + interest_rate) / 100)
    }
    return total.toFixed(2)
}

function calculateRegular(init_amount, monthly_contribution, number_of_years) {
    return (init_amount + monthly_contribution * 12 * number_of_years).toFixed(2)
}



// step 2 - define a function that would calculate the difference (ie the effect that compounding has had)


// step 3 - create a run function that then prompts the user for all necessary inputs required to calculate the final amounts

function run() {
    let init_amount = parseInt(prompt("Enter the initial investment ($): "))
    let monthly_contribution = parseInt(prompt("Enter the monthly contribution ($): "))
    let number_of_years = parseInt(prompt("Enter the number of years: "))
    let interest_rate = parseInt(prompt("Enter the interest rate (%): "))

    printOutput(init_amount, monthly_contribution, number_of_years, interest_rate)
}

// step 4 - inside of said function, make a nice pretty print satement using a template literal string that gives the financial breakdown

function printOutput(init_amount, monthly_contribution, number_of_years, interest_rate) {
    let final_value = compound_interest(init_amount, monthly_contribution, number_of_years, interest_rate)
    let regular_value = calculateRegular(init_amount, monthly_contribution, number_of_years)

    let summary = `INIT_AMOUNT: $${init_amount}\nMONTHLY_CONTRIBUTION: $${monthly_contribution}\nNUMBER_OF_YEARS: ${number_of_years}\nINTEREST_RATE: ${interest_rate}\n\nFINAL_COMPOUNDED_VALUE: $${final_value}\nREGULAR_AMOUNT: $${regular_value}\nDIFFERENCE: $${(final_value - regular_value).toFixed(2)}`

    console.log(summary)
}

run()