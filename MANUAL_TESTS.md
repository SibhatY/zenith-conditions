## Test Cases

## Overview
This document displays manual testing for the Aether Nova weather application. The goal is to make sure that key features function correctly, handle errors properly, and provide a smooth user experience across devices.

*Note: This document will be continuously updated. Additional test cases will be added over time.


| Test # | Feature | Description | Steps | Expected Result | Status |
|:-------------|:--------|:------------|:------|:----------------|:-------|
| 01 | Login | Verify that app blocks access without access code | Load the app, do not enter code and login | User stays on login page. \"Please fill out this field\" alert pops up | Pass |
| 02 | Login | Verify that app blocks access when using incorrect access code | Load the app, enter \"1234\" and login | User stays on login page. Text stating \"Incorrect code, try again\" displays below | Pass |
| 03 | Login | Verify access with correct code | Enter correct access code and submit | Weather form and title/subtitle are shown | Pass |
| 04 | Weather Form | Valid city search | Enter \"Dallas\" and submit | Weather card displays Dallas weather | Pass |
| 05 | Weather Form | Invalid city search | Enter \"Abcdefg\" | Error message displayed to user. \"No options\" displayed on dropdown | Pass |
| 06 | Weather Form | Minimum character requirement for search | Enter less than 4 characters for city input | No API call, no autocomplete dropdown appears | Pass |
| 07 | Temperature Scales | Verify ability to change between Fahrenheit and Celsius | Do valid city search, choose temperature scale, get weather, change temperature scale after weather card pops up and resubmit | Weather card updates with change in weather scale | Pass |
| 08 | Weather Card Flip | Verify that weather card flips on click | After the weather card appears, hover cursor over it and click the card | Card flips to show the activity/clothing suggestions | Pass |
| 09 | Autocomplete | Verify the dynamic city suggestions | Type \"Minne\" or part of any desired city in the input field| Autocomplete dropdown shows desired city or similar | Pass/Many desired cities do not appear until more characters used due to vast options of names. |
| 10 | Rate Limiting | Limit excessive search attempts | Spam city searches rapidly | API calls blocked after the limit is reached, error message shown | Pending |