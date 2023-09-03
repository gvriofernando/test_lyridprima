class PegawaiService {
    constructor(pegawaiRepository) {
      this.pegawaiRepository = pegawaiRepository;
    }
  
    async getAllPegawais() {
      return await this.pegawaiRepository.findAll();
    }
  
    async createPegawai(pegawai) {
      return await this.pegawaiRepository.create(pegawai);
    }
}
  
module.exports = PegawaiService;