var largeTransactionArray;
var transactionsListOutput = null;
var transactionsCategoriesOutput = null;
var startDate = "beginning";
var endDate = "end";
var total = 0;

function displayTransactionList() {
	if (transactionsListOutput == null) {
		transactionsListOutput = "";
		loadTransactionList();
	}
	var temp = "<table width='100%'><tbody><tr><td><h1 style='display: float;'>Transactions</h1><td>(" + startDate + " to " + endDate + ")</td></td><td><h2 class='textRight'>Net Change in Balance: £" + total + "</h2></td></tr></tbody></table>";
	temp += transactionsListOutput;
	document.getElementById("transactionList").innerHTML = temp;
}

function displayTransactionCategories() {
	if (transactionsCategoriesOutput == null) {
		transactionsCategoriesOutput = "";
		loadTransactionCategories();
	}
	var temp = "<table width='100%'><tbody><tr><td><h1 style='display: float;'>Transactions</h1><td>(" + startDate + " to " + endDate + ")</td></td><td><h2 class='textRight'>Net Change in Balance: £" + total + "</h2></td></tr></tbody></table>";
	temp += transactionsCategoriesOutput;
	document.getElementById("transactionList").innerHTML = temp;
}

function loadTransactionList() {
	total = 0;
	for (var i = 0; i < largeTransactionArray.length; i++) {
		var pageTransactionsArray = largeTransactionArray[i].transactions;
		for (var t = 0; t < pageTransactionsArray.length; t++) {
			total += pageTransactionsArray[t].amount;
			transactionsListOutput += loadSingleTransaction(pageTransactionsArray[t]);
			
		}
	}
}

function loadTransactionCategories() {
	total = 0;
	var sections = [];
	for (var i = 0; i < largeTransactionArray.length; i++) {
		var pageTransactionsArray = largeTransactionArray[i].transactions;
		for (var t = 0; t < pageTransactionsArray.length; t++) {
			var transaction = pageTransactionsArray[t];
			total += pageTransactionsArray[t].amount;
			var added = false;
			for (var s = 0; s < sections.length; s++) {
				if (sections[s].category.indexOf(dataParse(transaction.spendingCategory)) > -1) {
					added = true;
					sections[s].amount += transaction.amount;
					sections[s].transactionsList += loadSingleTransaction(transaction);
				}
				break;
			}
			if (!added) {
				var newSection = {
					"category": dataParse(transaction.spendingCategory),
					"amount": transaction.amount,
					"percent": 0,
					"transactionsList": loadSingleTransaction(transaction),
					"header1": "<div class='section'><table id='" + dataParse(transaction.spendingCategory) + "' onclick='toggleDetails(this.id)' width='100%'><tbody><tr><td><h2>" + dataParse(transaction.spendingCategory) + "</h2></td><td><h3 class='textRight'>",
					"header2": "</h3></td></tr></tbody></table><div id='details_" + dataParse(transaction.spendingCategory) + "' style='display: none;'>"
				}
				sections.push(newSection);
			}
		}
	}
	for (var s = 0; s < sections.length; s++) {
		transactionsCategoriesOutput += sections[s].header1 + sections[s].amount + sections[s].header2 + sections[s].transactionsList + "</div></div>";
	}
}

function loadSingleTransaction(transaction) {
	var wrapperClass;
		var moneyString;
		if (transaction.direction.indexOf("OUT") > -1) {
			wrapperClass = "outwrapper";
			moneyString = String(transaction.amount).substring(1);
		} else {
			wrapperClass = "inwrapper";
			moneyString = String(transaction.amount);
		}
		var newTransaction = "<div class='" + wrapperClass + "'  id='" + transaction.id + "' onclick='toggleDetails(this.id)'>";
		newTransaction += "<table width='100%'><tbody><tr><td><h2>" + transaction.narrative + " (";
		newTransaction += transaction.created.substring(0,10) + ")</h2></td><td>";
		newTransaction += "<h3 class='textRight'>£" + moneyString + "</h3></td></tr></tbody></table>";
		newTransaction += "<div id='details_" + transaction.id + "' style='display: none;'>";
		newTransaction += "<strong>Payment Method: </strong>" + dataParse(transaction.mastercardTransactionMethod) + "<br />";
		newTransaction += "<strong>Category: </strong>" + dataParse(transaction.spendingCategory) + "<br />";
		newTransaction += "<strong>Country: </strong>" + transaction.country;// + "<br />";
		//newTransaction += "<strong class='addresses'>Address of Transaction: </strong>" + transaction.merchantAddress + "<br />";
		newTransaction += "</div></div>";
		return newTransaction;
}

function toggleDetails(id) {
	var currentState = document.getElementById("details_" + id).style.display;
	if (currentState.indexOf("none") > -1) {
		document.getElementById("details_" + id).style.display = "block";
	} else {
		document.getElementById("details_" + id).style.display = "none";
	}
}

function dataParse(rawData) {
	var output = "";
	var i = rawData.indexOf("_");
	while (true) {
		if (i == -1) {
			output += rawData.substring(0, 1) + rawData.substring(1, rawData.length).toLowerCase();
			break;
		}
		output += rawData.substring(0, 1) + rawData.substring(1, i).toLowerCase() + " ";
		rawData = rawData.substring(i+1);
		i = rawData.indexOf("_");
	}
	return output;
}

function updateDateFilter() {
	var tempStart = document.getElementById("startdate").value;
	var tempEnd = document.getElementById("enddate").value;
	if (tempStart.length == 0 || tempEnd.length == 0 || startDate.indexOf(tempStart) < 0 || endDate.indexOf(tempEnd) < 0) {
		transactionsListOutput = null;
		transactionsCategoriesOutput = null;
		startDate = tempStart;
		endDate = tempEnd;
		if (startDate.length != 10) {
			startDate = "beginning";
		}
		if (endDate.length != 10) {
			endDate = "end";
		}
		if (document.getElementById("transactionList").innerHTML.indexOf("section") > -1) {
			displayTransactionCategories();
		} else {
			displayTransactionList();
		}
		var output = "";
	}
	document.getElementById("startdate").value = "";
	document.getElementById("enddate").value = "";
}

function loadLargeTransactionArray(largeArray) {
	jQuery.getJSON("./backend/get_transactions.php", function(json) {
		console.log(json.transactions);

	});
}