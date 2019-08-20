
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chapters_partners').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('chapters_partners').insert([
        {chaptersid: 1, partnersid: 1},
        {chaptersid: 1, partnersid: 3},
        {chaptersid: 2, partnersid: 3},
        {chaptersid: 3, partnersid: 3},
        {chaptersid: 4, partnersid: 1},
        {chaptersid: 4, partnersid: 2},
        {chaptersid: 4, partnersid: 3},
        {chaptersid: 4, partnersid: 4},
        {chaptersid: 5, partnersid: 1},
        {chaptersid: 5, partnersid: 3},
        {chaptersid: 6, partnersid: 2},
        {chaptersid: 6, partnersid: 1},
        {chaptersid: 8, partnersid: 1},
        {chaptersid: 8, partnersid: 3},
        {chaptersid: 8, partnersid: 2},
        {chaptersid: 9, partnersid: 5},
        {chaptersid: 9, partnersid: 1},
        {chaptersid: 10, partnersid: 1},
        {chaptersid: 10, partnersid: 2},
        {chaptersid: 12, partnersid: 1},
        {chaptersid: 12, partnersid: 2},
        {chaptersid: 12, partnersid: 3},
        {chaptersid: 12, partnersid: 4},
        {chaptersid: 12, partnersid: 5},
        {chaptersid: 13, partnersid: 1},
        {chaptersid: 13, partnersid: 3},
        {chaptersid: 14, partnersid: 3},
        {chaptersid: 14, partnersid: 4},
        {chaptersid: 15, partnersid: 2},
        {chaptersid: 15, partnersid: 1},
        {chaptersid: 15, partnersid: 3},
        {chaptersid: 16, partnersid: 3},
        {chaptersid: 17, partnersid: 3},
        {chaptersid: 17, partnersid: 2},
        {chaptersid: 17, partnersid: 1},
        {chaptersid: 17, partnersid: 4},
        {chaptersid: 18, partnersid: 1},
        {chaptersid: 18, partnersid: 3},
        {chaptersid: 19, partnersid: 1},
        {chaptersid: 19, partnersid: 2},
        {chaptersid: 19, partnersid: 3},
        {chaptersid: 19, partnersid: 4},
        {chaptersid: 19, partnersid: 5},
        {chaptersid: 20, partnersid: 1},
        {chaptersid: 20, partnersid: 3},
        {chaptersid: 21, partnersid: 3},
        {chaptersid: 21, partnersid: 2},
        {chaptersid: 21, partnersid: 1},
      ]);
    });
};
