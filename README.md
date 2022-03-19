# ServiceCenterAutomation
Automate OutSystems Service Center with CodeceptJS

## Target
- OutSystems: Personal Environment Version 11.11.0 (Build 26942)
- Browser: Chromeium using Puppeteer

## .env file
This code uses dotenv to store sensitive information.
So, we need to create a .env file under root folder containig text like (replace text after '=' sign with proper values):
```
URL=Path_To_ServiceCenter
ACCOUNT=Your_Account_To_Login
PASSWORD=Password
```

## Retrieve Active Named Users and Application Objects count
Command
```
npx codeceptjs run tests/licensingInfo_test.js
```

Result will be outputted in output/LicensingInfo_yyyyMMdd.txt.
Sample:
```
Active Named Users: 349
Application Objects: 872
```

## Retrieve Front-end Server statuses from the Environment Health page in PE
Command
```
npx codeceptjs run .\tests\environmenthealth_test.js --steps
```

Result will be shown on the terminal.
In real projects we can push this information into a file or DB to check differences or alert problems.
Sample:
```
2022/03/19 15:40:32,Ok,Ok,Ok,OK,OK,OK
```

## TODO (memo)
- Download a log excel file for the last one week
- Retrieve modules in the Independent Module
- Create a list of modules filtered with matching by name
