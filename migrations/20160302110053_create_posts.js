
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(t){
    t.increments();
    t.string('title');
    t.string('author');
    t.text('url');
    t.text('description');
    t.integer('upvote');
    t.string('date');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
