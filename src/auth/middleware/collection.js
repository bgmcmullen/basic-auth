'use strict'

class Collection {

  constructor( model ) {
    this.model = model;
  }

  // CRUD Methods

  async create( data ) {
    try {
      let record = await this.model.create(data);
      return record;
    } catch(e) {
      console.log('Error creating data for model', this.model.name);
      return e;
    }
  }

  async read( username, options={} ) { 
    let records = null;
    if(username) {
      options.where = { username };
      records = await this.model.findOne(options);
    } else {
      records = await this.model.findAll(options);
    }
    return records;
  }

  async update( id, data ) {
    try {
      let record = await this.model.findOne({where: {id}});
      let updatedRecord = await record.update(data);
      return updatedRecord;
    } catch(e) {
      console.log("Error updating data for model", this.model.name);
      return e;
    }
  }

  async delete( id ) {
    try{
      if(!id)  throw new Error('No ID provided for delete operation');
      let deletedRecord = await this.model.destroy({where: {id}});
      return deletedRecord;
    } catch(e) {
      console.log('Error deleting data for model', this.model.name);
      return e;
    }
  }

  async deleteAll() {
    try {
      // Delete all records without any conditions
      let deletedRecordsCount = await this.model.destroy({ where: {} });
      return deletedRecordsCount;
    } catch (e) {
      console.log('Error deleting all data for model', this.model.name);
      return e;
    }
  }
}

module.exports = Collection;