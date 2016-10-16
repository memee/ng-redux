// Copyright (c) 2015-present Dan Abramov
// https://github.com/reactjs/redux/blob/85e2368ea9ff9b308fc873921ddf41929638f130/build/use-lodash-es.js
module.exports = function () {
  return {
    visitor: {
      ImportDeclaration(path) {
        var source = path.node.source
        source.value = source.value.replace(/^lodash($|\/)/, 'lodash-es$1')
      }
    }
  }
}
