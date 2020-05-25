//<wwto-wx></wwto-wx> <wwto-baidu></wwto-baidu> <wwto-alipay><wwto-alipay>
const platformMap = {
  wx: {
    tagName: 'wwto-wx'
  },
  baidu: {
    tagName: 'wwto-baidu'
  },
  alipay: {
    tagName: 'wwto-alipay'
  },
  tt: {
    tagName: 'wwto-tt'
  }
};

module.exports = function(platform) {
  const saveName = platformMap[platform].tagName;
  const saveTagReg = new RegExp(`\\s*<${saveName}>([\\s\\S]*?)<\\/${saveName}>\\s*`, 'g');
  let deleteTag = [];
  Object.keys(platformMap).forEach(item => {
    if (item !== platform) {
      const delTagName = platformMap[item].tagName;
      deleteTag.push(`(\\s*<${delTagName}>[\\s\\S]*?<\\/${delTagName}>\\s*)`);
    }
  });
  deleteTag = new RegExp(deleteTag.join('|'), 'g');
  return function(text) {
    return text.replace(saveTagReg, function(match, $1) {
      return $1;
    }).replace(deleteTag, function(match) {
      return '';
    });
  };
};