using Microsoft.AspNetCore.Mvc;

namespace WeatherApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController : ControllerBase
{
    private Random _random = new Random();
    private readonly DatabaseService _databaseService;
    private string[] _weathers =
    {
        "Sunny", "Cloudy", "Rainy", "Snowy", "Stormy"
    };

    public WeatherForecastController(DatabaseService databaseService)
    {
        _databaseService = databaseService;
    }
    
    [HttpGet("weather")]
    public IActionResult Get(int limit)
    {
        return Ok(_databaseService.GetData(limit));
    }
}
