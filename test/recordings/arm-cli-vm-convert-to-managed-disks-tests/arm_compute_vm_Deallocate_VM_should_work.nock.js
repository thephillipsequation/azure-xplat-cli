// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5764?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"0b9f8e57-bb04-418d-a3c8-9f7ce897c57f\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"16.04.0-LTS\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clifcf1c418507a8411-os-1486513304943\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplattstoragestsp6839.blob.core.windows.net/xplatteststoragecntstsp2008/clifcf1c418507a8411-os-1486513304943.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmStSp5764\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Network/networkInterfaces/xplattestnicStSp4638\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplattstoragestsp6839.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5764\",\r\n  \"name\": \"xplatvmStSp5764\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3312',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '65457c1d-8f0d-48a1-aa40-0c13f1060dce',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '2f00de49-cc2a-4db0-a232-27060aff6295',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002524Z:2f00de49-cc2a-4db0-a232-27060aff6295',
  date: 'Wed, 08 Feb 2017 00:25:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5764?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"0b9f8e57-bb04-418d-a3c8-9f7ce897c57f\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"16.04.0-LTS\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clifcf1c418507a8411-os-1486513304943\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplattstoragestsp6839.blob.core.windows.net/xplatteststoragecntstsp2008/clifcf1c418507a8411-os-1486513304943.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmStSp5764\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Network/networkInterfaces/xplattestnicStSp4638\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplattstoragestsp6839.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5764\",\r\n  \"name\": \"xplatvmStSp5764\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3312',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '65457c1d-8f0d-48a1-aa40-0c13f1060dce',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '2f00de49-cc2a-4db0-a232-27060aff6295',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002524Z:2f00de49-cc2a-4db0-a232-27060aff6295',
  date: 'Wed, 08 Feb 2017 00:25:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5764/deallocate?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '8b1fc1a8-6970-45ee-8fd1-1720bef0f811',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '92fccce2-68a2-4a9f-aa41-aab5da9e8768',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002524Z:92fccce2-68a2-4a9f-aa41-aab5da9e8768',
  date: 'Wed, 08 Feb 2017 00:25:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5764/deallocate?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '8b1fc1a8-6970-45ee-8fd1-1720bef0f811',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '92fccce2-68a2-4a9f-aa41-aab5da9e8768',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002524Z:92fccce2-68a2-4a9f-aa41-aab5da9e8768',
  date: 'Wed, 08 Feb 2017 00:25:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:25:23.2718663+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b1fc1a8-6970-45ee-8fd1-1720bef0f811\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '685af82d-cb45-4463-bf1f-a1b266530980',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': 'fdf8cce7-c5d8-4522-9f83-4e71e0e5add3',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002555Z:fdf8cce7-c5d8-4522-9f83-4e71e0e5add3',
  date: 'Wed, 08 Feb 2017 00:25:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:25:23.2718663+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b1fc1a8-6970-45ee-8fd1-1720bef0f811\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '685af82d-cb45-4463-bf1f-a1b266530980',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': 'fdf8cce7-c5d8-4522-9f83-4e71e0e5add3',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002555Z:fdf8cce7-c5d8-4522-9f83-4e71e0e5add3',
  date: 'Wed, 08 Feb 2017 00:25:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:25:23.2718663+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b1fc1a8-6970-45ee-8fd1-1720bef0f811\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '60438789-1420-4964-ad61-89e78816e2c5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '6bd7fad6-0ed2-44df-9409-5ed7b9ba48b3',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002626Z:6bd7fad6-0ed2-44df-9409-5ed7b9ba48b3',
  date: 'Wed, 08 Feb 2017 00:26:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:25:23.2718663+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b1fc1a8-6970-45ee-8fd1-1720bef0f811\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '60438789-1420-4964-ad61-89e78816e2c5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '6bd7fad6-0ed2-44df-9409-5ed7b9ba48b3',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002626Z:6bd7fad6-0ed2-44df-9409-5ed7b9ba48b3',
  date: 'Wed, 08 Feb 2017 00:26:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:25:23.2718663+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b1fc1a8-6970-45ee-8fd1-1720bef0f811\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': 'de8be1e9-dadd-47f7-acfb-99298e899902',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '60bdcfe4-585f-4d59-84bd-35e2bf3e3233',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002657Z:60bdcfe4-585f-4d59-84bd-35e2bf3e3233',
  date: 'Wed, 08 Feb 2017 00:26:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:25:23.2718663+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b1fc1a8-6970-45ee-8fd1-1720bef0f811\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': 'de8be1e9-dadd-47f7-acfb-99298e899902',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '60bdcfe4-585f-4d59-84bd-35e2bf3e3233',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002657Z:60bdcfe4-585f-4d59-84bd-35e2bf3e3233',
  date: 'Wed, 08 Feb 2017 00:26:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:25:23.2718663+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b1fc1a8-6970-45ee-8fd1-1720bef0f811\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': 'bf19f441-7a7b-4492-ac71-38e6b7036d87',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'd435c391-7fd9-4742-9724-3fb8fa1f67e8',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002728Z:d435c391-7fd9-4742-9724-3fb8fa1f67e8',
  date: 'Wed, 08 Feb 2017 00:27:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:25:23.2718663+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b1fc1a8-6970-45ee-8fd1-1720bef0f811\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': 'bf19f441-7a7b-4492-ac71-38e6b7036d87',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'd435c391-7fd9-4742-9724-3fb8fa1f67e8',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002728Z:d435c391-7fd9-4742-9724-3fb8fa1f67e8',
  date: 'Wed, 08 Feb 2017 00:27:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:25:23.2718663+00:00\",\r\n  \"endTime\": \"2017-02-08T00:27:45.5088133+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"8b1fc1a8-6970-45ee-8fd1-1720bef0f811\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': 'd62e92c3-3ff2-435b-9ad3-5a63c2bfcd26',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '24b4a236-be6c-41a4-ab52-2e4c65912bec',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T002759Z:24b4a236-be6c-41a4-ab52-2e4c65912bec',
  date: 'Wed, 08 Feb 2017 00:27:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8b1fc1a8-6970-45ee-8fd1-1720bef0f811?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:25:23.2718663+00:00\",\r\n  \"endTime\": \"2017-02-08T00:27:45.5088133+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"8b1fc1a8-6970-45ee-8fd1-1720bef0f811\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': 'd62e92c3-3ff2-435b-9ad3-5a63c2bfcd26',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '24b4a236-be6c-41a4-ab52-2e4c65912bec',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T002759Z:24b4a236-be6c-41a4-ab52-2e4c65912bec',
  date: 'Wed, 08 Feb 2017 00:27:59 GMT',
  connection: 'close' });
 return result; }]];