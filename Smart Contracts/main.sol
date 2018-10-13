pragma solidity ^0.4.2;

contract Main {
        uint public c_num;
        uint public user_num;

        struct Campaign {
        uint cid;
        string brand;
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




function get_c_num() public returns (uint) {
    return c_num;
}

function get_ammount(uint _uid) public returns (uint) {
    return users[_uid].ammount;
}


function get_my_campaign_num(uint _uid) public returns (uint) {
    return users[_uid].my_campaign_num;
}

function get_public_list(uint _i, uint _uid) public returns (uint, string, string, uint, uint, uint, uint){
    uint temp = 1;
    for(uint i=1; i<users[_i].my_campaign_num; i++) {
        if(users[_i].my_campaign[i].index == _i) {temp = 0;}
    }
    return (public_list[_i].cid,public_list[_i].brand, public_list[_i].url, public_list[_i].price, public_list[_i].max_views, public_list[_i].current_views, temp);
}

function get_my_campaigns(uint _i, uint _uid) public returns (uint, string, string, uint, uint, uint){
    Campaign temp;
    temp = public_list[users[_uid].my_campaign[_i].index];
    return (temp.cid,temp.brand,temp.url, temp.price, temp.max_views, temp.current_views);
}

function get_taken_campaigns(uint _i, uint _uid) public returns (uint, string, string, uint, uint, uint){
    Campaign temp;
    temp = public_list[users[_uid].taken_campaign[_i].index];
    return (temp.cid,temp.brand,temp.url, temp.price, temp.max_views, temp.current_views);
}



 function Main () public {
    c_num = 0;
    user_num=0;  // Hard coded for demo purpose
    createUser("User 1", 5000); // Hard coded for demo purpose
    createUser("User 2", 10); // Hard coded for demo purpose
  }

  function addCampaign (string _url,string _brand,uint _price,uint _max_views, uint _uid) public returns (bool){
      if(users[_uid].ammount >= _price) {
      c_num++;
      public_list[c_num] = Campaign(c_num, _brand, _url, _price, _max_views, 0);
      users[_uid].my_campaign_num +=1;
      users[_uid].my_campaign[users[_uid].my_campaign_num].index = c_num;
      users[_uid].my_campaign[users[_uid].my_campaign_num].views = 0;
      users[_uid].ammount -= _price;
      return true;
      } else {
          return false;
      }
  }

  function registerView(uint _index, uint _uid) public returns (bool) {
      public_list[_index].current_views += 1;
      users[_uid].ammount += public_list[_index].price / public_list[_index].max_views;

      for(uint i=1; i<users[_uid].taken_campaign_num; i++){
        if(users[_uid].my_campaign[i].index == _index) {
          users[_uid].my_campaign[i].views += 1;
        }
      }
      return true;
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
