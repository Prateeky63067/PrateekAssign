const express = require('express');
const router = express.Router();
const pantryController = require('../controllers/pantryController');
const penID="1703ac1c-c008-4950-a020-2ff7e44e79ea";

// Create a new pantry item
router.post('/add-item', pantryController.createPantryItem);

// Get a pantry item by basket key
router.get('/get-item/:1703ac1c-c008-4950-a020-2ff7e44e79ea/:ShubhKey', pantryController.getPantryItem);

// List all pantry items under a specified pantry with optional name filtering
router.get('/list-baskets/:1703ac1c-c008-4950-a020-2ff7e44e79ea', pantryController.listBaskets);

// Update a pantry item by basket key
router.put('/update-item/:1703ac1c-c008-4950-a020-2ff7e44e79ea/:ShubhKey', pantryController.updatePantryItem);

// Delete a pantry item by basket key
router.delete('/delete-item/:1703ac1c-c008-4950-a020-2ff7e44e79ea/:ShubhKey', pantryController.deletePantryItem);

module.exports = router;