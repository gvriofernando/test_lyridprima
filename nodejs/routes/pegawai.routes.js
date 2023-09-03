const express = require('express');
const router = express.Router();

const PegawaiRepository = require('../domains/pegawai/pegawai.repository');
const PegawaiService = require('../domains/pegawai/pegawai.service');
const Pegawai = require('../domains/pegawai/pegawai.entity');

const pegawaiRepository = new PegawaiRepository();
const pegawaiService = new PegawaiService(pegawaiRepository);

// GET all pegawai
router.get('/', async (req, res) => {
  try {
    const pegawais = await pegawaiService.getAllPegawais();
    res.json(pegawais);
  } catch (error) {
    console.error('Error fetching pegawai:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a new pegawai
router.post('/', async (req, res) => {
  try {
    const { name, address, imageName } = req.body;
    const pegawai = await pegawaiService.createPegawai(new Pegawai(null, name, address, imageName));
    res.status(201).json(pegawai);
  } catch (error) {
    console.error('Error creating pegawai:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;