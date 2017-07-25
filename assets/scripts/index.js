'use strict'

const getFormFields = require('../../lib/get-form-fields')
const authEvents = require('./auth/auth-events')
const requestsEvents = require('./requests/events')

$(document).on('click', '.add-show-button', function () {
  const data = $(this).closest('div').data('show-id')
  requestsEvents.onAddShow(data);
})

$(document).on('click', '.remove-show-button', function () {
  requestsEvents.onRemoveShow(this.id)
})

$(document).on('submit', '.update-show', function (event) {
  event.preventDefault()
  // let data = $('#updt').prop('value');
  const data = getFormFields(this)
  const newList = data.show.team
  const id = $(this).data('value')
  requestsEvents.onUpdateShow(id, newList)
})

$(() => {
  authEvents.addHandlers()
  requestsEvents.addHandlers()
  $('#select-sign-up').on('click', function () {
    $('#sign-up-modal').modal('show')
  })
  $('.sign-up-btn').on('click', function () {
    $('#sign-up-modal').modal('hide')
  })
  $('#select-sign-in').on('click', function () {
    $('#sign-in-modal').modal('show')
  })
  $('.sign-in-btn').on('click', function () {
    $('#sign-in-modal').modal('hide')
  })
  $('#select-change-password').on('click', function () {
    $('#change-password-modal').modal('show')
  })
  $('.change-password-btn').on('click', function () {
    $('#change-password-modal').modal('hide')
  })
  // $('.update-player-button').on('click', function(){
  //   $('#update-player-modal').modal('hide');
  // });
})
