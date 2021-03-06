module.exports = {
  lib: {
    src: [
      'lib/**/*.js',
      '!lib/orbit/lib/eq.js',
    ],
    options: { jshintrc: '.jshintrc' }
  },
  tooling: {
    src: [
      'Gruntfile.js',
      'tasks/**/*.js'
    ],
    options: { jshintrc: 'tasks/.jshintrc' }
  },
  tests: {
    src: [
      'test/tests/**/*.js',
      '!test/tests/orbit/unit/lib/eq-test.js'
    ],
    options: { jshintrc: 'test/tests/.jshintrc' }
  },
  options: {
    jshintrc: '.jshintrc',
    force: true
  }
};
