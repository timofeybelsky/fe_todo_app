import { CreditCard, sequelize } from './db/models';

async function transaction (fromCardId, toCardId, value) {
  try {

    const fromCard = await CreditCard.findByPk( fromCardId );
    const toCard = await CreditCard.findByPk( toCardId );

    console.group( 'Before' );
    console.log( fromCard.get() );
    console.log( toCard.get() );
    console.groupEnd();

    const t = await sequelize.transaction();

    fromCard.balance -= value;
    const updatedFromCard = await fromCard.save( {
                                                   transaction: t,
                                                 } );

    toCard.balance = +toCard.balance + value;
    const updatedToCard = await toCard.save(
      {
        transaction: t,
      }
    );

    await t.commit();

    console.group( 'After' );
    console.log( updatedFromCard.get() );
    console.log( updatedToCard.get() );
    console.groupEnd();

  } catch (e) {
    console.error( e );
  }
}

transaction( 1, 2, 100 );

