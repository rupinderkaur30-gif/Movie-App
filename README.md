# Movie-App
##Let's build Movie App
For this project, I created a Movie app with that user can give review about it and also can add their favourite movies in their movie favorite list.

Our final models will be:

User:

Name

Movie: 
 . Title
 . Image
 . Overview
 . Release_date
 . Rating

 Review:
 . Content
 . User_id
 . Movie_id

 Favourite:
 . User_id
 . Movie_id

 The index should be wrapped in a div classed movie-container and be made up of cards called movie-card.

 The show page should be wrapped in a div classed show.

Your html should include this to load the font Creepster:

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet">

  Here's the CSS I used:

  :root {
    --bg-color: black;
    --main-color: #ffa500;
    --main-color-transparent: rgba(255, 166, 0, 0.459);
    --header-font-family: 'Creepster', cursive;
  }
  
  body {
    background-color: var(--bg-color);
    color: var(--main-color);
    text-align: center;
  }
  header{
    width: 100%;
    height: 50px;
    background: rgb(38, 39, 38);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #ccc;}


    #movie-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    
    .movie-card {
      border: 3px solid var(--main-color);
      border-radius: 1em;
      width: 162px;
    }

  /* Add rounded corners to the top left and the top right corner of the image */
  img {
    border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  }
 

   .card img {
    width: 350px;
    height: 250px;
    object-fit: cover;
    cursor: pointer;
  }
  header{
    width: 100%;
    height: 50px;
    background: rgb(38, 39, 38);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #ccc;
}
header h1{
    margin: 0 20px;
    color: #fff;

}
header a {
    text-decoration: none;
}
header form{
    display: flex;
    align-items: center;
}
#search{
    width: 230px;
    height: 30px;
   
    outline: none;
    border-radius: 20px;
    padding-left: 20px;
}
  p.title {
 
    text-transform: uppercase
  } 
  
  .show > img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  
  /* https://www.w3schools.com/howto/howto_css_modals.asp */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: var(--main-color-transparent); /* Fallback color */
  }
  
  /* Modal Content/Box */
  .modal-content {
    background-color: black;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid black;
    border-radius: 1em;
    width: 80%; /* Could be more or less, depending on screen size */
  }
  
  /* The Close Button */
  .close {
    color: red;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: red;
    text-decoration: none;
    cursor: pointer;

 
  }

#log-in {
    width: 8em;
    border: 2px solid rgba(255, 166, 0, 0.459);
    background: #ffe;
    border-radius: 5px;
    margin-left :850px;
    border: 3px solid var(--main-color);
  
    max-width: 350px;
}

#bt {
  width: 10em;
  border: 2px solid rgba(255, 166, 0, 0.459);
  background: #ffe;
  border-radius: 5px;
 
  border: 3px solid var(--main-color);

  max-width: 500px;
}
b {
    display: block;
    width: 100%;
    line-height: 2em;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
}
b:hover {
    color: red;
    background: #eff;
}


button {
  
  border: 2px solid rgba(255, 166, 0, 0.459);
  background: #ffe;
  border-radius: 5px;
 
  border: 3px solid var(--main-color);

  max-width: 400px;

}
input {
  width: 8em;
  border: 2px solid rgba(255, 166, 0, 0.459);
  background: #ffe;
  border-radius: 5px;
 
  border: 3px solid var(--main-color);

  max-width: 400px;

}
textarea {
  border: 3px solid var(--main-color);
 }

 