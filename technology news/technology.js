document.addEventListener('DOMContentLoaded', function() {
    // Fetch news articles from the API
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=4715d922849441628efbda725e3cc140')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Display the news articles on the page
        var newsContainer = document.getElementById('news-container');
        var articles = data.articles;
  
        articles.forEach(function(article) {
          var articleElement = createArticleElement(article);
          newsContainer.appendChild(articleElement);
        });
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  });
  
  
  function createArticleElement(article) {
    var articleElement = document.createElement('div');
    articleElement.classList.add('news-article');
  
    var titleElement = document.createElement('h2');
    titleElement.textContent = article.title;
  
    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = article.description;
  
    var sourceElement = document.createElement('p');
    sourceElement.textContent = 'Source: ' + article.source.name;
  
    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(sourceElement);
  
    return articleElement;
  }