const express = require('express')
const path = require('path')

const router = new express.Router()

function makeAStay(data) {
  const admission = new Date(`${data['admission-year']}-${data['admission-month']}-${data['admission-day']}`)
  const discharge = new Date(`${data['discharge-year']}-${data['discharge-month']}-${data['discharge-day']}`)
  const totalDays = Math.max(differenceInDays(discharge, admission) - 1, 0)
  return {admission, discharge, totalDays}
}

// PDF DOWNLOADER
router.use(`/pip-letter.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-letter.pdf')))
router.use(`/pip-doc1.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-doc1.pdf')))
router.use(`/pip-doc2.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-doc2.pdf')))
router.use(`/pip-doc3.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-doc3.pdf')))
router.use(`/pip-doc4.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-doc4.pdf')))
router.use(`/pip-doc5.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-doc5.pdf')))
router.use(`/pip-doc8.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-doc8.pdf')))

// —————————————————————————————————



router.post(`/system-citizen-record-selector-router`, (req, res) => {
  const systemCitizenRecordSelector = req.session.data['system-citizen-record-selector']

  if (systemCitizenRecordSelector == '1') {
    res.redirect(`home-citizen`)
  }
  else if (systemCitizenRecordSelector == '1a') {
    res.redirect(`home-citizen-na`)
  }
  else if (systemCitizenRecordSelector == '1b') {
    res.redirect(`home-citizen-ns`)
  }
  else if (systemCitizenRecordSelector == '1c') {
    res.redirect(`home-citizen-bp`)
  }
  else if (systemCitizenRecordSelector == '1d') {
    res.redirect(`home-citizen-ip`)
  }
  else if (systemCitizenRecordSelector == '1e') {
    res.redirect(`home-citizen-nil`)
  }
  else if (systemCitizenRecordSelector == '1f') {
    res.redirect(`home-citizen-nil-mr`)
  }
  else if (systemCitizenRecordSelector == '1g') {
    res.redirect(`home-citizen-naa`)
  }
  else if (systemCitizenRecordSelector == '1i') {
    res.redirect(`home-citizen-ip-fixed`)
  }
  else if (systemCitizenRecordSelector == '4') {
    res.redirect(`home-organisation`)
  }
  else if (systemCitizenRecordSelector == '3') {
    res.redirect(`home-del-auth-empty`)
  }
  else {
    res.redirect(`home-del-auth-check`)
  }
})



router.post(`/home-del-auth-check-router`, (req, res) => {
  const delAuthCheck = req.session.data['home-del-auth-check']

  if (delAuthCheck == 'DelAuth') {
    res.redirect(`home-del-auth`)
  }
  else if (delAuthCheck == 'Citizen') {
    res.redirect(`home-citizen`)
  }
  else {
    res.redirect(`home-del-auth`)
  }
})






module.exports = router
