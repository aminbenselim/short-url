const jsonfile = require('jsonfile');
const Boom = require('boom');

module.exports = (request, h) => {
  try {
    const data = jsonfile.readFileSync('./data.json');

    const {
      params: { hash },
      payload: { url }
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

    data.links[hashInd].url = encodeURIComponent(url);
    jsonfile.writeFileSync('./data.json', data);

    return h.response(url).code(202);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
