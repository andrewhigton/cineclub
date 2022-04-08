const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
	console.log('called ' + req.header('x-auth-token') )
	// 
	//heres where its breaking down
	//get token from header
	const token = req.header('x-auth-token')
	// console.log('token is ' + token )
	//check if no token
	if(!token) {
		return res.status(401).json({ msg: 'No token, authorisation denied'});
	}

	//verify token
	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		req.user = decoded.user;
		next();
		} catch (err) {
			res.status(401).json({ msg: 'Token is not valid' })
		}
	};