var randomIp = require('chinese-random-ip');

/**32位的随机数字＋字母 */
function random32() {
  var randomFlag = true, min = 32, max = 32;
  var str = "",
    range = min,
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }
  for (var i = 0; i < range; i++) {
    pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
};
/**模拟微信的openId */
function weChatKey() {
  var tempKey = Math.random().toString(28).substr(2);

  /**
   * 三个随机位子，分别对第一个随机大写，第二个加入_,第三个位置加入-
   */

  var random1 = {
    id: parseInt(tempKey.length * Math.random()),
    value: function (n) {
      return n.toUpperCase()
    }
  }
  var random2 = {
    id: parseInt(tempKey.length * Math.random()),
    value: function () {
      return '-';
    }
  }
  var random3 = {
    id: parseInt(tempKey.length * Math.random()),
    value: function () {
      return '_';
    }
  }

  var randomArray = [random1, random2, random3];

  var returnArray = [];
  for (var index = 0; index < tempKey.length; index++) {

    for (var j = 0; j < randomArray.length; j++) {
      if (index === randomArray[j].id) {
        returnArray.push(randomArray[j].value(tempKey[index]));
      }
    }
    returnArray.push(tempKey[index]);
  }
  return returnArray.join('');
}

/**随机IP */
function ip() {
  return randomIp.getChineseIp(["浙江", "上海","江苏"]);
}

/**随机userAgent */
function userAgent() {
  var userAgents = [
    'Mozilla/5.0 (Linux; U; Android 2.3.6; zh-cn; GT-S5660 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MicroMessenger/4.5.255',
    'mozilla/5.0 (linux; u; Android 4.1.2; zh-cn; mi-one plus build/jzo54k) AppleWebKit/534.30 (khtml, like gecko) version/4.0 mobile safari/534.30 MicroMessenger/5.0.1.352',
    'mozilla/5.0 (linux; u; Android 4.1.3; zh-cn; mi-one plus build/jzo54k) AppleWebKit/534.30 (khtml, like gecko) version/4.0 mobile safari/534.30 MicroMessenger/5.0.1.352',
    'mozilla/5.0 (linux; u; Android 4.1.4; zh-cn; mi-one plus build/jzo54k) AppleWebKit/534.30 (khtml, like gecko) version/4.0 mobile safari/534.30 MicroMessenger/5.0.1.352',
    'mozilla/5.0 (linux; u; Android 4.1.5; zh-cn; mi-one plus build/jzo54k) AppleWebKit/534.30 (khtml, like gecko) version/4.0 mobile safari/534.30 MicroMessenger/5.0.1',
    'mozilla/5.0 (linux; u; Android 4.2.2; zh-cn; mi-one plus build/jzo54k) AppleWebKit/534.30 (khtml, like gecko) version/4.0 mobile safari/534.30 MicroMessenger/5.0.1.352',
    'mozilla/5.0 (linux; u; Android 4.3.2; zh-cn; mi-one plus build/jzo54k) AppleWebKit/534.30 (khtml, like gecko) version/4.0 mobile safari/534.30 MicroMessenger/6.3.20',
    'mozilla/5.0 (linux; u; Android 4.4.2; zh-cn; mi-one plus build/jzo54k) AppleWebKit/534.30 (khtml, like gecko) version/4.0 mobile safari/534.30 MicroMessenger/5.0.1.352',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Mobile/14A456 MicroMessenger/6.2.30 NetType/WIFI Language/zh_CN',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Mobile/14A456 MicroMessenger/6.1.30 NetType/WIFI Language/zh_CN',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 7_2_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Mobile/14A456 MicroMessenger/6.0.30 NetType/WIFI Language/zh_CN',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Mobile/14A456 MicroMessenger/6.3.20 NetType/WIFI Language/zh_CN',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Mobile/14A456 MicroMessenger/6.3.10 NetType/WIFI Language/zh_CN',
    'mozilla/5.0 (iphone; cpu iphone os 8_1_1 like mac os x) applewebkit/534.46 (khtml, like gecko) mobile/9b206 micromessenger/5.0'
  ];
  return userAgents[parseInt(Math.random() * userAgents.length)];
}

/**
 * 机器人，包含32位识别码，微信openid，ip，以及userAgent
 */
module.exports = {
  createRobot: function () {
    return {
      random32:random32(),
      weChatKey:weChatKey(),
      ip:ip(),
      userAgent:userAgent()
    }
  }
}
