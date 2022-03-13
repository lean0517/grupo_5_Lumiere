module.exports =(sequelize,datatypes) =>{
    const alias ="user";
    const cols = {
        id: {
            autoincrement:true,
            primaryKey:true,
            type:datatypes.INTEGER
        },
        full_name: {
            type: datatypes.STRING(50)
        },
        email:{
            type: datatypes.STRING(100)
        },
        password: {
            type: datatypes.STRING(300)
        },
        confirm_password: {
            type: datatypes.STRING(300)
        },
        fav_category_id:{
            type: datatypes.STRING(100)
        },
        date_of_birth: {
            type: datatypes.STRING(100)
        },
        address:{
            type: datatypes.STRING(200)
        },
        user: {
            type: datatypes.STRING(100)
        },
        avatar_id:{
            type: datatypes.STRING(2000)
        }

        
    };
    const config ={
        tableName:"users",
        timestamps: false,
    };
    const user= sequelize.define(alias,cols,config);

    return user;
}