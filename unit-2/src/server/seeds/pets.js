
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pets').del(),

    // Inserts seed entries
    knex('pets').insert({
      id: 1,
      name: 'Leopold',
      type: 'Dog',
      breed: 'Dingo',
      picture_url: 'http://ichef-1.bbci.co.uk/news/660/media/images/58682000/jpg/_58682918_wild_dog_screz.jpg',
      weight: 100,
      allergies: 'none',
      illnesses: 'none',
      last_vet_visit: 'Sat Mar 12 2016 22:59:15Z',
      tendencies: 'eats',
      favorites: 'food',
      owner_id: 1
    })
  );
};
