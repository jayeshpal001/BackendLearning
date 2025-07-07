const express = require('express');
const router = express.Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  searchUser
} = require('../controllers/userControllers');


// All routes mapped to controller functions

router.get('/', getUser);
router.get('/search', searchUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
