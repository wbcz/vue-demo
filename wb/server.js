const http = require('http');
const exec = require('exec');
const requester = require('request');
const config = require('./config');
console.log(config)

let deployServer = http.createServer(function(request, response) {
  let branchNames = [];
  //setInterval(trrigerRelease, 3600000);

  trrigerRelease()

  function trrigerRelease() {

    let confirmSendEmailTime = confirmTime('3', [18]);
    let createBranchTime = confirmTime('4', [9]);

    // 计算系统当前系统时间与设置时间是否相同
    function confirmTime(sendWeek, sendHour) {
      let date = new Date(Date.now());
      return sendWeek.includes(date.getDay()) && sendHour.includes(date.getHours());
    }

    function unique(branchName) {
      let res = branchNames.includes(branchName) ? false : true;
      branchNames.push(timer);
      return res;
    }

    //取得分支编号
    let timer = true && (function(sysmbol= "") {
        let timestamp = new Date(Date.now());
        function toNum (num) {
          return num < 9 ? '0' + num: num;
        }
        let date = (timestamp.getFullYear()) + sysmbol +
              (toNum(timestamp.getMonth() + 4)) + sysmbol +
              (toNum(timestamp.getDate()+3)) + sysmbol;
              console.log(date)
              return date;
    }());

    //创建分支编号命令，并且推送
    let command = true && (function(command) {

      command = [
        'git checkout -b release/' + timer,
        'git stash',
      	// 'git tag -a ' + timer + ' -m ""',
      	'git push origin release/' + timer + ':release/' + timer,
        'git checkout master',
        'git branch -d release/' + timer
      ].join(' && ')

      console.log(command)

      return unique() && exec(command, function(err, out, code) {
          if (err instanceof Error) {
            throw err
          }
          console.log('分支：' + 'release/' + timer + '  already create')
          // console.log(code, 'code')
          // console.log(out, 'out')
          //console.log(err, 'err')
          //process.stderr.write(err)
          process.stdout.write(out)
          //process.exit(code);
        })

    }())

    //发送邮件
    let sendEmail = false && requester(config, function(err, body) {
      console.log(body)
    });

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('yes');

  }
})

deployServer.listen(9999)