let defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = defaultPlants.length;

const originsDic = {
	Brasil: 8,
	Elsewere: 7,
};

const calculateWaterFrequency = (needsSun, size, origin = "Elsewere") => {
	const sunNeededFrequency = size * 0.77 + (originsDic[origin]);
	const sunNotNeededFrequency = (size / 2) * 1.33 + (originsDic[origin]);

  return needsSun ? sunNeededFrequency : sunNotNeededFrequency;
};

const initPlant = (id, { breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size
  };
  return newPlant;
};

const getPlants = () => {
  return defaultPlants;
};

const needsSun = (plant) => {
  return !!plant.needsSun;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id == id);
};

const removePlantById = (id) => {
  defaultPlants = defaultPlants.filter((plant) => plant.id !== id);
};

const getPlantsThatNeedsSunWithId = (id) => {
  return defaultPlants.filter((plant) => {
    return needsSun(plant) && plant.id === id;
  });
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id == plantId) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlant = (plant) => {
  createdPlants++;
  const mappedPlant = initPlant(createdPlants, { ...plant });
  defaultPlants.push(mappedPlant);
  return mappedPlant;
};

module.exports = {
  createNewPlant,
  editPlant,
  getPlantsThatNeedsSunWithId,
  removePlantById,
  getPlantById,
  getPlants,
};
