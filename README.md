# school-year-group

This is a very simple module that given a DOB, it will calculate which year groups they will be in during their school life. Currently only supporting English school years.

## Installation

```
npm i school-year-group
```

## Usage

```
import schoolYears from "school-year-group"
    const dob = new Date("2010-05-07")
    const year = schoolYears(dob)

Example return value

    [
      {
        year: 0,
        yearName: 'Reception',
        startDate: '2014-09-01',
        endDate: '2015-08-31'
      },
      {
        year: 1,
        yearName: 'Year 1',
        startDate: '2015-09-01',
        endDate: '2016-08-31'
      },
      {
        year: 2,
        yearName: 'Year 2',
        startDate: '2016-09-01',
        endDate: '2017-08-31'
      },
      {
        year: 3,
        yearName: 'Year 3',
        startDate: '2017-09-01',
        endDate: '2018-08-31'
      },
      {
        year: 4,
        yearName: 'Year 4',
        startDate: '2018-09-01',
        endDate: '2019-08-31'
      },
      {
        year: 5,
        yearName: 'Year 5',
        startDate: '2019-09-01',
        endDate: '2020-08-31'
      },
      {
        year: 6,
        yearName: 'Year 6',
        startDate: '2020-09-01',
        endDate: '2021-08-31'
      },
      {
        year: 7,
        yearName: 'Year 7',
        startDate: '2021-09-01',
        endDate: '2022-08-31'
      },
      {
        year: 8,
        yearName: 'Year 8',
        startDate: '2022-09-01',
        endDate: '2023-08-31'
      },
      {
        year: 9,
        yearName: 'Year 9',
        startDate: '2023-09-01',
        endDate: '2024-08-31'
      },
      {
        year: 10,
        yearName: 'Year 10',
        startDate: '2024-09-01',
        endDate: '2025-08-31'
      },
      {
        year: 11,
        yearName: 'Year 11',
        startDate: '2025-09-01',
        endDate: '2026-08-31'
      },
      {
        year: 12,
        yearName: 'Year 12',
        startDate: '2026-09-01',
        endDate: '2027-08-31'
      },
      {
        year: 13,
        yearName: 'Year 13',
        startDate: '2027-09-01',
        endDate: '2028-08-31'
      }
    ]

const year = schoolYears(dob, true)  // will return the current year for the child for todays date

const year = schoolYears(dob, "2024-01-01")  // will return the year group data for the child on the 1st Jan 2024
```
