const Pegawai = require('./pegawai.model');

class PegawaiRepository {
  async findAll() {
    return await Pegawai.findAll();
  }

  async create(pegawai) {
    await await Pegawai.create(pegawai)
  }
}

module.exports = PegawaiRepository;
