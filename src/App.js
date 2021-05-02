import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import {StoreProvider} from "./stores/StoreProvider"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Header from "./components/Header"
import DisplayAllMakes from "./components/DisplayAllMakes";

// import { makeObservable, observable, computed, action } from "mobx"

function App() {
    return (
        <StoreProvider>
            <main className="App">
                {/* THIS IS JUST A SKETCH, this code wont stay here */}
                <Container>
                    <Row className="justify-content-center align-items-center">
                        {/* 1. Logo */}
                        <Col className="col-1">
                            <Header />
                        </Col>


                        {/* 2. Get All Makes */}
                        <Col className="col-2 align-items-center">
                            <Row className="justify-content-center"><Button>Get All Makes</Button></Row>
                        </Col>

                        {/* 3. Get All models */}
                        <Col className="col-4 border-right">
                            <Row className="justify-content-center">Get All Models for Make</Row>
                            <Row className="justify-content-center">
                                <input className="w-50" placeholder="enter Make(Abbreviation)" />
                                <Button className="btn-sm">Get</Button>
                            </Row>
                            {/* <Row className=""><Button className="btn-sm">Get</Button></Row> */}
                        </Col>

                        {/* 4. Sort Filter models */}
                        <Col className="col-3 bg-dark">
                            <svg className="styleSVG">
                            <line x1="0" y1="100%" x2="100%" y2="0"
                                className="styleLine"/>
                            </svg>
                        </Col>
                    </Row>
                </Container>
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
