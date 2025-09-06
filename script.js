/** PodcastApp class to manage the app */

class PodcastApp {
    constructor(podcasts, genres, seasons) {
        this.podcasts = podcasts;
        this.genres = genres;
        this.seasons = seasons;
        this.podcastList = document.querySelector(".podcast-list");
        this.modal = document.querySelector("#podcast-modal");
        this.init ();
    }
}

