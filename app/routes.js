//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()




// Start folder specific routes


router.use('/agent-0-13', require('./routes/agent-0-13/router.js'));


router.use('/pa-0-6/apply', require('./routes/pa-0-6/apply.js'));

router.use('/citizen-outcome-0-1', require('./routes/citizen-outcome-0-1/router.js'));

router.use('/agent-day-0-1-8', require('./routes/agent-day-0-1-8/router.js'));
router.use('/agent-day-0-1-9', require('./routes/agent-day-0-1-9/router.js'));
router.use('/agent-day-0-2-1', require('./routes/agent-day-0-2-1/router.js'));


router.use('/move-to-pipcs-1', require('./routes/move-to-pipcs-1/router.js'));

router.use('/agent-stats-0-4', require('./routes/agent-stats-0-4/router.js'));

router.use('/another-decision-0-0-4', require('./routes/another-decision-0-0-4/router.js'));
router.use('/another-decision-0-0-5', require('./routes/another-decision-0-0-5/router.js'));
router.use('/another-decision-0-0-6', require('./routes/another-decision-0-0-6/router.js'));
router.use('/another-decision-0-0-7', require('./routes/another-decision-0-0-7/router.js'));

router.use('/person-record-0-0-1', require('./routes/person-record-0-0-1/router.js'));
router.use('/person-record-0-0-2', require('./routes/person-record-0-0-2/router.js'));
router.use('/person-record-0-0-3', require('./routes/person-record-0-0-3/router.js'));

router.use('/documents-0-1', require('./routes/documents-0-1/router.js'));


module.exports = router
