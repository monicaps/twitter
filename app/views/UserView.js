const User = require('./../services/UserService')

class UserView{
	static createUser(payload){
		let respuesta;

		if (payload === null) {
			respuesta = {"error":"payload no existe"}
		}else if(payload.username === null || payload.id=== null|| payload.name===null){
			respuesta = {"error":"necesitan tener un valor válido"}
		}

		return respuesta
	}
}

module.exports=UserView