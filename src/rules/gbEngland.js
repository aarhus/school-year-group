


export default (dob) => {

  let schoolBirthYear = dob.getFullYear()

  if (dob.getMonth() < 9) {
    schoolBirthYear = schoolBirthYear + 4
  }
  else {
    schoolBirthYear = schoolBirthYear + 5
  }


  let years = []

  for (let i = 0; i < 14; i++) {
    years.push({ year: i, yearName: (i == 0 ? "Reception" : `Year ${i}`), startDate: `${schoolBirthYear + i}-09-01`, endDate: `${schoolBirthYear + i + 1}-08-31` })
  }


  return years
}