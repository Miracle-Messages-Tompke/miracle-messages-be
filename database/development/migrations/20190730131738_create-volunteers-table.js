exports.up = function (knex, Promise) {
  return knex.schema.createTable("volunteers", (tbl) => {
    tbl.increments();
    tbl.string("fname", 128).notNullable();
    tbl.string("lname", 128).notNullable();
    tbl.string("email", 128).notNullable().unique();
    tbl.string("city", 64).notNullable();
    tbl.string("state", 32).notNullable();
    tbl.string("country", 32).notNullable();
    tbl.datetime("date", { precision: 4 }).defaultTo(knex.fn.now(0));
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("volunteers");
};
