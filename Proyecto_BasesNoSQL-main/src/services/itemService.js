// src/services/itemService.js
const Item = require('../models/item');
 
class ItemService {
  async createItem(data) {
 
    const item = new Item(data);
    await item.save();
    return item;
  }
 
  async getItem(id) {
    return await Item.findById(id);
  }
 
  async updateItem(id, data) {
    return await Item.findByIdAndUpdate(id, data, { new: true });
  }
 
  async deleteItem(id) {
    return await Item.findByIdAndDelete(id);
  }
 
  async agrupacionPorSabor() {
    return Item.aggregate([
    {
      $group: {
        _id: "$Cantidad",        
        cantidad: { $sum: 1 }  
      }
    }
  ])
  }

  async ejemploDeMatch() {
    return Item.aggregate([
    {
      $match: {
        Cantidad: { $gte: 12 }, 
        Total: { $gte: 850 }
      }
    }
  ])
  }

  async ejemploDeProject() {
    return Item.aggregate([
    {
      $project: {
        _id: 0,
        Sabor: 1,
        Cantidad: 1,
        Total: 1
      }
    }
  ])
  }

  async ejemploCompleto() {
    return Item.aggregate([
      {
        $match: {
          Cantidad: { $gte: 20 }
        }
      },
      {
        $project: {
          _id: 0,
          Sabor: 1,
          Cantidad: 1,
          Total: 1
        }
      },
      {
        $sort: {
          _id: -1
        }
      }
    ])
    }
}
 
module.exports = new ItemService();