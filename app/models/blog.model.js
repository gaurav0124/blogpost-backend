module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define("blog", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING(2000),
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Blog;
};
