import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import {StoreProvider} from "./stores/StoreProvider"
import HeaderComponent from "./components/Header"
import DisplayAllMakes from "./components/DisplayAllMakes"
import logo from './assets/images/logo.jpg'

// import { makeObservable, observable, computed, action } from "mobx"

function App() {
    return (
        <StoreProvider>
            <main className="App">
                <HeaderComponent />
                <DisplayAllMakes /> {/* // this should be conditional depending if person needs all makes if person types in custom make car models should be rendered instantly */}
            </main>
        </StoreProvider>
    );
}

export default App;

/*
1. Get All Makes
    https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json
3. Get All Manufacturers
    https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json
7. Get Makes for Vehicle Type by Vehicle Type Name
    https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json
8. Get Vehicle Types for Make by Name
    https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/mercedes?format=json
9. Get Vehicle Types for Make by Id
    https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/450?format=json
11. Get Models for Make
    https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/honda?format=json
12. Get Models for MakeId
    https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json
13. Get Models for Make and a combination of Year and Vehicle Type
    https://vpic.nhtsa.dot.gov/apihttps://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/honda/modelyear/2015/vehicletype/truck?format=json
14. Get Models for Make Id and a combination of Year and Vehicle Type
    https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015/vehicletype/truck?format=json
*/





/*********************************************************************************************************************************
1. Get All Makes
    https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json
2. Get Parts
    https://vpic.nhtsa.dot.gov/api/vehicles/GetParts?type=565&fromDate=1/1/2015&toDate=5/5/2015&format=xml&page=1
3. Get All Manufacturers
    https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json
4. Get Manufacturer Details
    https://vpic.nhtsa.dot.gov/api/vehicles/GetManufacturerDetails/honda?format=json
5. Get Makes for Manufacturer by Manufacturer Name
    https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/honda?format=json
6. Get Makes for Manufacturer by Manufacturer Name and Year
    https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForManufacturerAndYear/mer?year=2013&format=json
7. Get Makes for Vehicle Type by Vehicle Type Name
    https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json
8. Get Vehicle Types for Make by Name
    https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/mercedes?format=json
9. Get Vehicle Types for Make by Id
    https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/450?format=json
10. Get Equipment Plant Codes (BROKEN)
    https://vpic.nhtsa.dot.gov/api/vehicles/GetEquipmentPlantCodes/2015?format=json
11. Get Models for Make
    https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/honda?format=json
12. Get Models for MakeId
    https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json
13. Get Models for Make and a combination of Year and Vehicle Type
    https://vpic.nhtsa.dot.gov/apihttps://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/honda/modelyear/2015/vehicletype/truck?format=json
14. Get Models for Make Id and a combination of Year and Vehicle Type
    https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015/vehicletype/truck?format=json
*/
