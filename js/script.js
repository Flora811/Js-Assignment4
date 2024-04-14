const Baseurl = 'https://spotify-web2.p.rapidapi.com/search/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd9f83891abmshd1c99d5f4e00bc4p1312a5jsnc71eae3cc7df',
		'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
	}
};

// Grab the references of the elements in the html page
const searchTerm = document.querySelector('.search');
const type = document.querySelector('.type');
const searchBtn = document.querySelector('.Submit');
const section = document.querySelector('.section');
let choice = type.value.toLowerCase(); // using for the queries 
let searchValue="";
let url;

// adding an event listener for when the submit button is clicked
searchBtn.addEventListener("click", fetchRes);
// adding my student name and Id dynamically
StudentInfo = document.createElement("p");
StudentInfo.textContent = "Student Name: Flora Bhatt, Student ID: 200534094";
document.body.appendChild(StudentInfo);
// define our fetch result - fetchRes function
function fetchRes(event) {
    event.preventDefault();
    // making the search term query as per the url requirements
    st = searchTerm.value.split(" ");
    for(i=0; i<st.length; i++) {
        if (i != st.length-1){
            searchValue  += st[i]+"%20";
        }
        else{
            searchValue += st[i];
        }
    }
    // construct a url based on the  user input.
    url = `${Baseurl}?q=${searchValue}&type=${type.value}&offset=0&limit=10&numberOfTopResults=20`
   
    // Use fetch() to pass the URL that we built as a request to the API service, 
    //then pass the JSON to the displayResults() function
    try {
        fetch(url, options).then(response  => {  console.log(url); return response.json()} )
                           .then(result => {displayResult(result)});
    } catch (error) {
        console.error(error);
    }
}

// defining displayResult function 
function displayResult(ourJson){

    // clear out the old results 
     while (section.firstChild) {
         section.removeChild(section.firstChild);
     };

    // store our user's choice and use switch case to manipulate the data
    let choice = type.value;
   switch  (choice) {
       case "tracks":
    // create a variable to store track items array
           let trackItems = ourJson.tracks.items;

           console.log(trackItems);

           for (i=0; i < trackItems.length ; i++){
            
            const div = document.createElement("div");
            const heading = document.createElement('h2');
            const link = document.createElement('a');
            const rn = trackItems[i].data;
            
            console.log(rn.name);
            
            heading.textContent = rn.name;
            link.href = rn.uri;
            link.textContent = rn.uri;
            
            div.appendChild(heading);
            div.appendChild(link);
            section.appendChild(div);           
        }
           break;

        //    case 2 from albums
        case "albums":
            let albumItems =ourJson.albums.items;

            console.log(albumItems);
            for (i=0; i < albumItems.length ; i++){
                const div = document.createElement('div');
                const heading =  document.createElement("h2");
                const link  = document.createElement("a");
    
                const rn = albumItems[i].data;
                heading.textContent = rn.name;
                link.textContent = rn.uri;
                link.href = rn.uri;
                
                div.appendChild(heading);
                div.appendChild(link);
                section.appendChild(div);
            }
               break;
            
            // case 3 from artists
            case "artists" :
                let artistItems = ourJson.artists.items;

                console.log(artistItems);
     
                for (i=0; i < artistItems.length ; i++){
                 
                 const div = document.createElement("div");
                 const heading = document.createElement('h2');
                 const link = document.createElement('a');
                 const rn = artistItems[i].data;
                
                 heading.textContent = rn.profile.name;
                 link.href = rn.uri;
                 link.textContent = rn.uri;
                 
                 div.appendChild(heading);
                 div.appendChild(link);
                 section.appendChild(div);           
             }
                   break;


                //    case 4 from episodes
            case "episodes":
                let episodeItems = ourJson.episodes.items;

                console.log(episodeItems);
     
                for (i=0; i < episodeItems.length ; i++){
                 
                 const div = document.createElement("div");
                 const heading = document.createElement('h2');
                 const link = document.createElement('a');
                 const rn = episodeItems[i].data;
                 
                 console.log(rn.name);
                 
                 heading.textContent = rn.name;
                 link.href = rn.uri;
                 link.textContent = rn.uri;
                 
                 div.appendChild(heading);
                 div.appendChild(link);
                 section.appendChild(div);           
             }
                break;

                // case 5 from playlists
        case "playlists":
            let playlistItems = ourJson.playlists.items;

            console.log(playlistItems);
 
            for (i=0; i < playlistItems.length ; i++){
             
             const div = document.createElement("div");
             const heading = document.createElement('h2');
             const link = document.createElement('a');
             const rn = playlistItems[i].data;
             
             console.log(rn.name);
             
             heading.textContent = rn.name;
             link.href = rn.uri;
             link.textContent = rn.uri;
             
             div.appendChild(heading);
             div.appendChild(link);
             section.appendChild(div);           
         }
            break;

            //  case for getting items from podcasts
        case "podcasts":
            let podcastItems = ourJson.podcasts.items;

           console.log(podcastItems);

           for (i=0; i < podcastItems.length ; i++){
            
            const div = document.createElement("div");
            const heading = document.createElement('h2');
            const link = document.createElement('a');
            const rn = podcastItems[i].data;
            
            console.log(rn.name);
            
            heading.textContent = rn.name;
            link.href = rn.uri;
            link.textContent = rn.uri;
            
            div.appendChild(heading);
            div.appendChild(link);
            section.appendChild(div);           
        }
           break;

       default:
    
        let multiItems = ourJson.multi.items;

        console.log(multiItems);

        for (i=0; i < multiItems.length ; i++){
         
         const div = document.createElement("div");
         const heading = document.createElement('h2');
         const link = document.createElement('a');
         const rn = multiItems[i].data;
         
         console.log(rn.name);
         
         heading.textContent = rn.name;
         link.href = rn.uri;
         link.textContent = rn.uri;
         
         div.appendChild(heading);
         div.appendChild(link);
         section.appendChild(div);           
     }
        


   }
    
    
// creating variables and loops according to what the user chose


}