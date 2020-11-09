import Axios from 'axios';
import axios from 'axios';

interface JwtResult {
    id: string;
}

export const checkAuth = async (req, res, next) => {
	var token = req.headers['token'];
	if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
        

    const user = await axios.get<JwtResult>(process.env.AUTH_SERVICE_HOST + '/token/verify?token=' + token );

	if (!user)
		return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    req.user = {
			id: user.data.id
		};
    next();
}