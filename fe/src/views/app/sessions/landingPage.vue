<template>
    <div class="container pw">
      <!-- Header Section -->
      <div class="header">
        <span class="logo">@Tiktok Temmuz</span>
        <button class="join-now">Join Now</button>
      </div>
      <!-- Main Content Section -->
      <div class="content">
        <div class="text-section">
          <h2>MAKE YOUR CONTENT TODAY</h2>
          <h1>Scaling Up Content <span>Influencer</span> Campaigns</h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
          </p>
          <button class="join-now">Join Now</button>
        </div>
        <div class="image-section">
          <img src="https://i.pinimg.com/736x/5b/3c/ae/5b3caed51526f883b87202572ecb0362.jpg" alt="Influencer Image" />
        </div>
      </div>
      <!-- New Section -->
      <div class="offer-section">
        <h2>What we offer the table</h2>
        <div class="cards">
          <div class="card">
            <img src="path-to-icon.png" alt="Icon" />
            <h3>Network</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
            <a href="#">Know More</a>
          </div>
          <div class="card">
            <img src="path-to-icon.png" alt="Icon" />
            <h3>Network</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
            <a href="#">Know More</a>
          </div>
          <div class="card">
            <img src="path-to-icon.png" alt="Icon" />
            <h3>Network</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
            <a href="#">Know More</a>
          </div>
        </div>
      </div>
      <!-- Footer Section -->
      <div class="footer">
        <blockquote>
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        </blockquote>
        <div class="partners">
          <h4>WHO WE HAVE WORKED WITH</h4>
          <img src="path-to-logo1.png" alt="Logo 1" />
          <img src="path-to-logo2.png" alt="Logo 2" />
          <img src="path-to-logo3.png" alt="Logo 3" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContentCampaign",
  };
  </script>
  
  <style scoped>
  .container {
    font-family: Arial, sans-serif;
    background-color: #fdf1e600;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    margin: auto;
    text-align: center;
  }
  
  /* Header Section */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .logo {
    font-size: 1.2em;
    color: #1a73e8;
  }
  
  .join-now {
    background-color: #1a73e8;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* Main Content Section */
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .text-section {
    width: 60%;
    text-align: left;
  }
  
  .text-section h2 {
    font-size: 1.2em;
    color: #ff7a59;
    margin-bottom: 10px;
  }
  
  .text-section h1 {
    font-size: 2.5em;
    color: #333;
    margin-bottom: 20px;
  }
  
  .text-section h1 span {
    color: #ff7a59;
  }
  
  .text-section p {
    color: #666;
    margin-bottom: 20px;
  }
  
  .image-section {
    width: 35%;
  }
  
  .image-section img {
    width: 100%;
    border-radius: 10px;
  }
  
  /* Offer Section */
  .offer-section {
    margin-top: 50px;
    text-align: center;
  }
  
  .offer-section h2 {
    font-size: 1.8em;
    color: #333;
    margin-bottom: 30px;
  }
  
  .cards {
    display: flex;
    justify-content: space-around;
  }
  
  .card {
    background-color: #ff7a59;
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    text-align: left;
    color: white;
  }
  
  .card h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  
  .card p {
    font-size: 0.9em;
    margin-bottom: 20px;
  }
  
  .card a {
    color: white;
    text-decoration: underline;
  }
  
  /* Footer Section */
  .footer {
    margin-top: 50px;
    text-align: left;
  }
  
  .footer blockquote {
    font-size: 1.2em;
    color: #666;
    margin-bottom: 30px;
  }
  
  .partners {
    display: flex;
    align-items: center;
  }
  
  .partners h4 {
    font-size: 1em;
    margin-right: 20px;
  }
  
  .partners img {
    width: 50px;
    margin-right: 10px;
  }

  .pw {
  margin-top: 4px !important;

  color: #6f6b7d;
  font-size: 0.9375rem;
  font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
  </style>
  