const contract_address = "0x522acc2dc3b73435fb32a3d90ae5eaa7f9ca1c6f";
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
"constant": false,
"inputs": [
{
"name": "_url",
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

window.addEventListener("load", function() {
if (typeof web3 !== "undefined") {
window.web3 = new Web3(web3.currentProvider);
} else {
window.web3 = new Web3(
new Web3.providers.HttpProvider("http://127.0.0.1:7545")
);
}



let contract = web3.eth.contract(abi).at(contract_address);

contract.addCampaign.call("www.google.com", 90, 9, 0) ;
contract.users.call(0, function(err, result){
console.log(result + "\n");
   }) ;


});
