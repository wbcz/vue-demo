var http = require('http')
  , exec = require('exec')

// var deployServer = http.createServer(function(request, response) {
	var command = [
		'git checkout new',
		'git add .',
		'git commit -m "release发布"',
		'git tag -a v1.5 -m ""'
		// 'git push origin v1.5'
	].join(' && ')

  exec(command, function(err, out, code) {
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