module.exports = {
  name: 'todoit',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/todoit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
