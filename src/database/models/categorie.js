module.exports =(sequelize,datatypes) =>{
    const alias ="categorie";
    const cols = {
        id_category: {
            autoincrement:true,
            primaryKey:true,
            type:datatypes.INTEGER
        },
        name: {
            type: datatypes.STRING(100)
        },
        
    };
    const config ={
        tableName:"categories",
        timestamps: false,
    };
    const category= sequelize.define(alias,cols,config);

    return category
}