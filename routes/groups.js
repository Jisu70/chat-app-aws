// Dependencies
const express = require('express');
const router = express.Router();

// Controller
const {
  createNewGroup,
  getAllGroups,
  addMembers2Group,
  kickMembers2Group,
  changeAdmin,
  deleteGroup
} = require('../controllers/groups');

// Router instance
router.post('/groups', authorization, createNewGroup);
router.get('/groups', authorization, getAllGroups);
router.post('/groups/addmembers', authorization, addMembers2Group);
router.post('/groups/kickmembers', authorization, kickMembers2Group);
router.patch('/groups/promoteAdmin', authorization, changeAdmin);
router.delete('/groups/deleteGroup/:id', authorization, deleteGroup);

// Exporting the module
module.exports = router;
