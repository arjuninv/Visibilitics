pragma solidity ^0.4.2;

contract Main {
        uint public c_num;
        uint public user_num;

        struct Campaign {
        uint cid;
        string url;
        uint price;
        uint max_views;
        uint current_views;
    }
    struct viewData {
      uint index;
      uint views;
    }



    struct user_data {
      string name;
      uint ammount;
      uint my_campaign_num;
      uint taken_campaign_num;
      mapping(uint => viewData) my_campaign;
      mapping(uint => viewData) taken_campaign;

    }


    mapping (uint => Campaign) public_list;
    mapping (uint => user_data) users;



 function Main () public {
    c_num = 0;
    user_num=0;
  }
	
  function addCampaign (string _url,uint _price,uint _max_views, uint _uid) public {
      c_num++;
      public_list[c_num] = Campaign(c_num, _url, _price, _max_views, 0);
      users[_uid].my_campaign_num +=1;
      users[_uid].my_campaign[users[_uid].my_campaign_num].index = c_num;
      users[_uid].my_campaign[users[_uid].my_campaign_num].views = 0;
  }

  function registerView(uint _index, uint _uid) public {
      public_list[_index].current_views += 1;
      users[_uid].ammount += public_list[_index].price / public_list[_index].max_views;
      for(uint i=1; i<users[_uid].taken_campaign_num; i++){
        if(users[_uid].my_campaign[i].index == _index) {
          users[_uid].my_campaign[i].views += 1;
        }
      }
  }

  function createUser(string _name, uint _ammount) public returns (uint) {
    user_num++;
    users[user_num].name = _name;
    users[user_num].ammount = _ammount;
    users[user_num].my_campaign_num = 0;
    users[user_num].taken_campaign_num = 0;
     return user_num;
    }

    function takeCampaign (uint _uid, uint _index) public {
      users[_uid].taken_campaign_num +=1;
      users[_uid].taken_campaign[users[_uid].taken_campaign_num].index = _index;
      users[_uid].taken_campaign[users[_uid].taken_campaign_num].views = 0;
    }


}
