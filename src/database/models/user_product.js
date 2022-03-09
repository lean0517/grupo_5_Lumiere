module.exports =(sequelize,datatypes) =>{
    const alias ="user_product";
    const cols = {
        id: {
            autoincrement:true,
            primaryKey:true,
            type:datatypes.INTEGER
        },
        id_user: {
            type: datatypes.INTEGER
        },
        id_product: {
            type: datatypes.INTEGER
        },
        
    };
    const config ={
        tableName:"user_products",
        timestamps: false,
    };
    const user_product= sequelize.define(alias,cols,config);

    return user_product
}