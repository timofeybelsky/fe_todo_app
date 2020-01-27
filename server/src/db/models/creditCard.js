'use strict';

module.exports = (sequelize, DataTypes) => {

  const CreditCard = sequelize.define( 'CreditCard',
                                       {
                                         number: {
                                           type: DataTypes.STRING( 16 ),
                                           allowNull: false,
                                           validate: {
                                             isCreditCard: true,
                                           }
                                         },
                                         cvc: {
                                           type: DataTypes.STRING( 3 ),
                                           allowNull: false,
                                           validate: {
                                             is: /^[0-9]{3}$/,

                                           }
                                         },
                                         expiry: {
                                           type: DataTypes.DATE,
                                           allowNull: false,
                                           validate: {
                                             isAfter: new Date(),
                                           }
                                         },
                                         balance: {
                                           type: DataTypes.REAL(20, 2),
                                           allowNull: false,
                                         }
                                       },
                                       {
                                         timestamps: false,
                                         schema: 'sandbox',
                                         tableName: 'creditcards'
                                       }
  );

  return CreditCard;
};