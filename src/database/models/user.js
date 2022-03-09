module.exports =(sequelize,datatypes) =>{
    const alias ="user";
    const cols = {
        id: {
            autoincrement:true,
            primaryKey:true,
            type:datatypes.INTEGER
        },
        fullname: {
            type: datatypes.STRING(50)
        },
        email:{
            type: datatypes.STRING(100)
        },
        password: {
            type: datatypes.STRING(60)
        },
        confirm_password: {
            type: datatypes.STRING(60)
        },
        fav_category_id:{
            type: datatypes.INTEGER
        },
        dat_of_birth: {
            type: datatypes.STRING(100)
        },
        address:{
            type: datatypes.STRING(200)
        },
        user: {
            type: datatypes.STRING(100)
        },
        avatar_id:{
            type: datatypes.INTEGER
        }

        
    };
    const config ={
        tableName:"users",
        timestamps: false,
    };
    const user= sequelize.define(alias,cols,config);

    return user;
}