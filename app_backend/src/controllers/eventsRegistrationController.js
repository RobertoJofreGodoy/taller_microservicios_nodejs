/* eslint-disable camelcase */
const { supabase } = require('../db')

const createEventRegistration = async (req, res) => {
  const { user_id, event_id } = req.body

  console.log(`Event registration for user ${user_id} and event ${event_id}`)

  const { error } = await supabase
    .from('events_registration')
    .insert([{ user_id, event_id }])

  if (error) return res.status(401).json({ error: error.message })
  return res.status(200).json({ message: 'Event registration created' })
}

const getAllEventRegistrations = async (req, res) => {
  const { data, error } = await supabase.from('events_registration').select('*')

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json(data)
}

const getEventRegistrationByIdUserID = async (req, res) => {
  const { userId } = req.params
  const { data, error } = await supabase
    .from('events_registration')
    .select('*')
    .eq('user_id', userId)

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json(data)
}

const getEventRegistrationByIdEventID = async (req, res) => {
  const { eventId } = req.params
  const { data, error } = await supabase
    .from('events_registration')
    .select('*')
    .eq('event_id', eventId)

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json(data)
}

const deleteEventRegistration = async (req, res) => {
  const { id } = req.params
  const { data, error } = await supabase.from('events_registration').delete().match({ id })

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json(data)
}

module.exports = {
  createEventRegistration,
  getAllEventRegistrations,
  getEventRegistrationByIdUserID,
  getEventRegistrationByIdEventID,
  deleteEventRegistration
}
