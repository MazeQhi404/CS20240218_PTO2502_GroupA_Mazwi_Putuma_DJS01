/** PodcastApp class to manage the app */
import { podcasts, genres, seasons } from './data.js';
class PodcastApp {
    constructor(podcasts, genres, seasons) {
        this.podcasts = podcasts;
        this.genres = genres;
        this.seasons = seasons;
        this.podcastList = document.querySelector(".podcast-list");
        this.modal = document.querySelector("#podcast-modal");
        this.init ();

    }

    /**
     * Initialises the app by rendering podcasts and setting up event listeners.
     */
    init() {
        this.renderPodcasts();
        this.setupEventListeners()
    }

    /**
   * Maps genre IDs to genre titles.
   * @param {number[]} genreIds - Array of genre IDs.
   * @returns {string[]} - Array of genre titles.
   */
   getGenreTitles(genreIds) {
    return genreIds.map(id => {
        const genre = this.genres.find(g => g.id === id);
        return genre ? genre.title : "Unknown";
        //TEST: change id of a podcast in podcasts.id to number that is not available in genres array.
    });
   }

   /**
    * Renders podcast cards to the DOM
    */

   renderPodcasts() {
    this.podcastList.innerHTML = ""; //Clears existing content
    this.podcasts.forEach(podcast => {
        const card = this.createPodcastCard(podcast);
        //TEST: console.log(card)
        this.podcastList.appendChild(card);
    });
   }

   /**
    * Creates a podcast card element
    * @param {Object} podcast - Podcast data object.
    * @returns {HTMLElement} - Podcast card element.
    */
   createPodcastCard(podcast) {
    const card = document.createElement("article");
    card.classList.add("podcast-card");
    //card.dataset.id = podcast.id; // dataset provides access to all custom data attibutes on an HTML element (i.e. <article class="podcast-card" data-id="10716">)
    card.tabIndex = 0; // Make card focusable for accessibility
    const genreTitles = this.getGenreTitles(podcast.genres);
    card.innerHTML = `
        <img src="${podcast.image}" alt="${podcast.title} cover" class="podcast-image" >
        <h2 class=podcast-title">${podcast.title}</h2>
        <p class="podcast-seasons">Seasons: ${podcast.seasons}</p>
        <p class="podcast-genres">Genres: ${genreTitles.join(", ")}</p>
        <p class="podcast-updated">Last Updated: ${new Date(podcast.updated).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })}</p>
    `;
    card.addEventListener("click", () => this.showModal(podcast));
    card.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") { // e is a parameter representing the event object (contains info about the event that triggered the listener, i.e a keypress)
            this.showModal(podcast);
            //TEST: console.log(e.key);
        }
    });
    return card;
   }







}

// Initialize the app with data
const app = new PodcastApp(podcasts, genres, seasons);
   
/* General Notes */ 

