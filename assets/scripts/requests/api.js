'use strict'

const config = require('../config')
const store = require('../store')

const getAllShows = () => {
  return $.ajax({
    url: config.apiOrigin + 'shows',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getUsersShows = () => {
  return $.ajax({
    url: config.apiOrigin + 'shows_users',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addShow = (data) => {
  const buttonID = event.target.id
  $(`#${buttonID}`).hide()
  return $.ajax({
    url: config.apiOrigin + 'shows_users',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'shows_user': {
        'user_id': store.user.id,
        'show_id': data
      }
    }
  })
}

const attendedShow = (data) => {
  const buttonID = event.target.id
  $(`#${buttonID}`).hide()
  return $.ajax({
    url: config.apiOrigin + 'attended_show/' + data,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const removeShow = (data) => {
  const buttonID = event.target.id
  $(`#${buttonID}`).hide()
  return $.ajax({
    url: config.apiOrigin + 'remove_show/' + data,
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
  attendedShow,
  removeShow
}
