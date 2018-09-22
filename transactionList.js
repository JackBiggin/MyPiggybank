function loadTransactionList(largeTransactionArray) {
	var container = document.getElementById("transactionList").innerHTML;
	container = "";
	for (int i = 0; i < largeTransactionArray.length; i++) {
		var pageTransactionsArray = largeTransactionArray[i].transactions;
		for (int t = 0; t < pageTransactionsArray.length; t++) {
			var transaction = pageTransactionsArray[i];
			var wrapperClass;
			var moneyString;
			if (transaction.direction.contains("OUT")) {
				wrapperClass = "outWrapper";
				moneyString = String(transaction.amount).substring(1) + " " + transaction.currency;
			} else {
				wrapperClass = "inWrapper";
				moneyString = String(transaction.amount) + " " + transaction.currency;
			}
			var newTransaction = "<div class='" + wrapperClass + "'>";
			newTransaction += "<table id='" + transaction.id + "' transaction.onclick=toggleDetails(this.id)width='100%'><tbody><tr><td><h1>" + transaction.narrative + " (";
			newTransaction += transaction.created.subString(0,10) + ")</h1></td><td>";
			newTransaction += "<h2 class='textRight'>" + moneyString + "</h2></td></tr></tbody></table>";
			newTransaction += "<div id='details_" + transaction.id + "' style='display: none;'>";
			newTransaction += "<strong>Payment Method: </strong>" + transaction.mastercardTransactionMethod + "<br />";
			newTransaction += "<strong>Category: </strong>" + transaction.spendingCategory + "<br />";
			newTransaction += "<strong>Country: </strong>" + transaction.country:// + "<br />";
			//newTransaction += "<strong class='addresses'>Address of Transaction: </strong>" + transaction.merchantAddress + "<br />";
			newTransaction += "</div></div>";
			container += newTransaction;
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