// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4fbe2810-8ec4-4443-88f4-1d0a6a212d02',
    name: 'Pay-As-You-Go',
    user: {
      name: 'testuser@mstestkeyvaultoutlook.onmicrosoft.com',
      type: 'user'
    },
    tenantId: 'dab60df3-eb31-470e-9aa7-0bb580c2624c',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_VAULT'] = 'karlaugxplattesting';
};

exports.scopes = [];
