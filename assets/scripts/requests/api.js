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
    url: config.localhost + 'shows_users',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addShow = (data) => {
  console.log('this is addshow data' + data)
  console.log('this is the user ', store.user)
  return $.ajax({
    url: config.localhost + 'shows_users',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'shows_user':
      {'user_id': store.user.id,
        'show_id': data
      }
    }
  }
)
}

const removeShow = (data) => {
  console.log(data)
  return $.ajax({
    url: config.localhost + 'shows_users/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
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
