<?php
    session_start();
?>
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <link rel="stylesheet" href="./assets/css/animate.css">

    <link rel="stylesheet" href="./assets/css/app.css">
    <link rel="stylesheet" href="All%20Site%20Styles.css">

	<script type="text/javascript" src="transactionList.js"></script>

    <title>myPiggybank</title>
</head>

<body>
 <nav class="navbar navbar-expand-lg navbar-dark">
        <button class="navbar-toggler pull-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        
        
        <span class="navbar-toggler-icon"></span>
      </button>
        <a class="navbar-brand p" href="./"><img src="./assets/logo_white.png" style="width:1.5em;height:auto" /> MyPiggybank</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="./login.html">Logout</a>
                </li>
            </ul>
        </div>
    </nav><br />
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8">
                <div id="test" class="card menu-option" onclick="window.open('./pasttransactions.html')">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-3">
                                <i class="fas fa-credit-card symbolImage"></i>
                            </div>
                            <div class="col-9">
                                <h2 class="card-title">View Past Transactions</h2>
                                <p class="card-text">See a list of your past transactions, or see an analysis of your spending.</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="card menu-option" onclick="window.open('./forecast.html')">
                <div class="card-body">
                    <div class="row">
                        <div class="col-3">
                            <i class="fas fa-chart-line symbolImage" ></i>
                        </div>
                        <div class="col-9">
                            <h2 class="card-title">Create A Forecast</h2>
                            <p class="card-text">Look at a prediction of your future spending based on your previous spending habits.</p>
                        </div>
                    </div>
                </div>
                </div>
                                <div class="card menu-option" onclick="window.open('./createBudget.html')">
                <div class="card-body">
                        <div class="row">
                            <div class="col-3">
                                <i class="fas fa-chart-bar symbolImage"></i>
                            </div>
                            <div class="col-9">
                                <h2 class="card-title">Create Budget</h2>
                                <p class="card-text">Manage your spening by creating a budget.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="sidebar">
                    <div class="avatar"><i class="fas fa-fw fa-user"></i></div>

                    <div style="text-align: center;font-size:1.2em;">Hi there, <?php echo $_SESSION['name']; ?>!</div>

                <!--<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="sized" src="Money1.jpg" alt="Money">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>1. Create a Financial Calendar</h5>
                    <p>If you don’t trust yourself to remember to pay your quarterly taxes or periodically pull a credit report, think about setting appointment reminders for these important money to-dos in the same way that you would an annual doctor’s visit or car tune-up. A good place to start? Our ultimate financial calendar.</p>
                    </div>
                    </div>

                    <div class="carousel-item">
                    <img class="sized" src="Money2.jpg" alt="Money">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>2. Check Your Interest Rate</h5>
                    <p>Q: Which loan should you pay off first? A: The one with the highest interest rate. Q: Which savings account should you open? A: The one with the best interest rate. Q: Why does credit card debt give us such a headache? A: Blame it on the compound interest rate. Bottom line here: Paying attention to interest rates will help inform which debt or savings commitments you should focus on.</p>
                    </div>
                    </div>

                    <div class="carousel-item">
                    <img class="sized" src="Money3.jpg" alt="Money">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>3. Track Your Net Worth</h5>
                    <p>Your net worth—the difference between your assets and debt—is the big-picture number that can tell you where you stand financially. Keep an eye on it, and it can help keep you apprised of the progress you’re making toward your financial goals—or warn you if you’re backsliding.</p>
                    </div>
                    </div>

                    <div class="carousel-item">
                    <img class="sized" src="Money4.jpg" alt="Money">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>4. Take a Daily Money Minute</h5>
                    <p>This one comes straight from LearnVest Founder and CEO Alexa von Tobel, who swears by setting aside one minute each day to check on her financial transactions. This 60-second act helps identify problems immediately, keep track of goal progress—and set your spending tone for the rest of the day!</p>
                    </div>
                    </div>

                    <div class="carousel-item">
                    <img class="sized" src="Money5.jpg" alt="Money">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>5. Allocate at Least 20% of Your Income Toward Financial Priorities</h5>
                    <p>By priorities, we mean building up emergency savings, paying off debt, and padding your retirement nest egg. </p>
                    </div>
                    </div>

                    <div class="carousel-item">
                    <img class="sized" src="Money6.jpg" alt="Money">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>6. Budget About 30% of Your Income for Lifestyle Spending</h5>
                    <p>This includes movies, restaurants, and happy hours—basically, anything that doesn’t cover basic necessities. By abiding by the 30% rule, you can save and splurge at the same time.</p>
                    </div>
                    </div>

                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
            </div> -->
                <br/>
                <hr/>
                <H3>Finance tip:</H3>
                <div id="randomFact">
                </div>
            </div>
        </div>
    </div>


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="quote%20randomizer.js"></script>
</body>

</html>
