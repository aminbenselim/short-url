const jsonfile = require('jsonfile');
const Boom = require('boom');

module.exports = (request, h) => {
  try {
    const data = jsonfile.readFileSync('./data.json');

    const {
      params: { hash },
    } = request;

    let hashInd;
    const entryWithGivenHash = data.links.filter((link, ind) => {
      if (link.hash === encodeURIComponent(hash)) {
        hashInd = ind;
        return true;
      }
    })[0];

    if(!entryWithGivenHash) {
      return Boom.notFound('this hash is not available');
    }

    data.links.splice(hashInd, 1);

    jsonfile.writeFileSync('./data.json', data);

    return h.response().code(204);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
