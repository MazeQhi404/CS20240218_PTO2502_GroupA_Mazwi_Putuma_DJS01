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
   
}


/* General Notes */ 

