<template style="
background-color: #f8f4fc;
">
    <div class="container pw" style="
    background-color: #f8f4fc85;
    &quot;&quot;;
">
      <!-- Header Section -->
      <div class="header d-flex flex-row justify-content-end">
        <span class="logo d-none">@Tiktok Temmuz</span>
        <button class="join-now"  @click="joinNow">Join Now</button>
      </div>
      <!-- Main Content Section -->
      <div class="content">
        <div class="text-section">
          <h2>MAKE YOUR CONTENT TODAY</h2>
          <h1>TikTok LIVE Official Agency Partner <span>Temmuz Agency</span> </h1>
          <p>
            If you are a TikTok publisher or want to become a publisher, you can attract the attention of millions of people on TikTok with July Agency and increase your earnings up to ten times.
          </p>
          <button class="join-now"  @click="joinNow">Join Now</button>
        </div>
        <div class="image-section ImageDisplayNone">
          <img src="https://temmuzajans.com/wp-content/uploads/2023/05/tiktok-ajansi-yayinci-kazanci.jpg" alt="Influencer Image" />
        </div>
      </div>
      <!-- New Section -->
      <div class="offer-section">
        <h2>Our TikTok Agency Staff</h2>
        <!-- <div class="cards">
          <div class="card">
          <div class="d-flex flex-row align-items-baseline" style="
    gap: 12px;
">   <i class="nav-icon i-Male"></i>
            <h3>Network</h3>

          </div>
         
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
            <a href="#">Know More</a>
          </div>
          <div class="card">
            <div class="d-flex flex-row align-items-baseline" style="
    gap: 12px;
">   <i class="nav-icon i-Male"></i>
            <h3>Network</h3>

          </div>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
            <a href="#">Know More</a>
          </div>
          <div class="card">
            <div class="d-flex flex-row align-items-baseline" style="
    gap: 12px;
">   <i class="nav-icon i-Male"></i>
            <h3>Network</h3>

          </div>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
            <a href="#">Know More</a>
          </div>
        </div> -->
        <div class="card-container d-flex flex-row flex-wrap justify-content-between px30ONlyMObie" style="
    gap: 22px;
