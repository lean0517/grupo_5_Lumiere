module.exports =(sequelize,datatypes) =>{
    const alias ="product";
    const cols = {
            id_product: {
            autoincrement:true,
            primaryKey:true,
            type:datatypes.INTEGER
        },
        name: {
            type:datatypes.STRING(100)
        },
        price: {
            type:datatypes.FLOAT
        },
        discount:{
            type: datatypes.FLOAT
        },
        id_category: {
            type: datatypes.INTEGER
        },
        description:{
            type: datatypes.STRING(1000)
        },
        id_image: {
            type: datatypes.INTEGER
        }


    };
    const config ={
        tableName:"products",
        timestamps: false,
    };
    const product= sequelize.define(alias,cols,config);

    return product
}