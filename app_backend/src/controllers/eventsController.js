/* eslint-disable camelcase */
const { supabase } = require('../db')

const createEvent = async (req, res) => {
  const { name, tickets_limit, ticket_price, date } = req.body
  const { error } = await supabase
    .from('events')
    .insert([{ name, tickets_limit, ticket_price, date }])

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json({ message: 'Event created' })
}

const getAllEvents = async (req, res) => {
  const { data, error } = await supabase.from('events').select('*')

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json(data)
}

const getEventById = async (req, res) => {
  const { id } = req.params
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single()

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json(data)
}

// TODO: obtener un evento por su nombre

const updateEvent = async (req, res) => {
  const { id } = req.params
  const { name, tickets_limit, ticket_price, date } = req.body
  const { data, error } = await supabase
    .from('events')
    .update({ name, tickets_limit, ticket_price, date })
    .match({ id })

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json(data)
}

const deleteEvent = async (req, res) => {
  const { id } = req.params
  const { data, error } = await supabase.from('events').delete().match({ id })

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json(data)
}

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
}