">
    <div v-for="profile in profiles" :key="profile.name" class="card">
      <div class="card-body">
        <div class="d-flex flex-row" style="gap: 14px;">
          <div>
            <img :src="profile.profileImage" alt="Profile Image" class="profile-image mt-1" />
          </div>
          <div class="text-left">
            <h2 class="mx-0">{{ profile.name }}</h2>
            <p class="mx-0">{{ profile.title }}</p>
            <div class="d-flex flex-row justify-content-start social-links">
              <a v-for="link in profile.socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer">
                <img :src="link.icon" :alt="link.name" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      </div>
      <!-- Footer Section -->
      <div class="footer">

        
        <div class="px-4 d-flex flex-row flex-wrap pw px-2 ">
          <div class="d-flex flex-column justify-content-center pr-4 width65">
            <h2>About July TikTok Agency</h2>
            Founded by Actor and Manager Temmuz Karikutal, our company has been serving as an acting agency in the television and cinema industry and sending actors to many successful projects. As of March 2023, our company has now been serving TikTok publishers as an Official TikTok Agency Partner.
          </div>
          <div class="image-section ImageDisplayNone">
          <img src="https://temmuzajans.com/wp-content/uploads/2023/01/asian-businessmen-businesswomen-meeting-brainstorming-ideas-about-creative-web-design-planning-application-developing-template-layout-mobile-phone-project-working-together-small-office-768x432.webp" alt="Influencer Image" />
        </div>
   
        </div>
        <div class="partners d-none">
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
    data() {
    return {
      profiles: [
        {
          profileImage: 'https://temmuzajans.com/wp-content/uploads/2023/05/temmuzk.jpg',
          name: 'July Cartoon',
          title: 'Player & Manager',
          socialLinks: [
            {
              name: 'TikTok',
              url: 'https://www.tiktok.com/@username',
              icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsmfNPnvuNK4Qwk8vY0CgyLBW0mFFUMXSSQ&s'
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/username',
              icon: 'https://cdn-icons-png.flaticon.com/256/87/87390.png'
            },
            {
              name: 'Facebook',
              url: 'https://www.facebook.com/username',
              icon: 'https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-rq5u5c3v.png'
            }
          ]
        },
        {
          profileImage: 'https://temmuzajans.com/wp-content/uploads/2023/06/survivor-aysu-keskin-tiktok.jpg',
          name: 'Jane Doe',
          title: 'Artist & Creator',
          socialLinks: [
            {
              name: 'TikTok',
              url: 'https://www.tiktok.com/@janedoe',
              icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsmfNPnvuNK4Qwk8vY0CgyLBW0mFFUMXSSQ&s'
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/janedoe',
              icon: 'https://cdn-icons-png.flaticon.com/256/87/87390.png'
            },
            {
              name: 'Facebook',
              url: 'https://www.facebook.com/janedoe',
              icon: 'https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-rq5u5c3v.png'
            }
          ]
        },
        {
          profileImage: 'https://temmuzajans.com/wp-content/uploads/2023/05/sedayildiz.jpg',
          name: 'John Smith',
          title: 'Developer & Blogger',
          socialLinks: [
            {
              name: 'TikTok',
              url: 'https://www.tiktok.com/@johnsmith',
              icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsmfNPnvuNK4Qwk8vY0CgyLBW0mFFUMXSSQ&s'
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/johnsmith',
              icon: 'https://cdn-icons-png.flaticon.com/256/87/87390.png'
            },
            {
              name: 'Facebook',
              url: 'https://www.facebook.com/johnsmith',
              icon: 'https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-rq5u5c3v.png'
            }
          ]
        },
        {
          profileImage: 'https://temmuzajans.com/wp-content/uploads/2023/08/buraksarimola-768x872.jpg',
          name: 'Burak Sarımola',
          title: 'Actor',
          socialLinks: [
            {
              name: 'TikTok',
              url: 'https://www.tiktok.com/@johnsmith',
              icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsmfNPnvuNK4Qwk8vY0CgyLBW0mFFUMXSSQ&s'
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/johnsmith',
              icon: 'https://cdn-icons-png.flaticon.com/256/87/87390.png'
            },
            {
              name: 'Facebook',
              url: 'https://www.facebook.com/johnsmith',
              icon: 'https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-rq5u5c3v.png'
            }
          ]
        },
        {
          profileImage: 'https://temmuzajans.com/wp-content/uploads/2023/05/cuneyttek.jpg',
          name: 'Cüneyt Tek',
          title: 'Singer',
          socialLinks: [
            {
              name: 'TikTok',
              url: 'https://www.tiktok.com/@johnsmith',
              icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsmfNPnvuNK4Qwk8vY0CgyLBW0mFFUMXSSQ&s'
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/johnsmith',
              icon: 'https://cdn-icons-png.flaticon.com/256/87/87390.png'
            },
            {
              name: 'Facebook',
              url: 'https://www.facebook.com/johnsmith',
              icon: 'https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-rq5u5c3v.png'
            }
          ]
        }
      ,
      {
          profileImage: 'https://temmuzajans.com/wp-content/uploads/2023/06/survivor-asena-demirbag-kimdir.jpg',
          name: 'Asena Demirbağ',
          title: 'Survivor 2023 ',
          socialLinks: [
            {
              name: 'TikTok',
              url: 'https://www.tiktok.com/@johnsmith',
              icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsmfNPnvuNK4Qwk8vY0CgyLBW0mFFUMXSSQ&s'
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/johnsmith',
              icon: 'https://cdn-icons-png.flaticon.com/256/87/87390.png'
            },
            {
              name: 'Facebook',
              url: 'https://www.facebook.com/johnsmith',
              icon: 'https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-rq5u5c3v.png'
            }
          ]
        },
        {
          profileImage: 'https://temmuzajans.com/wp-content/uploads/2023/05/necmiyapici.jpg',
          name: 'Necmi Yapıcı',
          title: 'Actor',
          socialLinks: [
            {
              name: 'TikTok',
              url: 'https://www.tiktok.com/@johnsmith',
              icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsmfNPnvuNK4Qwk8vY0CgyLBW0mFFUMXSSQ&s'
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/johnsmith',
              icon: 'https://cdn-icons-png.flaticon.com/256/87/87390.png'
            },
            {
              name: 'Facebook',
              url: 'https://www.facebook.com/johnsmith',
              icon: 'https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-rq5u5c3v.png'
            }
          ]
        },      {
          profileImage: 'https://temmuzajans.com/wp-content/uploads/2023/05/baris-telli.jpg',
          name: 'Barış Telli',
          title: 'Amputee National',
          socialLinks: [
            {
              name: 'TikTok',
              url: 'https://www.tiktok.com/@johnsmith',
              icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsmfNPnvuNK4Qwk8vY0CgyLBW0mFFUMXSSQ&s'
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/johnsmith',
              icon: 'https://cdn-icons-png.flaticon.com/256/87/87390.png'
            },
            {
              name: 'Facebook',
              url: 'https://www.facebook.com/johnsmith',
              icon: 'https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-rq5u5c3v.png'
            }
          ]
        },      {
          profileImage: 'https://temmuzajans.com/wp-content/uploads/2023/05/yagmurbanda.jpg',
          name: 'Rain Banda',
          title: 'Survivor 2018',
          socialLinks: [
            {
              name: 'TikTok',
              url: 'https://www.tiktok.com/@johnsmith',
              icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsmfNPnvuNK4Qwk8vY0CgyLBW0mFFUMXSSQ&s'
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/johnsmith',
              icon: 'https://cdn-icons-png.flaticon.com/256/87/87390.png'
            },
            {
              name: 'Facebook',
              url: 'https://www.facebook.com/johnsmith',
              icon: 'https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-rq5u5c3v.png'
            }
          ]
        },
        
      ]

    };
    },
    methods: {
    joinNow() {
      this.$router.push('/app/sessions/signIn');
    }
  }
  };

  
  
  </script>
  
  <style scoped>
  .container {
    font-family: Arial, sans-serif;
    background-color: #fdf1e600;
    padding: 20px;
    border-radius: 8px;
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
    font-size: 1.03em;
    color: #a855f7;
  }
  
  .join-now {
    background-color: #a855f75e;
    color: #a855f7;
    border: none;
    padding: 4px 20px;
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
    color: #a855f7;
    margin-bottom: 10px;
  }
  
  .text-section h1 {
    font-size: 2.5em;
    color: #333;
    margin-bottom: 20px;
  }
  
  .text-section h1 span {
    color: #a855f7;
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
    border-radius: 4px;
  }
  
  /* Offer Section */
  .offer-section {
    margin-top: 50px;
    text-align: center;
  }
  
  .offer-section h2 {
    font-size: 1.8em;
    color: #a855f7fa;
    margin-bottom: 30px;
  }
  
  .card {
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f8f8f8;
  padding: 10px;
  padding-top: 50px;
}

.profile-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-top: -40px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 20px;
}

.card-body h2 {
  font-size: 1.5em;
  margin: 4px;
}

.card-body p {
  color: #666;
  margin: 4px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-links img {
  width: 24px;
  height: 24px;
}
  
  /* Footer Section */
  .footer {
    margin-top: 50px;
    text-align: left;
    color: #a855f71c;
    padding-top: 24px;
    padding-bottom: 24px;

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

h1, h2, h3, h4, h5, h6, .card-title, .text-title {
    color: #a855f7;
}

.width65
{
  width: 65%;
}
@media only screen and (max-width: 600px) {

.ImageDisplayNone
{
  display: none;
}

.text-section {
    width: 100%;
    text-align: left;
}
.width65
{
  width: 100%;
}

.container {
    font-family: Arial, sans-serif;
    background-color: #fdf1e600;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    margin: 0px;
    text-align: center;
}

.px30ONlyMObie {
    padding-left: 30px !important;
    padding-right: 30px !important;
}
}

  </style>
  