const contract_address = "0xa20800e128102c5de4cb75ceee213c2c5dc68a4e";
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_ammount",
				"type": "uint256"
			}
		],
		"name": "createUser",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "get_c_num",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_i",
				"type": "uint256"
			}
		],
		"name": "get_public_list",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_i",
				"type": "uint256"
			},
			{
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "get_my_campaigns",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_uid",
				"type": "uint256"
			},
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "takeCampaign",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "user_num",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_i",
				"type": "uint256"
			},
			{
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "get_taken_campaigns",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "get_my_campaign_num",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_url",
				"type": "string"
			},
			{
				"name": "_brand",
				"type": "string"
			},
			{
				"name": "_price",
				"type": "uint256"
			},
			{
				"name": "_max_views",
				"type": "uint256"
			},
			{
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "addCampaign",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "c_num",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "get_ammount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			},
			{
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "registerView",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

const transactionObject = {
  from: "0x145f29d38E703F10627CBaa3f0eD5aE8DC51E59d",
  gas: 529677,
  gasPrice: 5
};


window.addEventListener("load", function() {
	url = new URL(window.location.href);
var userid;
	if(location.search.indexOf('u=')>=0){
		console.log(url.searchParams.get('u'));
	  if(url.searchParams.get('u') == "2") {
	   var  userid = 2;
}
	} else {
	   var userid = 1;
}

if (typeof web3 !== "undefined") {
window.web3 = new Web3(web3.currentProvider);
} else {
window.web3 = new Web3(
new Web3.providers.HttpProvider("http://127.0.0.1:7545")
);
}
var list = document.getElementById("list");

var contract = web3.eth.contract(abi).at(contract_address);


if(location.search.indexOf('url=')>=0){
	console.log("url found");
	url = new URL(window.location.href);

var link = url.searchParams.get('url');
var price = parseInt(url.searchParams.get('price'));
var views = parseInt(url.searchParams.get('views'));
var brand = url.searchParams.get('brand');

console.log(link + "\n"+ brand+ "\n"+ price+ "\n"+ views+ "\n"+ userid);
contract.addCampaign.sendTransaction(link, brand, price, views, userid, transactionObject,  function(err, result){
	console.log(result);

if(result){
	console.log("Success.");
} else {
	window.alert("Insufficient fund in account. Kindly Recharge.");
}
	}) ;
}

contract.get_my_campaign_num.call(userid, function(err, result){
  var g_my_campaign_num = result;
  for(var i=1; i<=g_my_campaign_num; i++){

    contract.get_my_campaigns.call(i, userid, function(err, result){

   list.innerHTML += '<div class="card"><div class="card-header mb-5"><h3 class="card-title">' + result[1].toString() + '</h3><h5 class="card-category">Current views: ' + result[5].toString() + '</h5></div><div class="card-body"><p>Expected Views: ' + parseInt(result[4].toString(), 10) + '<br>Ammount Paid: ' + parseInt(result[3].toString(), 10) + '</p><br></div></div>';     }) ;
  }
 }) ;

});

function addCampaign() {

var url = document.getElementById("url").value;
var brand = document.getElementById("brand").value;
var views = document.getElementById("views").value;
var price = document.getElementById("price").value;
console.log(url);
console.log(encodeURI(url));


if(window.location.search.indexOf('?u=2')>=0) {
	window.location = window.location.host + "?u=2&url=" + encodeURI(url) + "&brand="+encodeURI(brand)+"&views="+encodeURI(views)+"&price="+encodeURI(price);
} else {
	window.location =window.location.host + "?url=" + encodeURI(url) + "&brand="+encodeURI(brand)+"&views="+encodeURI(views)+"&price="+encodeURI(price);
}

}
