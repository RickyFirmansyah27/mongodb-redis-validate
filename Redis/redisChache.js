const RedisClient = require("redis").createClient;

const client = RedisClient(6379, "localhost");

/**
 * get redis cache
 * @param {string} redis_key
 */
function get(redis_key) {
  return new Promise((resolve, reject) => {
    client.get(redis_key, (err, reply) => {
      if (err) {
        console.error("Error while retrieving data from Redis", err);
        reject(err);
      } else {
        console.log("Success Redis Get", redis_key);
        resolve(JSON.parse(reply));  
      }
    });
  });
}

/**
 * set redis cache
 * @param {string} redis_key
 * @param {string} redis_value
 */
function set(redis_key, redis_value) {
  console.log("Success Redis Set", redis_key, redis_value);
  client.set(redis_key, JSON.stringify(redis_value));
}

module.exports.get = get;
module.exports.set = set;
