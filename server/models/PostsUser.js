module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("tbl_userlog", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,

            allowNull: false,
        },
    });
    return Posts;
};
