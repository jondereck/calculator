import Search from "./search/search";


function WeatherApp() {
    const handleOnSearchChange = (searchData) =>{
        console.log(searchData)
    }
    return(
        <div className="weather-container">
            <Search onSearchChange={handleOnSearchChange}/>
        </div>
    );
}

export default WeatherApp