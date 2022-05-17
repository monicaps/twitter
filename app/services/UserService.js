const User = require('./../models/user')

class UserService{
	static create(id,username,name){
		return new User(id,username,name,"Sin bio")
	}

	static getInfo(user){
		let listInfo= []
		listInfo[0]=user.id
		listInfo[1]=user.username
		listInfo[2]=user.name
		listInfo[3]=user.bio
		return listInfo
	}

	static updateUserUsername(user,newUsername){
		user.username=newUsername
	}

	static getAllUsernames(list){
		const usernames=[]
		list.forEach(user => usernames.push(user.username))
		return usernames
	}
}

module.exports=UserService