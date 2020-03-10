import User from '../models/User';
import File from '../models/File';
import Customer from '../models/Customer';

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

  async store(req, res) {
    // const schema = Yup.object().shape({
    //   name: Yup.string().required(),
    //   email: Yup.string()
    //     .email()
    //     .required(),
    //   password: Yup.string()
    //     .required()
    //     .min(6),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.statu(400).json({ error: 'Validation failed' });
    // }
    const { user_id } = req.params;
    const { companyName, email, street, neighborhood, zip, cnpj } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const supplier = await Customer.create({
      companyName,
      email,
      street,
      neighborhood,
      zip,
      cnpj,
      user_id,
    });

    return res.json(supplier);
  }
}

export default new SupplierController();
