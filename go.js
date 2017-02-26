
var request = require('request');
var robotFactory = require('./lib/robot');

//走socks 代理
var Agent = require('socks5-http-client/lib/Agent');

//var joinerId = 1984944;
//var joinerId = 2335519;
var joinerId = 2335615;

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    //var info = JSON.parse(body);
    //console.log(info.message);
  } else {
    console.log('error', error);
  }
}
var count = 0;

function vote() {
  var robot = robotFactory.createRobot();
  console.log('机器人',robot);
  var ipAddress = robot.ip;
  var url = 'http://wx.m.shangjiadao.cn/api/v1/activity/vote',
      httpMethod = 'POST';
      
  var options = {
    uri: url,
    method: httpMethod,
    agentClass: Agent,
    har: {
      url: url,
      method: httpMethod,
      agentClass: Agent,
      headers: [
        {
          name: 'content-type',
          value: 'application/x-www-form-urlencoded'
        }, {
          name: 'User-Agent',
          value: robot.userAgent,
        }
        , {
          name: 'Refer',
          value: 'http://wx.m.shangjiadao.cn/sjd_'+robot.random32+'?activity=28609&joiner=' + joinerId + '&origin=http://wx.m.shangjiadao.cn&type=1&from=timeline&isappinstalled=0',
        }
        , {
          name: 'Accept',
          value: 'application/json, text/javascript, */*; q=0.01',
        }, {
          name: 'x-forwarded-for',
          value: ipAddress,
        }, {
          name: 'x-real-ip',
          value: ipAddress
        }
      ],
      postData: {
        mimeType: 'application/x-www-form-urlencoded',
        params: [
          {
            name: 'joiner_id',
            value: joinerId
          },
          {
            name: 'open_id',
            value: robot.weChatKey,
          },
          {
            name: 'next_vote_date',
            value: 0
          }
        ]
      }
    }
  };
  request(options, callback);
}

function voteRandom() {
  clearInterval(count);
  var ran = parseInt(Math.random() * 300) * 10 ;
  console.log(`下次投票将在${ran/1000}秒后......`)
  vote();
  count = setInterval(voteRandom, ran);
}

console.log('=============vote start=============');
voteRandom();


