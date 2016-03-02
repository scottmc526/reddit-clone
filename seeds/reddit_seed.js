
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({
      id: 1,
      title: 'Bacon stuff',
      author:'Scott C',
      url:'http://www.bacon.rocks/bacon1.jpg',
      description:'Bacon ipsum dolor amet t-bone sausage turducken kielbasa kevin pork chop. Beef ribs filet mignon rump kevin, alcatra hamburger t-bone bresaola porchetta flank shoulder tongue picanha jowl cow. Bacon andouille filet mignon, ribeye alcatra tri-tip sirloin fatback tail pork belly. Turkey shankle tri-tip, hamburger biltong ribeye meatloaf pancetta bresaola kielbasa ball tip beef ribs turducken salami pork belly. Corned beef short ribs bacon t-bone, ham frankfurter pork chop.',
      upvote: 0,
      date: 'Today at 10:55 AM'
    }),
    knex('posts').insert({
      id: 2,
      title: 'Sportsball',
      author: 'Dave M',
      url: 'http://www.clipartbest.com/cliparts/4T9/6X4/4T96X4qTE.jpeg',
      description: 'Flank beef chuck, tenderloin rump tri-tip biltong strip steak kevin pig. Pork sirloin alcatra spare ribs ham hock pastrami. Landjaeger bresaola ball tip brisket kevin pork chop, capicola bacon tenderloin pork belly prosciutto kielbasa. Landjaeger prosciutto ham turducken pastrami ball tip pork chop ham hock ribeye.',
      upvote: 0,
      date: 'Yesterday at 5:15 PM'
    }),
    knex('posts').insert({
      id: 3,
      title: 'Money over everything',
      author: 'Hannibal Burress',
      url: 'http://cdn1.theodysseyonline.com/files/2016/01/17/635886683087073450251122621_money.jpg',
      description: 'Chicken corned beef bresaola jowl prosciutto jerky tail pork chop, pig shoulder shank tongue ball tip short loin hamburger. Swine ham hock corned beef, filet mignon pig pancetta kielbasa sirloin leberkas. Cow filet mignon prosciutto, pork brisket biltong porchetta kielbasa venison frankfurter kevin pork loin. Cow bacon porchetta shankle, boudin ribeye filet mignon turkey. Pork bresaola ribeye kielbasa meatball boudin hamburger cupim sausage short ribs filet mignon ball tip biltong turkey. Shank picanha leberkas sirloin.',
      upvote: 0,
      date: 'Last Monday at 1:15 PM'
    })
  );
};
