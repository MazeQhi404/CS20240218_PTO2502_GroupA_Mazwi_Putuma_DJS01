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
    });
   }

   /**
    * Renders podcast cards to the DOM
    */

   renderPodcasts() {
    this.podcastList.innerHTML = ""; //Clears existing content
    this.podcasts.forEach(podcast => {
        const card = this.createPodcastCard(podcast);
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
    card.
   }







}

// Initialize the app with data
const app = new PodcastApp(podcasts, genres, seasons);
   
/* General Notes */ 

