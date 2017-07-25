'use strict'

const config = require('../config')
const store = require('../store')

const getAllShows = () => {
  console.log(store.user.token)
  return $.ajax({
    url: config.localhost + 'shows',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getUsersShows = () => {
  return $.ajax({
    url: config.localhost + 'my-shows',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addShow = (data) => {
  return $.ajax({
    url: config.localhost + 'my-shows/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'show_id': data
    }
  }
)
}

const removeShow = (data) => {
  return $.ajax({
    url: config.localhost + 'my-shows/',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'show_id': data
    }
  })
}

module.exports = {
  getAllShows,
  getUsersShows,
  addShow,
  removeShow
  // createPlayer,
  // updatePlayer,
}
