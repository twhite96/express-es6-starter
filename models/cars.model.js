import mongoose from 'mongoose';

const CarSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true, index: true}
}, {collection : 'Car'});

let CarsModel = mongoose.model('Car', CarSchema);

CarsModel.getAll = async () => {
    return CarsModel.find({});
}

CarsModel.addCar = async (carToAdd) => {
    return carToAdd.save();
}

CarsModel.removeCar = async (carName, cb) => {
    CarsModel.remove({name: carName}, cb);
}

export default CarsModel;