const { Sequelize } = require('sequelize');
// const productsController = require('../../controllers/productsController');

module.exports = (sequelize, DataTypes) => {

cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100)
    },
    price: {
        type: DataTypes.INTEGER
    },
    specs: {
        type: DataTypes.STRING //dataTypes: STRING corresponde a un VARCHAR(255)
    },
    description: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER
    },
    discount: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING
    },
};

let config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false,
};

const Product = sequelize.define("Product", cols, config);

Product.associate = function(models){
    // Product.hasMany(models.Sale, {
    //     as: "Sale",
    //     foreignKey: "product_id"
    // });
    
    Product.belongsToMany(models.User, {
        as: "User",
        foreignKey: "product_id"
    });

    Product.hasMany(models.Image, {
            as: "Image",
            foreignKey: "product_id",
        });

        
    Product.hasMany(models.Product_Category, {
                as: "Product_Category",
                foreignKey: "product_id"
            });
    };

return Product;
};