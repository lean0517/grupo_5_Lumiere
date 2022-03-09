module.exports =(sequelize,datatypes) =>{
    const alias ="image";
    const cols = {
        id_image: {
            autoincrement:true,
            primaryKey:true,
            type:datatypes.INTEGER
        },
        name: {
            type:datatypes.STRING(255)
        },
        
    };
    const config ={
        tableName:"images",
        timestamps: false,
    };
    const image= sequelize.define(alias,cols,config);

    return image;
}