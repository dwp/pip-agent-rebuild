const express = require('express')
const path = require('path')

const router = new express.Router()

function makeAStay(data) {
  const admission = new Date(`${data['admission-year']}-${data['admission-month']}-${data['admission-day']}`)
  const discharge = new Date(`${data['discharge-year']}-${data['discharge-month']}-${data['discharge-day']}`)
  const totalDays = Math.max(differenceInDays(discharge, admission) - 1, 0)
  return {admission, discharge, totalDays}
}


router.post(`/ap-send-check-router`, (req, res) => {
  const apSendCheck = req.session.data['XXX']

  if (apSendCheck == 'SendToAP') {
    res.redirect(`XXX`)
  }
  else if (apSendCheck == 'MoveToPIPcs') {
    res.redirect(`XXX`)
  }
  else if (apSendCheck == 'Disallow') {
    res.redirect(`XXX`)
  }
  else if (apSendCheck == 'SaveAndReturn') {
    res.redirect(`application-exit-bail`)
  }
   else {
    res.redirect(`XXX`)
  }
})




module.exports = router
