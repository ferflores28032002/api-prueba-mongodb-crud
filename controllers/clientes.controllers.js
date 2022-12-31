import { clientesModel } from "../models/clientes.model.js";

export const loadClientes = async (req, res) => {
  try {
    const clientes = await clientesModel.find();

    res.json({
      clientes,
    });
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
};

export const addClientes = async (req, res) => {
  const { name, numeroDocumento, direction, telephone } = req.body;
  try {
    const cliente = await clientesModel.create({
      name,
      numeroDocumento,
      direction,
      telephone,
    });

    res.json({
      msg: "¡Cliente creado exitosamente!",
      cliente,
    });
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
};


export const deleteClient = async (req, res) => {
  const { ids } = req.body;

  try {
    for (let i = 0; i <= ids.length; i++) {
      const usuarios = await clientesModel.deleteOne({ _id: ids[i] });

      console.log(usuarios)
    }

    res.json({
      msg: "eliminados"
    });
  } catch (error) {
    console.log(error);
  }
};


export const clienteForId = async (req, res) => {

  const { id } = req.params

  try {
    
    const cliente = await clientesModel.findOne({ _id: id })

    if(cliente) {
      return res.json(cliente)
    }else {
      return res.status(404).json({
        msg: "No existe un cliente con el id " + id
      })
    }

  } catch (error) {
    console.log(error)
  }
}


export const editClientes = async (req, res) => {

  const { name, numeroDocumento, telephone, direction } = req.body
  const { id } = req.params

 try {

    const cliente = await clientesModel.findOne({ _id: id })

    if(cliente) {
      cliente.set({
        name,
        numeroDocumento,
        direction,
        telephone
      })

      cliente.save()


      return res.json({
        msg: "Cliente actualizado con exito"
      })
    }else {
      return res.status(404).json({
        msg: "No existe un cliente con ese id"
      })
    }

 } catch (error) {
  console.log(error)
 }
}