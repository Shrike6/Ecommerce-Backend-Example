const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categories = await Category.findByPk(req.params.id, {
    include: [{ model: Product, through: Category, as: 'location_travellers' }]
  });

  if (!categories) {
    res.status(404).json({ message: 'No category found with this id!' });
    return;
  }

  res.status(200).json(categories);
} catch (err) {
  res.status(500).json(err);
});

router.post('/', async (req, res) => {
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
