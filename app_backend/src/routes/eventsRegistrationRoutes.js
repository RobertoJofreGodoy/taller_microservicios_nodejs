const express = require('express')
const router = express.Router()

const {
  createEventRegistration,
  getAllEventRegistrations,
  getEventRegistrationByIdUserID,
  getEventRegistrationByIdEventID,
  deleteEventRegistration
} = require('../controllers/eventsRegistrationController')

router.post('/', createEventRegistration)
router.get('/', getAllEventRegistrations)
router.get('/user/:userId', getEventRegistrationByIdUserID)
router.get('/event/:eventId', getEventRegistrationByIdEventID)
router.delete('/:id', deleteEventRegistration)

module.exports = router
