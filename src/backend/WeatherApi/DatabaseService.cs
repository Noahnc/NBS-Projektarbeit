using System.Data;
using MySql.Data.MySqlClient;

namespace WeatherApi;

public class DatabaseService
{
    private const string _username = "graphana";
    private const string _password = "jdfnj7H47hrh!";
    private const string _server = "159.223.22.124";
    private const string _dbName = "WeatherData";
    
    private MySqlConnection _mySqlConnection;
    
    public DatabaseService()
    {
        _mySqlConnection = new MySqlConnection($"Server={_server};Database={_dbName};Uid={_username};Pwd={_password};");
        _mySqlConnection.Open();
    }

    public WeatherData[] GetData(int limit)
    {
        HandleDBDisconnect();
        var list = new List<WeatherData>();
        
        var cmd = new MySqlCommand($"SELECT * from messwerte LIMIT {limit}", _mySqlConnection);
        using var reader = cmd.ExecuteReader();
        
        while (reader.Read())
        {
            list.Add(new WeatherData
            {
                Humidity = reader.GetFloat("humidity"),
                Temperature = reader.GetFloat("temp"),
                Timestamp = reader.GetDateTime("timedate")
            });
        }

        return list.ToArray();
    }

    private void HandleDBDisconnect()
    {
        switch (_mySqlConnection.State)
        {
            case ConnectionState.Broken:
                _mySqlConnection.Close();
                _mySqlConnection.Open();
                break;
            case ConnectionState.Closed:
                _mySqlConnection.Open();
                break;
        }
    }
    
}