'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      {
        schema: 'public',
        tableName: 'UserRoles'
      },
      {
        /*
         * REFERENCES Users(id) NOT NULL
         * */
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT',
        },
        /*
         * REFERENCES Roles(id) NOT NULL
         * */

        roleId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Roles',
            key: 'id'
          },
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT',
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
    ).then( value => {
      return queryInterface.addConstraint( 'UserRoles', ['userId', 'roleId'], {
        type: 'primary key'
      } );
    } );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable( 'UserRoles', );
  },
};

