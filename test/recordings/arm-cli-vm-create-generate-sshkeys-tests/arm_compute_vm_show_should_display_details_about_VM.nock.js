// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"400f5847-209a-4c35-99c2-d1caf3d4f934\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"16.04.0-LTS\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli1ef233eb257fd923-os-1487215343709\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatsshstorage16461.blob.core.windows.net/xplatsshstoragecnt14663/cli1ef233eb257fd923-os-1487215343709.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatsshvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjTCCAXmgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNzAyMTYwMzEyMjNa\\r\\nGA8yMDI3MDIxNjAzMTIyM1owGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEh\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDgAwggEJAoIBAHqDi7x1ohgus8yflZYjOz8/3WQF\\r\\ngGhijP665S7I+ikOYjy51qUh5+yHJSZ+fJl4Nl8HR38nr8M/tiPUbeSCbQspOKHF\\r\\nxr9fcQrSZXtXB6xVlCzj2aSwkGuzd2Nr5DZgPzD8vEg+XXkMznpeEoKpeZ6vk4mX\\r\\ncWyNmT7LJXYZxjAuQ8lyPJ8Dl9LL5obpWaz/gQuuogxmS0ITFfpHHQtN+u+rJthQ\\r\\n4hzbqtTCwX6COMUKFY7w5WMrkZ8BqVxjbcMCsZFsW92J1RPprafTOYWvUXlCvE88\\r\\nGr6tuURkvzCtaRQ0hrtNQ87rJjrGf0v8raaPCurDzR6/F48E4sPujyRWi9UCAwEA\\r\\nATAJBgcqhkjOPQQBA4IBAQAGvaUYwhb5YM6k0BgGQhslR5AOWRNIeJT0jeormve0\\r\\n63hpSkBtGEfNV2UhEldyzwTuiog4WhZXwbJe2yypHkn5Jek8Ig/4qw6kr49pgGCu\\r\\ntKTmzDGvR2g+yPlE3JyN1+Q6HwMZpJXYoVGK4CuDrqfPnvCKV9i+ZAc/d7Cyf6aw\\r\\n+AMG9AnAf4zroG1d3QSh1BYSGSjaJX95G9QJUT5B+qByIZC/qkMXukqWcZeX5qdJ\\r\\nGK3LYovy2NjvMSKHpYn0jqEyyLHzwOHn+O1Mr+h6Z8qLsvN5FO8bovlIk/XaeSuK\\r\\nQ+r8bGSfi7DBRzhRC0flOffzNSq7x4RhMDTMVu9FpqD5\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Network/networkInterfaces/xplatsshnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatsshstorage16461.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm\",\r\n  \"name\": \"xplatsshvm\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2743',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': 'c827568a-1f7d-430a-959d-7eb9875ea438',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '2819430d-049a-4446-9d0d-99384327db88',
  'x-ms-routing-request-id': 'EASTASIA:20170216T032704Z:2819430d-049a-4446-9d0d-99384327db88',
  date: 'Thu, 16 Feb 2017 03:27:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"400f5847-209a-4c35-99c2-d1caf3d4f934\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"16.04.0-LTS\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli1ef233eb257fd923-os-1487215343709\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatsshstorage16461.blob.core.windows.net/xplatsshstoragecnt14663/cli1ef233eb257fd923-os-1487215343709.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatsshvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjTCCAXmgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNzAyMTYwMzEyMjNa\\r\\nGA8yMDI3MDIxNjAzMTIyM1owGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEh\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDgAwggEJAoIBAHqDi7x1ohgus8yflZYjOz8/3WQF\\r\\ngGhijP665S7I+ikOYjy51qUh5+yHJSZ+fJl4Nl8HR38nr8M/tiPUbeSCbQspOKHF\\r\\nxr9fcQrSZXtXB6xVlCzj2aSwkGuzd2Nr5DZgPzD8vEg+XXkMznpeEoKpeZ6vk4mX\\r\\ncWyNmT7LJXYZxjAuQ8lyPJ8Dl9LL5obpWaz/gQuuogxmS0ITFfpHHQtN+u+rJthQ\\r\\n4hzbqtTCwX6COMUKFY7w5WMrkZ8BqVxjbcMCsZFsW92J1RPprafTOYWvUXlCvE88\\r\\nGr6tuURkvzCtaRQ0hrtNQ87rJjrGf0v8raaPCurDzR6/F48E4sPujyRWi9UCAwEA\\r\\nATAJBgcqhkjOPQQBA4IBAQAGvaUYwhb5YM6k0BgGQhslR5AOWRNIeJT0jeormve0\\r\\n63hpSkBtGEfNV2UhEldyzwTuiog4WhZXwbJe2yypHkn5Jek8Ig/4qw6kr49pgGCu\\r\\ntKTmzDGvR2g+yPlE3JyN1+Q6HwMZpJXYoVGK4CuDrqfPnvCKV9i+ZAc/d7Cyf6aw\\r\\n+AMG9AnAf4zroG1d3QSh1BYSGSjaJX95G9QJUT5B+qByIZC/qkMXukqWcZeX5qdJ\\r\\nGK3LYovy2NjvMSKHpYn0jqEyyLHzwOHn+O1Mr+h6Z8qLsvN5FO8bovlIk/XaeSuK\\r\\nQ+r8bGSfi7DBRzhRC0flOffzNSq7x4RhMDTMVu9FpqD5\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Network/networkInterfaces/xplatsshnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatsshstorage16461.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm\",\r\n  \"name\": \"xplatsshvm\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2743',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': 'c827568a-1f7d-430a-959d-7eb9875ea438',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '2819430d-049a-4446-9d0d-99384327db88',
  'x-ms-routing-request-id': 'EASTASIA:20170216T032704Z:2819430d-049a-4446-9d0d-99384327db88',
  date: 'Thu, 16 Feb 2017 03:27:04 GMT',
  connection: 'close' });
 return result; }]];