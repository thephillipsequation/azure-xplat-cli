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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate6977/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 6\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"xplattest\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplattestvms2sto05042734.blob.core.windows.net/xplat-south-504273416-disk-container\",\r\n            \"https://xplattestvms2sto15042734.blob.core.windows.net/xplat-south-504273416-disk-container\",\r\n            \"https://xplattestvms2sto25042734.blob.core.windows.net/xplat-south-504273416-disk-container\",\r\n            \"https://xplattestvms2sto35042734.blob.core.windows.net/xplat-south-504273416-disk-container\",\r\n            \"https://xplattestvms2sto45042734.blob.core.windows.net/xplat-south-504273416-disk-container\"\r\n          ],\r\n          \"name\": \"xplat-south-504273416-os-disk\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"ReadOnly\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2008-R2-SP1\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"xplat-south-504273416-nic\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"xplat-south-504273416-pip\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate6977/providers/Microsoft.Network/virtualNetworks/xplat-south-504273416-vnet/subnets/xplat-south-504273416-snet\"},\"loadBalancerBackendAddressPools\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate6977/providers/Microsoft.Network/loadBalancers/xplat-south-504273416-lb/backendAddressPools/xplat-south-504273416-be\"}],\"loadBalancerInboundNatPools\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate6977/providers/Microsoft.Network/loadBalancers/xplat-south-504273416-lb/inboundNatPools/xplat-south-504273416-nat\"}]}}]}}]}\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"07cba2df-2115-49a2-9281-7c685829adeb\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate6977/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2\",\r\n  \"name\": \"xplattestvms2\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2798',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': 'a4bd7087-04f2-4372-8b6c-9b406e107ce0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '21584a89-3887-44cb-98d1-55abfbc5dca0',
  'x-ms-routing-request-id': 'WESTUS2:20170208T001721Z:21584a89-3887-44cb-98d1-55abfbc5dca0',
  date: 'Wed, 08 Feb 2017 00:17:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate6977/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 6\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"xplattest\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplattestvms2sto05042734.blob.core.windows.net/xplat-south-504273416-disk-container\",\r\n            \"https://xplattestvms2sto15042734.blob.core.windows.net/xplat-south-504273416-disk-container\",\r\n            \"https://xplattestvms2sto25042734.blob.core.windows.net/xplat-south-504273416-disk-container\",\r\n            \"https://xplattestvms2sto35042734.blob.core.windows.net/xplat-south-504273416-disk-container\",\r\n            \"https://xplattestvms2sto45042734.blob.core.windows.net/xplat-south-504273416-disk-container\"\r\n          ],\r\n          \"name\": \"xplat-south-504273416-os-disk\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"ReadOnly\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2008-R2-SP1\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"xplat-south-504273416-nic\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"xplat-south-504273416-pip\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate6977/providers/Microsoft.Network/virtualNetworks/xplat-south-504273416-vnet/subnets/xplat-south-504273416-snet\"},\"loadBalancerBackendAddressPools\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate6977/providers/Microsoft.Network/loadBalancers/xplat-south-504273416-lb/backendAddressPools/xplat-south-504273416-be\"}],\"loadBalancerInboundNatPools\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate6977/providers/Microsoft.Network/loadBalancers/xplat-south-504273416-lb/inboundNatPools/xplat-south-504273416-nat\"}]}}]}}]}\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"07cba2df-2115-49a2-9281-7c685829adeb\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate6977/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2\",\r\n  \"name\": \"xplattestvms2\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2798',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': 'a4bd7087-04f2-4372-8b6c-9b406e107ce0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '21584a89-3887-44cb-98d1-55abfbc5dca0',
  'x-ms-routing-request-id': 'WESTUS2:20170208T001721Z:21584a89-3887-44cb-98d1-55abfbc5dca0',
  date: 'Wed, 08 Feb 2017 00:17:20 GMT',
  connection: 'close' });
 return result; }]];