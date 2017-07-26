'use strict'

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

const removeShowSuccess = (data) => {
  console.log(data)
}

const addShowSuccess = (data) => {
  console.log('addShowSuccess data = ', data)
}

const getUsersShowsSuccess = (data) => {
  console.log('shows_users data', data)
  const displayUsersShows = require('../templates/display-users_shows.handlebars')
  $('#content').html(displayUsersShows({
    shows: data.shows
  }))
}

const getAllShowsSuccess = (data) => {
  console.log(data)
  const displayAllShows = require('../templates/display-all-shows.handlebars')
  $('#content').html(displayAllShows({
    shows: data
  }))
}

module.exports = {
  success,
  failure,
  getAllShowsSuccess,
  addShowSuccess,
  getUsersShowsSuccess,
  removeShowSuccess
}
