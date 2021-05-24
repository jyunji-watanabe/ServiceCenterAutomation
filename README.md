# ServiceCenterAutomation
Automate OutSystems Service Center with CodeceptJS

## Target
- OutSystems: Personal Environment Version 11.11.0 (Build 26942)
- Browser: Chromeium using Puppeteer

## Retrieve Active Named Users and Application Objects count
Command
```
npx codeceptjs run tests/licensingInfo_test.js
```

Result is outputted in output/LicensingInfo_yyyyMMdd.txt.
Sample:
```
Active Named Users: 349
Application Objects: 872
```

## TODO (memo)
- Download a log excel file for the last one week
- Retrieve Environment Health
- Retrieve modules in the Independent Module
- Create a list of modules filtered with matching by name
