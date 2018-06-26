const sh = require('shorthash' );
const jsonfile = require('jsonfile');
const Boom = require('boom');

module.exports = (request, h) => {
  const url = encodeURIComponent(request.payload.url);
  const uniqueHash = sh.unique(url);
  try {
    const data = jsonfile.readFileSync('./data.json');

    // filter data by provided URL
    const filteredEntries = data.links.filter(link => link.url === url);

    // if URL already exists, return the hash for it
    if (filteredEntries.length !== 0) {
      return Boom.notAcceptable('the url already exists in our database',
        { hash: filteredEntries[0].hash });
    }

    // push new entry to links object
    data.links.push({
      url,
      hash: uniqueHash
    });

    // write back the data to the file
    jsonfile.writeFileSync('./data.json', data);

    // return 201 success response
    return h.response(uniqueHash).code(201);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
