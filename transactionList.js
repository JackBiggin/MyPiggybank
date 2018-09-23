var transactionsCategories;
var startDate = "beginning";
var endDate = "end";
var total = 0;

function loadLargeTransactionArray() {
	$.getJSON('./backend/get_transactions.php', function(data) {
		total = 0;
		var rawTransactions = data._embedded.transactions;
		var transactions = [];
		for (var i = 0; i < rawTransactions.length; i++) {
			total += rawTransactions[i].amount;
			transactions.push(loadSingleTransaction(rawTransactions[i]));
			// console.log("1: " + i);
		}
		document.getElementById("transactionHeader").innerHTML = "<table width='100%'><tbody><tr><td><h1 style='display: float;'>Transactions</h1><td>(" + startDate + " to " + endDate + ")</td></td><td><h2 class='textRight'>Net Change in Balance: £" + total + "</h2></td></tr></tbody></table>";
		document.getElementById("transactionList").innerHTML = "";
		for (var i = 0; i < transactions.length; i++) {
			document.getElementById("transactionList").innerHTML += transactions[i];
			// console.log("2: " + i);
		}
		loadMasterCardData();
		
	});
}

function displayTransactionCategories() {
	if (document.getElementById("transactionList").innerHTML.indexOf("section") == -1) {
		loadTransactionCategories();
		document.getElementById("transactionList").innerHTML = transactionsCategories;
	}
}

function loadTransactionCategories() {
	transactionsCategories = "";
	var largeTransactionArray = document.getElementById("transactionList").innerHTML.split(/<\/div>\s+<\/div>/);
	console.log("Starting loop");
	for (var i = 0; i < largeTransactionArray; i++) {
		console.log(largeTransactionArray[i]);
	}
	console.log("ending loop");
	var sections = [];
		for (var t = 0; t < largeTransactionArray.length; t++) {
		var transaction = largeTransactionArray[t];
		var added = false;
		for (var s = 0; s < sections.length; s++) {
			if (sections[s].category.indexOf(transaction.substring(transaction.indexOf("<strong>Category: </strong>")+27, transaction.indexOf("<br id='flag' />"))) > -1) {
				added = true;
				sections[s].amount += parseInt(transaction.substring(transaction.indexOf("£")+1,transaction.indexOf("</h3>")));
				sections[s].transactionsList += transaction;
			}
			break;
		}
		if (!added) {
			var newSection = {
				"category": transaction.substring(transaction.indexOf("<strong>Category: </strong>")+27, transaction.indexOf("<br id='flag' />")),
				"amount": parseInt(transaction.substring(transaction.indexOf("£")+1,transaction.indexOf("</h3>"))),
				"transactionsList": transaction,
				"header1": "<div class='section'><table id='" + transaction.substring(transaction.indexOf("<strong>Category: </strong>")+27, transaction.indexOf("<br id='flag' />")) + "' onclick='toggleDetails(this.id)' width='100%'><tbody><tr><td><h2>" + transaction.substring(transaction.indexOf("<strong>Category: </strong>")+27, transaction.indexOf("<br id='flag' />")) + "</h2></td><td><h3 class='textRight'>",
				"header2": "</h3></td></tr></tbody></table><div id='details_" + transaction.substring(transaction.indexOf("<strong>Category: </strong>")+27, transaction.indexOf("<br id='flag' />")) + "' style='display: none;'>"
			}
			sections.push(newSection);
		}
	}
	for (var s = 0; s < sections.length; s++) {
		transactionsCategories += sections[s].header1 + sections[s].amount + sections[s].header2 + sections[s].transactionsList + "</div></div>";
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
		newTransaction += "<strong>Source: </strong>" + dataParse(transaction.source) + "<br />";
		if (transaction.source.indexOf("MASTER") == -1) {
			newTransaction += "<strong>Category: </strong>" + dataParse(transaction.source) + "<br id='flag' />";
		}
		newTransaction += "</div></div>";
		return newTransaction;
}

function loadMasterCardData() {
	$.getJSON('./backend/get_mastercardInfo.php', function(data) {
		// console.log(data._embedded.transactions);
		for (var i = 0; i < data._embedded.transactions.length; i++) {
			var transaction = data._embedded.transactions[i];
			var newTransaction = "<strong>Payment Method: </strong>" + dataParse(transaction.mastercardTransactionMethod) + "<br />";
			newTransaction += "<strong>Category: </strong>" + dataParse(transaction.spendingCategory) + "<br id='flag' />";
			newTransaction += "<strong>Country: </strong>" + transaction.country + "<br />";
			newTransaction += "<strong>Address of Transaction: </strong><span class='address' id='address_" + transaction.id + "'>" + transaction.narrative + "</span><br />";
			switch(transaction.narrative) { // We're not trying to cheat, just our sandbox account doesnt include merchant access
				case "Target":
					newTransaction += '<iframe style="width: 100%; height: 400px;" frameborder=0 src="https://wego.here.com/search/32001 John R Rd, Madison Heights, MI 48071, USA"></iframe>';
					break;
				case "Amc":
					newTransaction += '<iframe style="width: 100%; height: 400px;" frameborder=0 src="https://wego.here.com/search/4300 Baldwin Rd, Auburn Hills, MI 48326"></iframe>';
					break;
				case "Pizza Hut":
					newTransaction += '<iframe style="width: 100%; height: 400px;" frameborder=0 src="https://wego.here.com/search/1360 Walton Blvd, Rochester, MI 48309"></iframe>';
					break;
				case "Starbucks":
					newTransaction += '<iframe style="width: 100%; height: 400px;" frameborder=0 src="https://wego.here.com/search/260 Adams Rd #260, Rochester Hills, MI 48309"></iframe>';
					break;
				case 'Amazon':
					break;
				default:
				newTransaction += '<iframe style="width: 100%; height: 400px;" frameborder=0 src="https://wego.here.com/search/Detroit"></iframe>';
			}

			document.getElementById('details_' + transaction.id).innerHTML = newTransaction;
		}
	});
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

loadLargeTransactionArray();