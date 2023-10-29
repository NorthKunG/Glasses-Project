module.exports = (sequelize, DataTypes) => {
    const Glass = sequelize.define('Glass', {
        product: DataTypes.STRING,
        brand: DataTypes.STRING,
        price: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
        size: DataTypes.STRING,
        lens_width: DataTypes.INTEGER,
        frame_type: DataTypes.STRING,
        frame_color: DataTypes.STRING,
        material: DataTypes.STRING,
        frame_shape: DataTypes.STRING,
        warranty: DataTypes.INTEGER
    })

    return Glass
}