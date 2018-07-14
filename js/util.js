//正则工具库
/**
 * @funName 验证手机号是否合法
 * @params phoneNumber 手机号
 * @params isDetail 是否展示详细信息 默认为：false
 * @return Object {...}
 */
function isPhoneNumberValidate(phoneNumber, isDetail = false) {
  /**
   * 手机号码
   * 移动：134,135,136,137,138,139,147,150,151,152,157,158,159,170,178,182,183,184,187,188
   * 联通：130,131,132,145,152,155,156,1709,171,176,185,186
   * 电信：133,134,153,1700,177,180,181,189
   */
  const MOBILE = /^1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}$/;
  /**
   * 中国移动：China Mobile
   * 134,135,136,137,138,139,147,150,151,152,157,158,159,170,178,182,183,184,187,188
   */
  const CM = /^1(3[4-9]|4[7]|5[0-27-9]|7[0]|7[8]|8[2-478])\d{8}$/;
  /**
   * 中国联通：China Unicom
   * 130,131,132,145,152,155,156,1709,171,176,185,186
   */
  const CU = /^1(3[0-2]|4[5]|5[56]|709|7[1]|7[6]|8[56])\d{8}$/;
  /**
   * 中国电信：China Telecom
   * 133,134,153,1700,177,180,181,189
   */
  const CT = /^1(3[34]|53|77|700|8[019])\d{8}$/;
  /**
   * 大陆地区固话及小灵通
   * 区号：010,020,021,022,023,024,025,027,028,029
   * 号码：七位或八位
   */
  const PHS = /^0(10|2[0-5789]|\d{3})\d{7,8}$/;

  const isPhoneNumber =
    MOBILE.test(phoneNumber) ||
    CM.test(phoneNumber) ||
    CU.test(phoneNumber) ||
    CT.test(phoneNumber) ||
    PHS.test(phoneNumber);
  let detailPhoneNumber = '';
  if (MOBILE.test(phoneNumber)) {
    detailPhoneNumber = '中国移动';
  } else if (CM.test(phoneNumber)) {
    detailPhoneNumber = '中国联通';
  } else if (CU.test(phoneNumber)) {
    detailPhoneNumber = '中国电信';
  } else {
    detailPhoneNumber = '其他运营商';
  }
  if (isDetail) {
    return {
      isPhoneNumber,
      detailPhoneNumber
    };
  } else {
    return {
      isPhoneNumber
    };
  }
}

/**
 * @funcName 去除字符中所有的空格
 * @params string 字符串
 * @return string 去除空格之后的字符串
 */
function getTrimStr(string) {
  return string.replace(/\s/gi, '');
}

/**
 * @funName 身份证号验证
 * @params cardID 身份证号
 * @return boolean
 */
function isCardID(cardID) {
  const cardIDRegExp = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
  return cardIDRegExp.test(cardID);
}
/**
 * @funName 计算上传文件大小
 * @params ...
 * @return ...
 */
function bytesToSize(bytes) {
  if (bytes === 0) return '0 B';
  var k = 1024;
  (sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']),
    (i = Math.floor(Math.log(bytes) / Math.log(k)));

  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}
