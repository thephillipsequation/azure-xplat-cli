// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"networkWatchersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName\",\r\n  \"etag\": \"W/\\\"6312215a-b6ff-4f28-9600-7e85d19f0b2a\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westeurope\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '396',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6312215a-b6ff-4f28-9600-7e85d19f0b2a"',
  'x-ms-request-id': 'eec2521d-c410-4376-825a-c57fd975b1e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-correlation-request-id': '2c809071-7785-42ec-aa9c-473169e02889',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T134549Z:2c809071-7785-42ec-aa9c-473169e02889',
  date: 'Tue, 14 Feb 2017 13:45:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"networkWatchersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName\",\r\n  \"etag\": \"W/\\\"6312215a-b6ff-4f28-9600-7e85d19f0b2a\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westeurope\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '396',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6312215a-b6ff-4f28-9600-7e85d19f0b2a"',
  'x-ms-request-id': 'eec2521d-c410-4376-825a-c57fd975b1e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-correlation-request-id': '2c809071-7785-42ec-aa9c-473169e02889',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T134549Z:2c809071-7785-42ec-aa9c-473169e02889',
  date: 'Tue, 14 Feb 2017 13:45:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName/topology?api-version=2016-09-01', '*')
  .reply(200, "{\r\n  \"id\": \"8db7cbf0-8598-4b91-9bd3-54314ae6d183\",\r\n  \"createdDateTime\": \"2017-02-14T13:45:49.5510109Z\",\r\n  \"lastModified\": \"0001-01-01T00:00:00\",\r\n  \"resources\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operationResults/64460a23-538b-4bff-ad55-21043f0795b2?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': '64460a23-538b-4bff-ad55-21043f0795b2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/64460a23-538b-4bff-ad55-21043f0795b2?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'f8d3c8c5-3898-4809-99f7-57ec19dbca9d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T134549Z:f8d3c8c5-3898-4809-99f7-57ec19dbca9d',
  date: 'Tue, 14 Feb 2017 13:45:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName/topology?api-version=2016-09-01', '*')
  .reply(200, "{\r\n  \"id\": \"8db7cbf0-8598-4b91-9bd3-54314ae6d183\",\r\n  \"createdDateTime\": \"2017-02-14T13:45:49.5510109Z\",\r\n  \"lastModified\": \"0001-01-01T00:00:00\",\r\n  \"resources\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operationResults/64460a23-538b-4bff-ad55-21043f0795b2?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': '64460a23-538b-4bff-ad55-21043f0795b2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/64460a23-538b-4bff-ad55-21043f0795b2?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'f8d3c8c5-3898-4809-99f7-57ec19dbca9d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T134549Z:f8d3c8c5-3898-4809-99f7-57ec19dbca9d',
  date: 'Tue, 14 Feb 2017 13:45:49 GMT',
  connection: 'close' });
 return result; }]];