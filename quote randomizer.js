$(document).ready(function(){
    var facts = [
    "<h5>Create a Financial Calendar</h5><p>If you don’t trust yourself to remember to pay your quarterly taxes or periodically pull a credit report, think about setting appointment reminders for these important money to-dos in the same way that you would an annual doctor’s visit or car tune-up. A good place to start? Our ultimate financial calendar.</p>",
    "<h5>Check Your Interest Rate</h5><p>Q: Which loan should you pay off first? A: The one with the highest interest rate. Q: Which savings account should you open? A: The one with the best interest rate. Q: Why does credit card debt give us such a headache? A: Blame it on the compound interest rate. Bottom line here: Paying attention to interest rates will help inform which debt or savings commitments you should focus on.</p>",
    "<h5>Track Your Net Worth</h5><p>Your net worth—the difference between your assets and debt—is the big-picture number that can tell you where you stand financially. Keep an eye on it, and it can help keep you apprised of the progress you’re making toward your financial goals—or warn you if you’re backsliding.</p>",
    "<h5>Take a Daily Money Minute</h5><p>This one comes straight from LearnVest Founder and CEO Alexa von Tobel, who swears by setting aside one minute each day to check on her financial transactions. This 60-second act helps identify problems immediately, keep track of goal progress—and set your spending tone for the rest of the day!</p>",
    "<h5>Allocate at Least 20% of Your Income Toward Financial Priorities</h5><p>By priorities, we mean building up emergency savings, paying off debt, and padding your retirement nest egg. </p>",
];
    //document.body.innerHTML = cars[Math.random(0,cars.length())];
    var random = Math.random(0, facts.length);
    document.getElementById('randomFact').innerHTML = facts[random];
});