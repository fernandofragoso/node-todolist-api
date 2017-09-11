'use strict';
module.exports = function(app) {
  var task = require('../controllers/taskController');
  var contact = require('../controllers/contactController');

  // task Routes
  app.route('/tasks/:owner')
    .get(task.list_all_tasks)
    .post(task.create_a_task);

  app.route('/tasks/:owner/:taskId')
    .get(task.read_a_task)
    .put(task.update_a_task)
    .delete(task.delete_a_task);

  // contact Routes
  app.route('/contacts/:owner')
    .get(contact.list_all_contacts)
    .post(contact.create_a_contact);

  app.route('/contacts/:owner/:contactId')
    .get(contact.read_a_contact)
    .put(contact.update_a_contact)
    .delete(contact.delete_a_contact);
};
