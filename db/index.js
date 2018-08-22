const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, { logging: false });

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Thing = db.define('thing', {
  name: {
    type: Sequelize.STRING
  }
});

const UserThing = db.define('userthing', {

});

UserThing.belongsTo(User);
UserThing.belongsTo(Thing);

User.hasMany(UserThing);
Thing.hasMany(UserThing);

const syncAndSeed = () => {

  let moe, larry, curly, joe, shep;
  let foo, bar, bazz

  db.sync({ force: true })
    .then(() => {
      Promise.all([
        moe = User.create({ name: 'moe' }),
        larry = User.create({ name: 'larry' }),
        curly = User.create({ name: 'curly' }),
        joe = User.create({ name: 'joe'}),
        shep = User.create({ name: 'shep' })
      ])
    })
    .then(() => {
      return Promise.all([
        foo = Thing.create({ name: 'foo' }),
        bar = Thing.create({ name: 'bar' }),
        bazz = Thing.create({ name: 'bazz' })
      ])
    })
    .then(([foo, bar, bazz]) => {
      UserThing.create({ userId: 1, thingId: foo.id }),
      UserThing.create({ userId: 1, thingId: foo.id }),
      UserThing.create({ userId: 2, thingId: foo.id }),
      UserThing.create({ userId: 2, thingId: bazz.id }),
      UserThing.create({ userId: 3, thingId: bazz.id })
    })

}

const userThings = () => {
  return User.findAll({
    include: [{
      model: UserThing,
      include: [ Thing ]
    }]
  })
}







module.exports = {
  userThings,
  syncAndSeed
}
