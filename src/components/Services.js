import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Services.css';

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foodData, setFoodData] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [healthNews, setHealthNews] = useState([]);
  const [dietPlan, setDietPlan] = useState("");

  // Handle Food Search Input Change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Fetch Health News from an API
  useEffect(() => {
    const fetchHealthNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: "health",
            apiKey: "6f0fd23f449b443e8995c6e24eebc7e5",  // Replace with your News API key
            language: "en", // Fetch English articles
            sortBy: "publishedAt", // Sort by most recent
            pageSize: 5, // Limit results to 5
          },
        });
        setHealthNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching health news:", error);
      }
    };
    fetchHealthNews();
  }, []);

  // Handle Search Submit (Fetch Nutrition Info)
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    try {
      const searchResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          query: searchQuery,
          apiKey: "89d787db573a4e88abf45e40c1ac6371",  // Replace with your API key
        },
      });

      const foodId = searchResponse.data.results[0].id; // Get ID of the first result

      const nutritionResponse = await axios.get(`https://api.spoonacular.com/recipes/${foodId}/nutritionWidget.json`, {
        params: {
          apiKey: "89d787db573a4e88abf45e40c1ac6371",  // Replace with your API key
        },
      });

      setFoodData(nutritionResponse.data);  // Set nutrition data
      setIsSearching(false);
    } catch (error) {
      console.error("Error fetching food data:", error);
      setIsSearching(false);
    }
  };

  // Handle Diet Plan Creation
  const handleDietPlanSubmit = (e) => {
    e.preventDefault();
    setDietPlan(
      <div>
        <h3>Here's your diet plan:</h3>
        <ul>
          <li>Breakfast: Oatmeal with fruits</li>
          <li>Lunch: Grilled chicken with vegetables</li>
          <li>Dinner: Quinoa with tofu and broccoli</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="services-container">
      <h1>Our Services</h1>

      {/* Food Details Service with Icon */}
      <div className="service-card" id="food-details">
        <div className="service-name">
          <i className="fas fa-utensils"></i> {/* Food icon */}
          Search Food Details
        </div>
        <div className="popup-content">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Enter food name"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
          {isSearching ? (
            <p>Loading nutrition info...</p>
          ) : (
            <div className="food-results">
              {foodData ? (
                <div className="nutrition-details">
                  <h2>Nutrition Information</h2>
                  <ul>
                    <li><strong>Calories:</strong> {foodData.calories} kcal</li>
                    <li><strong>Protein:</strong> {foodData.protein}</li>
                    <li><strong>Carbohydrates:</strong> {foodData.carbs}</li>
                    <li><strong>Fat:</strong> {foodData.fat}</li>
                    <li><strong>Fiber:</strong> {foodData.fiber}</li>
                  </ul>
                </div>
              ) : (
                <p>No food found, try another search.</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Generate Diet Plan Service with Icon */}
      <div className="service-card" id="diet-plan">
        <div className="service-name">
          <i className="fas fa-balance-scale"></i> {/* Diet Plan icon */}
          Generate Diet Plan
        </div>
        <div className="popup-content">
          <form onSubmit={handleDietPlanSubmit}>
            <button type="submit" className="diet-plan-button">Generate Diet Plan</button>
          </form>
          {dietPlan && <div className="diet-plan">{dietPlan}</div>}
        </div>
      </div>

      {/* Health News Service with Icon */}
      <div className="service-card" id="health-news">
        <div className="service-name">
          <i className="fas fa-newspaper"></i> {/* Health News icon */}
          Health News
        </div>
        <div className="popup-content">
          <div className="news-container">
            {healthNews.length > 0 ? (
              <ul>
                {healthNews.slice(0, 5).map((article, index) => (
                  <li key={index}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading health news...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
