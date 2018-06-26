const Boom = require('boom');
const jsonfile = require('jsonfile');

module.exports = (request, h) => {
  try {
    const data = jsonfile.readFileSync('./data.json');

    const { params: { hash }} = request;

    // filter data by hash param
    const entryWithGivenHash = data.links.filter(link => link.hash === encodeURIComponent(hash))[0];

    if(entryWithGivenHash) {
      return h.response(entryWithGivenHash.url).code(200)
    }
    return Boom.notFound('this hash is not available');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
