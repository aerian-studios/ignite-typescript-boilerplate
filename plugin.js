// Ignite CLI plugin for Ts
// ----------------------------------------------------------------------------


const add = async function (context) {
  // No-op, as we do this all in `boilerplate.js`
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // No-op, as we do this all in `boilerplate.js`  
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }
