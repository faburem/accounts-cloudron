Package.describe({
  name: 'faburem:accounts-cloudron',
  version: '0.0.1',
  summary: 'OAuth2 for Cloudron',
  git: 'https://github.com/faburem/accounts-cloudron',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('faburem:cloudron', ['client', 'server']);
  
  api.addFiles('accounts-cloudron.js');
});
