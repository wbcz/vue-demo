let mail = {
  method: "POST",
  json: true,
  url: 'http://messageapi.test2.taolx.com/api/EMail/SendByTemp',
  body:  {
    "Data": {
      "UserId": 1,
      "OrderNo": "sample string 1",
      "EUid": 1,
      "Subject": "sample string 2",
      "FormAddress": {
        "Address": "report@taolx.com",
        "DisplayName": "wangbo"
      },
      "FormPws": "6*!TrvYd^@2bshp5RA!@#",
      "ToAddresses": [
        {
          "Address": "wangbo@taolx.com",
          "DisplayName": "sample string 2"
        }
      ],

      "Priority": "Normal",
      "SendMode": "Async",

      "TemplateId": 0,
      "BodyContent": '测试发邮件'
    },
    "Header": {
      "Timestamp": 1486189166000,
      "UID": 8
    },
    "DistributorType": 1,
    "Channel": 2
  }
}

module.exports = mail