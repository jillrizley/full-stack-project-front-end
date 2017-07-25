'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  console.log(config.apiOrigin)
  return $.ajax({
    url: config.localhost + 'sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log('signIn is running!!')
  console.log('Data: ', data)
  console.log('URL: ', config.localhost)

  return $.ajax({
    url: config.localhost + 'sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.localhost + 'change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.localhost + 'sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
