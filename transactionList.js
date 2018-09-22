var transactionsListOutput = ""

function displayTransactionList(largeTransactionArray) {
	if (transactionsListOutput == "") {
		loadTransactionList(largeTransactionArray);
	}
	document.getElementById("transactionList").innerHTML = transactionsListOutput;
}

function loadTransactionList(largeTransactionArray) {
	for (var i = 0; i < largeTransactionArray.length; i++) {
		var pageTransactionsArray = largeTransactionArray[i].transactions;
		for (var t = 0; t < pageTransactionsArray.length; t++) {
			var transaction = pageTransactionsArray[t];
			var wrapperClass;
			var moneyString;
			if (transaction.direction.indexOf("OUT") > -1) {
				wrapperClass = "outwrapper";
				moneyString = String(transaction.amount).substring(1) + " " + transaction.currency;
			} else {
				wrapperClass = "inwrapper";
				moneyString = String(transaction.amount) + " " + transaction.currency;
			}
			var newTransaction = "<div class='" + wrapperClass + "'  id='" + transaction.id + "' transaction.onclick='toggleDetails(this.id)'>";
			newTransaction += "<table width='100%'><tbody><tr><td><h1>" + transaction.narrative + " (";
			newTransaction += transaction.created.substring(0,10) + ")</h1></td><td>";
			newTransaction += "<h2 class='textRight'>" + moneyString + "</h2></td></tr></tbody></table>";
			newTransaction += "<div id='details_" + transaction.id + "' style='display: none;'>";
			newTransaction += "<strong>Payment Method: </strong>" + transaction.mastercardTransactionMethod + "<br />";
			newTransaction += "<strong>Category: </strong>" + transaction.spendingCategory + "<br />";
			newTransaction += "<strong>Country: </strong>" + transaction.country;// + "<br />";
			//newTransaction += "<strong class='addresses'>Address of Transaction: </strong>" + transaction.merchantAddress + "<br />";
			newTransaction += "</div></div>";
			transactionsListOutput += newTransaction;
		}
	}
}

function toggleDetails(id) {
	var currentState = document.getElementById("details_" + id).style.display;
	if (currentState.contains("none")) {
		document.getElementById("details_" + id).style.display = "block";
	} else {
		document.getElementById("details_" + id).style.display = "none";
	}
}