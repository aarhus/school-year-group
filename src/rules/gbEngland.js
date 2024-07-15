


export default (dob, when = false) => {

  let schoolBirthYear = dob.getFullYear()

  if (dob.getMonth() < 9) {
    schoolBirthYear = schoolBirthYear + 4
  }
  else {
    schoolBirthYear = schoolBirthYear + 5
  }


  let years = []

  if (when === true) {
    const now = new Date()
    when = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate()
  }


  for (let i = 0; i < 14; i++) {
    let startDate = `${schoolBirthYear + i}-09-01`
    let endDate = `${schoolBirthYear + i + 1}-08-31`

    if (when === false) {
      years.push({ year: i, yearName: (i == 0 ? "Reception" : `Year ${i}`), startDate, endDate })
      continue
    }

    if (when >= startDate && when <= endDate) {
      return { year: i, yearName: (i == 0 ? "Reception" : `Year ${i}`), startDate, endDate }
    }



  }

  if (years.length === 0) {
    return false
  }


  return years
}