const contract_address = "0xb3b5db3a12318c865f3b1170ab2cf13fe0f02243";
const abi =[
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
				"name": "_i",
				"type": "uint256"
			},
			{
				"name": "_uid",
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
				"name": "_index",
				"type": "uint256"
			},
			{
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "registerView",
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
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
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
	}
];

const transactionObject = {
  from: "0xd51C16cAE94f78d20D63b820016aFd40b916F8fC",
  gas: 529677,
  gasPrice: 5
};
var urlvar;
var cid;
var userid;

window.addEventListener("load", function() {
var campaignsnav = document.getElementById("campaignsnav");
var mycampaignsnav = document.getElementById("mycampaignsnav");
var uimage = document.getElementById("uimage");
  url = new URL(window.location.href);
  if(location.search.indexOf('u=')>=0){
    if(url.searchParams.get('u') == "2") {
    window.userid = 2;
     document.getElementById("username").innerHTML = "Username: User 2";
		 campaignsnav.setAttribute('href', "./index.html?u=2");
		 mycampaignsnav.setAttribute('href', "./mycampaigns.html?u=2");
		 uimage.setAttribute('src', "./assets/img/anime6.png");



}
  } else {
   window.userid = 1;
     document.getElementById("username").innerHTML = "Username: User 1";
		 campaignsnav.setAttribute('href', "./index.html");
		 mycampaignsnav.setAttribute('href', "./mycampaigns.html");
		 uimage.setAttribute('src', "./assets/img/anime3.png");

}


if (typeof web3 !== "undefined") {
window.web3 = new Web3(web3.currentProvider);
} else {
window.web3 = new Web3(
new Web3.providers.HttpProvider("HTTP://10.4.61.33:7545")
);
}
var list = document.getElementById("list");

var contract = web3.eth.contract(abi).at(contract_address);
contract.get_c_num.call(function(err, result){
  var g_c_num = result;
  for(var i=1; i<=g_c_num; i++){
		console.log("i = " + i + "u = " + window.userid);
    contract.get_public_list.call(i, window.userid, function(err, result){
      urlvar = result[2];
      cid = result[0];
      var disabled = "";
			console.log(parseInt(result[6].toString()));
      if(parseInt(result[6].toString()) == 0){ disabled = " disabled "}
   list.innerHTML += '<div class="card"><div class="card-header mb-5"><h3 class="card-title">' + result[1].toString() + '</h3><h5 class="card-category">Current views: ' + result[5].toString() + '</h5><h5 class="card-category">Expected views: ' + result[4].toString() + '</h5></div><div class="card-body"><p>$' + parseInt(result[3].toString(), 10) / parseInt(result[4].toString(), 10) + ' per view</p><br><inuput cla onclick="updatelink()" class="btn btn-primary btn-block" style="width:20%;" data-toggle="modal" data-target="#uniquelink" ' + disabled + '>Promote Campaign</button></div></div>';

      }) ;
  }
 }) ;

 contract.get_ammount.call(userid, function(err, result){
   document.getElementById("account").innerHTML = "Account balance: " + result;

});
});

function updatelink() {
  var cpypst = document.getElementById("unqid");
  console.log(urlvar);
	var code;
	code = CryptoJS.AES.encrypt(urlvar , "kie").toString();
	while(CryptoJS.AES.decrypt(code, "kie").toString(CryptoJS.enc.Utf8) != urlvar) {
		code = CryptoJS.AES.encrypt(urlvar , "kie").toString();
	}
	console.log(CryptoJS.AES.decrypt(code, "kie").toString(CryptoJS.enc.Utf8));
  cpypst.innerHTML = "file:///C:/Users/Arjun%20S/Desktop/SRM%20Hackaathon%20-%20Workspace/Website/redirect.html" + "?l=" + code + "&i=" + cid + "&uid="+ window.userid;
}
