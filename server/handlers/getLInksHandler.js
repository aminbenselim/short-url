const Boom = require('boom');
const jsonfile = require('jsonfile');

module.exports = (request, h) => {
  try {
    const data = jsonfile.readFileSync('./data.json');

    return h.response(data.links).code(200)

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
