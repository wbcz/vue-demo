var http = require('http')
  , exec = require('exec')

const PORT = 9988
  , PATH = '../html'


// var deployServer = http.createServer(function(request, response) {
	var command = [
    'cd  ..',
		'git checkout new',
		'git add ..',
		'git commit -m "release发布"',
		'git tag -a v1.5'
		'git push origin v1.5'
	]

    exec(command, function(err, out, code) {
    	console.log(111)
      if (err instanceof Error) {
        throw err
      }
      process.stderr.write(err)
      process.stdout.write(out)
      // response.writeHead(200)
      // response.end('Deploy Done.')

    })
// })

//deployServer.listen(PORT)