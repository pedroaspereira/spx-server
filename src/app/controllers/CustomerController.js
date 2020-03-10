import Customer from '../models/Customer';

class CustomerController {
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

    const customerExists = await Customer.findOne({
      where: { email: req.body.email },
    });

    if (customerExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const {
      id,
      companyName,
      email,
      street,
      neighborhood,
      zip,
      cnpj,
    } = await Customer.create(req.body);

    return res.json({
      id,
      companyName,
      email,
      street,
      neighborhood,
      zip,
      cnpj,
    });
  }
}

export default new CustomerController();
