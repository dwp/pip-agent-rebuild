//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

addFilter('getMonth', (month) => {
  const monthIndex = parseInt(month, 10) - 1
  return months[monthIndex]
})

addFilter('formatDate', (input) => {
  const date = input ? new Date(input) : new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  return day + ' ' + months[month] + ' ' + year
})
