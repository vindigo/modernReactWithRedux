import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: []
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.push({
        name: action.pauload.name,
        cost: action.payload.cost,
        id: nanoid()
      })
    },
    removeCar(state, action) {
      const updatedCars = state.cars.filter( (car) => {
        return car.id !== action.payload;
      });

      state.cars = updatedCars;
    }
  }  
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.action;
export const carsReducer = carsSlice.reducer;