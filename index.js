const extensions = {
  '.babel.js': {
    module: 'babel/register',
    register: function (module) {
      module({
        // register on .js extension due to https://github.com/joyent/node/blob/v0.12.0/lib/module.js#L353
        // which only captures the final extension (.babel.js -> .js)
        extensions: '.js'
      })
    }
  },
  '.cirru': 'cirru-script/lib/register',
  '.cjsx': 'node-cjsx/register',
  '.co': 'coco',
  '.coffee': ['coffee-script/register', 'coffee-script'],
  '.coffee.md': ['coffee-script/register', 'coffee-script'],
  '.csv': 'require-csv',
  '.iced': ['iced-coffee-script/register', 'iced-coffee-script'],
  '.iced.md': ['iced-coffee-script/register', 'iced-coffee-script'],
  '.ini': 'require-ini',
  '.js': null,
  '.json': null,
  '.json5': 'json5/lib/require',
  '.jsx': [
    {
      module: 'babel/register',
      register: function (module) {
        module({
          extensions: '.jsx'
        });
      },
    },
    {
      module: 'node-jsx',
      register: function (module) {
        module.install({
          extension: '.jsx',
          harmony: true
        });
      }
    }
  ],
  '.litcoffee': ['coffee-script/register', 'coffee-script'],
  '.liticed': ['iced-coffee-script/register', 'iced-coffee-script'],
  '.ls': ['livescript', 'LiveScript'],
  '.node': null,
  '.toml': 'toml-require',
  '.ts': ['typescript-register', 'typescript-require'],
  '.wisp': 'wisp/engine/node',
  '.xml': 'require-xml',
  '.yaml': 'require-yaml',
  '.yml': 'require-yaml'
};

const jsVariantExtensions = [
  '.js',
  '.babel.js',
  '.cirru',
  '.cjsx',
  '.co',
  '.coffee',
  '.coffee.md',
  '.iced',
  '.iced.md',
  '.jsx',
  '.litcoffee',
  '.liticed',
  '.ls',
  '.ts',
  '.wisp'
];

module.exports = {
  extensions: extensions,
  jsVariants: jsVariantExtensions.reduce(function (result, ext) {
    result[ext] = extensions[ext];
    return result;
  }, {})
};
