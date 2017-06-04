# ICEA Energy Production

## Google Sheet (Data)
This project utilizes Google Sheets to retrieve Data. You must have Read/Write privileges to modify data on the spreadsheet.

[https://docs.google.com/spreadsheets/d/11SfUjhoXnDKTjXofiA3EWtT2sorrIdK8ZZxvGnumRQM/edit#gid=493512505](https://docs.google.com/spreadsheets/d/11SfUjhoXnDKTjXofiA3EWtT2sorrIdK8ZZxvGnumRQM/edit#gid=493512505)


|Column|Values|Description|
|---|---|---|
|carousel|y/n|Toggles weather or not the member is displayed in the carousel
|iceamember|Member's name|The member name to display at the top of the carousel if no logo is present|
|energytype|solar/geothermal|The energy type the member produces. Solar energy will be affected by a Quarterly Seasonal Adjustment|
|memberlogo|Path to logo|The path to the member's logo. This will be assigned when the file is uploaded to Wordpress. E.g., /wp-content/uploads/2017/06/logo.jpg|
|nameplatecapacity|decimal|The nameplate capacity for the member|
|capacityfactor|decimal|The capacity factor for the member|
|day|decimal|nameplatecapacity * capacityfactor * 24

## Quarterly Seasonal Adjustment
The program modifies the data presented on the website is using the Quarterly Seasonal Adjustment if the member's energy type is **solar**. This will affect the daily energy production which in turn affects month, but not year. The adjustments are as follows:

|January - March|April - June|July - September|October - December|
|---|---|---|---|
|0.76|1.26|1.25|0.7|

Non-solar energy types will have their QSA set to 1 year-round.

## Calculation of Values

### Time-Based Values
**Daily Energy Production** = (nameplatecapacity * capacityfactor) * 24  
**QSA Daily Energy Production** = ((nameplatecapacity * capacityfactor) * 24) * QSA  
**Monthly Energy Production** = QSA Daily Energy Production * 30  
**Annual Energy Production** = Daily Energy Production * 365  

### Relatable Values
**Homes Powered Annually** = Annual Energy Production / 12  
**Lbs of Carbon Emissions Saved Annually** = Annual Energy Production * 2100
