const contract_address = "0x9468445ba2fe2322a8cbb0af2c7caddfc5ad4815";
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
if (typeof web3 !== "undefined") {
window.web3 = new Web3(web3.currentProvider);
} else {
window.web3 = new Web3(
new Web3.providers.HttpProvider("http://127.0.0.1:7545")
);
}
var list = document.getElementById("list");

var contract = web3.eth.contract(abi).at(contract_address);
contract.get_c_num.call(function(err, result){
  var g_c_num = result;
  for(var i=1; i<=g_c_num; i++){

    contract.get_public_list.call(i, function(err, result){

   list.innerHTML += '<div class="card"><div class="card-header mb-5"><h3 class="card-title">' + result[1].toString() + '</h3><h5 class="card-category">Current views: ' + result[5].toString() + '</h5></div><div class="card-body"><p>$' + parseInt(result[3].toString(), 10) / parseInt(result[4].toString(), 10) + ' per view</p><br><button class="btn btn-primary btn-block" style="width:20%;">Promote Campaign</button></div></div>';     }) ;
  }
 }) ;

});
