const { supabase } = require('../db')

const createUser = async (req, res) => {
  const { name, email } = req.body
  const { error } = await supabase.from('users').insert([{ name, email }])

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json({ message: 'User created' })
}

const getAllUsers = async (_, res) => {
  const { data, error } = await supabase.from('users').select('*')

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json(data)
}

const getUserById = async (req, res) => {
  const { id } = req.params
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single()

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json(data)
}

// TODO: Obtener un usuario por su correo electrónico

const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body
  const { data, error } = await supabase
    .from('users')
    .update({ name, email })
    .match({ id })

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json(data)
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  const { data, error } = await supabase.from('users').delete().match({ id })

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json(data)
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
}
