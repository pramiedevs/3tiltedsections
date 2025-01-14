document.addEventListener("DOMContentLoaded", () => {
    // Data for the sections and their video content
    const contentData = {
        music: {
            title: "Music",
            videos: [
                "https://www.youtube.com/embed/VIDEO_ID1",
                "https://www.youtube.com/embed/VIDEO_ID2",
                "https://www.youtube.com/embed/VIDEO_ID3",
                "https://www.youtube.com/embed/VIDEO_ID4",
                "https://www.youtube.com/embed/VIDEO_ID5",
                "https://www.youtube.com/embed/VIDEO_ID6",
                "https://www.youtube.com/embed/VIDEO_ID7",
                "https://www.youtube.com/embed/VIDEO_ID8"
            ]
        },
        culture: {
            title: "Culture",
            videos: [
                "https://www.youtube.com/embed/VIDEO_ID9",
                "https://www.youtube.com/embed/VIDEO_ID10",
                "https://www.youtube.com/embed/VIDEO_ID11",
                "https://www.youtube.com/embed/VIDEO_ID12"
            ]
        },
        dance: {
            title: "Dance",
            videos: [
                "https://www.youtube.com/embed/VIDEO_ID13",
                "https://www.youtube.com/embed/VIDEO_ID14",
                "https://www.youtube.com/embed/VIDEO_ID15",
                "https://www.youtube.com/embed/VIDEO_ID16",
                "https://www.youtube.com/embed/VIDEO_ID17",
                "https://www.youtube.com/embed/VIDEO_ID18"
            ]
        }
    };

    // Select elements from the DOM
    const mainSections = document.getElementById("main-sections");
    const activeContainer = document.getElementById("active-container");
    const activeContent = document.getElementById("active-content");
    const closeButton = document.getElementById("close-button");

    // Handle clicks on main sections
    mainSections.addEventListener("click", (e) => {
        const section = e.target.closest(".section");
        if (!section) return;

        const contentKey = section.dataset.activeSection;
        if (contentKey && contentData[contentKey]) {
            const { title, videos } = contentData[contentKey];

            // Generate the grid of videos
            const videoGrid = videos.map(video => `
                <iframe 
                    width="100%" 
                    height="200" 
                    src="${video}" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            `).join("");

            // Populate the active section with title and video grid
            activeContent.innerHTML = `
                <h2>${title}</h2>
                <div class="video-grid">
                    ${videoGrid}
                </div>
            `;

            // Hide the main sections and show the active container
            mainSections.style.display = "none";
            activeContainer.style.display = "flex";

            // Show the close button
            closeButton.style.display = "block";
        }
    });

    // Handle clicks on the close button
    closeButton.addEventListener("click", () => {
        // Hide the active container and show the main sections
        activeContainer.style.display = "none";
        mainSections.style.display = "flex";

        // Hide the close button again
        closeButton.style.display = "none";
    });
});
