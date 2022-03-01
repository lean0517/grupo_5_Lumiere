const path = require ('path');
const fs = require ('fs');

const User = {
    fileName: path.resolve(__dirname,"../data/users.json"),

    getData: function (){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },
    //Genera Id consecutivos a los ya creados
    generateId: function (){
        let allUsers = this.findAll();
        let lastUser=allUsers.pop();
        if (lastUser){
            return lastUser.id +1;
        }
        return 1;
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneuser => oneuser.id ===id);
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneuser => oneuser[field] ===text);
        return userFound;
    },

    create: function (userData){
        let allUsers =this.findAll();
        newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName,JSON.stringify(allUsers, null, ' '))
        return true;

    },

    delete: function (id){
        let allUsers =this.findAll();
        let finalUsers = allUsers.filter (oneUser => oneUser.id !==id);
        fs.writeFileSync(this.fileName,JSON.stringify(finalUsers,null, ' '));
        return true;
    }

}

module.exports = User;
