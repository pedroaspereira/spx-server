import User from '../models/User';
import File from '../models/File';

class SupplierController {
  async index(req, res) {
    const suppliers = await User.findAll({
      where: { supplier: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path'],
        },
      ],
    });

    return res.json(suppliers);
  }
}

export default new SupplierController();
