'use strict'

const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields')

const onGetAllShows = function () {
  api.getAllShows()
    .done(ui.getAllShowsSuccess)
    .fail(ui.failure)
}

const onGetUsersShows = function () {
  api.getUsersShows()
    .done(ui.getUsersShowsSuccess)
    .fail(ui.failure)
}

const onAddShow = function (showId) {
  api.addShow(showId)
    .done(ui.addShowSuccess)
    .fail(ui.failure)
}

const onRemoveShow = function (data) {
  api.removeShow(data)
    .done(ui.removeShowSuccess)
    .fail(ui.failure)
}

const addHandlers = () => {
  $('#get-all-shows').on('click', onGetAllShows)
  $('#get-users-shows').on('click', onGetUsersShows)
}

module.exports = {
  addHandlers,
  onAddShow,
  onRemoveShow,
  onGetAllShows,
  onGetUsersShows
  // onUpdatePlayer,
}
