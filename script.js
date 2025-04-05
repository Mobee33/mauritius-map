const locationsData = [
    {
        name: "Pereybere",
        top: 9.5,
        left: 51,
        description: "Popular beach with calm, clear waters. Perfect for families. Shaded by casuarina trees with restaurants nearby.",
        trailInfo: "Excellent for swimming and snorkeling right off the beach. Coastal walks possible.",
        weatherNote: "Usually sunny and warm. Can be crowded during peak season.",
        image: "" // Empty string or path to image
    },
    {
        name: "Grand Baie",
        top: 12.9,
        left: 49.5,
        description: "Tourism hub with shops, restaurants, and nightlife. Offers catamaran trips and many water activities.",
        trailInfo: "No specific hiking trails, but great for waterfront strolls and exploring the town.",
        weatherNote: "Pleasant sea breeze. Can get busy in the evenings.",
        image: ""
    },
    {
        name: "Trou-aux-Biches",
        top: 15.5,
        left: 46,
        description: "Top-rated beach with white sand and casuarina trees. Protected by reef, ideal for swimming and snorkeling.",
        trailInfo: "Ideal for beach walks and snorkeling near the reef. Relaxing atmosphere.",
        weatherNote: "Generally calm weather, protected from strong winds.",
        image: ""
    },
    {
        name: "Triolet",
        top: 21,
        left: 46.5,
        description: "Home to Maheswarnath Mandir, Mauritius' largest Hindu temple (built 1888). Authentic residential area.",
        trailInfo: "Cultural visit rather than hiking. Remember respectful attire for the temple.",
        weatherNote: "Inland location, can feel hotter than coastal areas.",
        image: ""
    },
    {
        name: "Goodlands",
        top: 16.1,
        left: 57,
        description: "Authentic northern village with vibrant local market. Far fewer tourists than coastal areas.",
        trailInfo: "Explore the market for local crafts and produce. Good base for northern exploration.",
        weatherNote: "Typically sunny and warm.",
        image: ""
    },
    {
        name: "SSR Botanical Gardens",
        top: 28.5,
        left: 52,
        description: "Historic gardens (founded 1770) featuring giant Victoria amazonica water lilies and rare palms.",
        trailInfo: "Easy walking paths through themed garden sections. Allow 2-3 hours.",
        weatherNote: "Lots of shade available, pleasant even on hot days.",
        image: ""
    },
    {
        name: "Port Louis",
        top: 36.4,
        left: 42.3,
        description: "Vibrant capital with colonial buildings, waterfront, and markets. Houses only complete dodo skeleton.",
        trailInfo: "Urban exploration: Central Market, Caudan Waterfront, Citadel Fort Adelaide (views).",
        weatherNote: "Can be hot and humid, especially midday. Best explored morning/late afternoon.",
        image: ""
    },
    {
        name: "Moka",
        top: 44.8,
        left: 42.2,
        description: "Central highland region with Le Pouce (The Thumb) mountain. Home to University of Mauritius.",
        trailInfo: "Starting point for hikes up Le Pouce mountain (moderate difficulty, great views).",
        weatherNote: "Cooler than the coast due to elevation. Clouds can gather on peaks.",
        image: ""
    },
    {
        name: "Flic-en-Flac",
        top: 50.5,
        left: 30.5,
        description: "Popular west coast resort with 8km white sand beach. Reef-protected lagoon ideal for swimming.",
        trailInfo: "Famous for stunning sunsets. Beach walks and nearby Casela Nature Parks.",
        weatherNote: "West coast is generally drier and hotter. Amazing sunset colours.",
        image: ""
    },
    {
        name: "Quatre Bornes",
        top: 54.4,
        left: 39.6,
        description: "The 'Town of Flowers' with renowned Thursday and Sunday textile markets. Commercial hub.",
        trailInfo: "Shopping and exploring the town. Not primarily a hiking destination.",
        weatherNote: "Pleasant climate, can be cooler in evenings.",
        image: ""
    },
    {
        name: "Centre de Flacq",
        top: 41.5,
        left: 65,
        description: "Eastern region's commercial center with excellent Wednesday/Sunday markets. Surrounded by sugar cane.",
        trailInfo: "Explore the market. Gateway to eastern beaches like Belle Mare.",
        weatherNote: "East coast benefits from trade winds, often breezy.",
        image: ""
    },
    {
        name: "Curepipe",
        top: 62,
        left: 44.7,
        description: "Elevated town (550m) with dormant Trou aux Cerfs volcanic crater. Known for model ship crafting.",
        trailInfo: "Walk around the rim of Trou aux Cerfs for panoramic views. Near Black River Gorges NP.",
        weatherNote: "Highest town, often cooler and wetter than coastal areas.",
        image: ""
    },
    {
        name: "Tamarin",
        top: 64.5,
        left: 29.5,
        description: "Coastal village with salt pans and surfing bay. Popular for early morning dolphin watching.",
        trailInfo: "Surfing (seasonal), dolphin boat trips, walks around the salt pans.",
        weatherNote: "Generally dry and sunny. Bay can have strong currents.",
        image: ""
    },
    {
        name: "Tamarin Falls",
        top: 62.8,
        left: 30.94,
        description: "Also '7 Cascades', adventurous hiking destination with multiple waterfalls through a canyon.",
        trailInfo: "Challenging hike (guide recommended) involving river crossings and steep sections to see multiple falls.",
        weatherNote: "Can be slippery after rain. Start early. Often misty in the valley.",
        image: ""
    },
    {
        name: "Ile Aux Cerfs",
        top: 55,
        left: 72.5,
        description: "East coast island with pristine beaches, championship golf course, and water activities.",
        trailInfo: "Island exploration, beach walks, swimming, snorkeling. Accessible by boat.",
        weatherNote: "Very sunny, bring ample sun protection. Can be windy.",
        image: ""
    },
    {
        name: "Mahebourg",
        top: 77,
        left: 63,
        description: "Historic former capital with Naval Museum documenting Napoleon's only naval victory over Britain.",
        trailInfo: "Waterfront walks, visit the museum, explore the market. Nearby Ile aux Aigrettes nature reserve.",
        weatherNote: "Benefits from southeast trade winds, pleasant climate.",
        image: ""
    },
    {
        name: "Souillac",
        top: 95,
        left: 44,
        description: "South coast village with dramatic Gris Gris cliffs where ocean waves crash without protective reef.",
        trailInfo: "Coastal walks along the cliffs (caution needed!), visit Telfair Garden, Rochester Falls nearby.",
        weatherNote: "South coast is wilder and windier. Spectacular waves at Gris Gris.",
        image: ""
    },
    {
        name: "Chemin Grenier",
        top: 90,
        left: 39.9,
        description: "Southern agricultural village surrounded by sugarcane, vegetables, and tea plantations.",
        trailInfo: "Starting point for some trails into the national park. Explore local village life.",
        weatherNote: "Variable weather, close to the central plateau's influence.",
        image: ""
    },
    {
        name: "Le Morne Brabant",
        top: 85,
        left: 25,
        description: "UNESCO site with 556m mountain. Former slave refuge with crystal lagoons and kitesurfing beaches.",
        trailInfo: "Challenging hike to the summit (guide required for upper part) with breathtaking views. Easier trails at base.",
        weatherNote: "Very exposed hike, start extremely early (dawn) to avoid heat and ensure best visibility.",
        image: ""
    },
    {
        name: "Airport (SSR International)",
        top: 81,
        left: 60,
        description: "Modern gateway to Mauritius with distinctive Traveller's Palm-inspired design. Located in southeast.",
        trailInfo: "Your arrival and departure point!",
        weatherNote: "Located in the southeast, usually breezy.",
        image: ""
    }
];

// --- Elements ---
const mapContainer = document.getElementById('map-container');
const car = document.getElementById('car');
const avatarImage = document.getElementById('avatar-image');
const carImage = document.getElementById('car-image'); // Reference car image
const locationList = document.getElementById('location-list');
const infoTooltip = document.getElementById('info-tooltip');
const tooltipTitle = document.getElementById('tooltip-title');
const tooltipContent = document.getElementById('tooltip-content');
const tooltipImageContainer = document.getElementById('tooltip-image-container');
const exploreButton = document.getElementById('explore-button');
const detailsButton = document.getElementById('details-button');
const trailsContent = document.getElementById('trails-content');
const weatherContent = document.getElementById('weather-content');

// New UI Elements
const fuelLevel = document.getElementById('fuel-level');
const placesVisited = document.getElementById('places-visited');
const totalPlaces = document.getElementById('total-places');
const fuelModal = document.getElementById('fuel-modal');
const fuelVideo = document.getElementById('fuel-video');
const closeModal = document.getElementById('close-modal');
const refuelButton = document.getElementById('refuel-button');

// Loading screen elements
const loadingOverlay = document.getElementById('loading-overlay');
const carStartSound = document.getElementById('car-start-sound');

// --- Constants ---
const TOOLTIP_GAP = 25; // Gap in pixels between avatar head and tooltip bottom
// **** ADDED: Image Paths ****
const IMG_PATH = 'images/';
const AVATAR_FRONT = IMG_PATH + 'avatar.jpg';
const AVATAR_LEFT = IMG_PATH + 'avatar-leftview.png';
const AVATAR_RIGHT = IMG_PATH + 'avatar-rightview.png';
const CAR_FRONT = IMG_PATH + 'car.png';
const CAR_LEFT = IMG_PATH + 'car-leftview.png';
const CAR_RIGHT = IMG_PATH + 'car-rightview.png';
const HORIZONTAL_MOVE_THRESHOLD = 1; // Min % change left/right

// Fuel and visited places tracking
const MAX_FUEL = 100;
const FUEL_PER_MOVE = 10; // Decrease by 10% per move
const FUEL_LEVEL_MEDIUM = 50; // 50% threshold for medium fuel level
const FUEL_LEVEL_LOW = 25; // 25% threshold for low fuel level
let currentFuel = MAX_FUEL;
let visitedLocations = new Set();

// **** ADDED: State Variables ****
let currentCarTop = 0;
let currentCarLeft = 0;


// --- Functions ---
function createMarkersAndList() {
    mapContainer.querySelectorAll('.location-marker').forEach(marker => marker.remove());
    locationList.innerHTML = '';
    locationsData.forEach(location => {
        const marker = document.createElement('div');
        marker.className = 'location-marker';
        marker.style.top = `${location.top}%`;
        marker.style.left = `${location.left}%`;
        marker.dataset.name = location.name;
        marker.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentFuel > 0) {
                selectLocation(location, marker);
            } else {
                showFuelModal();
            }
        });
        mapContainer.appendChild(marker);

        const listItem = document.createElement('li');
        listItem.className = 'location-item';
        listItem.innerHTML = `<div class="location-icon"></div><div class="location-name">${location.name}</div>`;
        listItem.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentFuel > 0) {
                const correspondingMarker = Array.from(mapContainer.querySelectorAll('.location-marker')).find(m => m.dataset.name === location.name);
                selectLocation(location, correspondingMarker);
            } else {
                showFuelModal();
            }
        });
        locationList.appendChild(listItem);
    });

    // Update total places
    totalPlaces.textContent = locationsData.length;
}

function selectLocation(location, markerElement) {
    if (!markerElement) return;

    // **** ADDED: Direction Logic & Image Swap START ****
    const targetTop = parseFloat(markerElement.style.top);
    const targetLeft = parseFloat(markerElement.style.left);

    // Determine direction and swap images BEFORE moving
    if (targetLeft > currentCarLeft + HORIZONTAL_MOVE_THRESHOLD) {
        // Moving Right
        avatarImage.src = AVATAR_RIGHT;
        carImage.src = CAR_RIGHT;
        avatarImage.classList.add('side-view'); // Add class if needed for side-view CSS adjustments
    } else if (targetLeft < currentCarLeft - HORIZONTAL_MOVE_THRESHOLD) {
        // Moving Left
        avatarImage.src = AVATAR_LEFT;
        carImage.src = CAR_LEFT;
        avatarImage.classList.add('side-view');
    } else {
        // Moving Vertically or staying put - ensure front view
        avatarImage.src = AVATAR_FRONT;
        carImage.src = CAR_FRONT;
        avatarImage.classList.remove('side-view');
    }
    // **** END ADDED ****

    // Original position update (triggers animation)
    car.style.top = `${targetTop}%`;
    car.style.left = `${targetLeft}%`;

    // **** ADDED: Update current position state ****
    currentCarTop = targetTop;
    currentCarLeft = targetLeft;

    // Track visited location and update counter
    if (!visitedLocations.has(location.name)) {
        visitedLocations.add(location.name);
        placesVisited.textContent = visitedLocations.size;
    }

    // Decrease fuel
    decreaseFuel();

    // Setup Tooltip Positioning and Content (AFTER animation)
    setTimeout(() => {
         // **** ADDED: Reset images to front view ****
         avatarImage.src = AVATAR_FRONT;
         carImage.src = CAR_FRONT;
         avatarImage.classList.remove('side-view');
         // **** END ADDED ****

        // Wait for next frame render to get final positions after image reset
        requestAnimationFrame(() => {
            const tooltipHeight = infoTooltip.offsetHeight;
            const tooltipWidth = infoTooltip.offsetWidth;
            const containerHeight = mapContainer.offsetHeight;
            const containerWidth = mapContainer.offsetWidth;

            if (tooltipHeight === 0 || tooltipWidth === 0) {
                console.warn("Elements not ready for positioning.");
                return;
            }

            // Get car position % from style (more reliable after animation)
            const carTop = parseFloat(car.style.top);
            const carLeft = parseFloat(car.style.left);

            const NORTH_SOUTH_THRESHOLD = 45;

            infoTooltip.classList.remove('position-above', 'position-below');

            let tooltipY, tooltipX;

            if (carTop < NORTH_SOUTH_THRESHOLD) {
                tooltipY = carTop + 15; // Below car
                infoTooltip.classList.add('position-below');
            } else {
                // Above car - Calculate based on % height
                tooltipY = carTop - (tooltipHeight / containerHeight * 100) - (TOOLTIP_GAP / containerHeight * 100); // Adjust gap based on %
                infoTooltip.classList.add('position-above');
            }

            // Center horizontally based on % width
            tooltipX = carLeft - (tooltipWidth / containerWidth * 50); // Center calculation needs adjustment based on transform-origin

            // --- Refined Centering for X (using offsetWidth might be better here) ---
             const carCenterOffsetPx = car.offsetWidth / 2;
             const tooltipWidthPx = infoTooltip.offsetWidth;
             // Calculate left edge in % to center the tooltip
             tooltipX = carLeft; // Start at car's left %
             // Need to convert widths to % relative to container to subtract half tooltip width
             tooltipX -= (tooltipWidthPx / 2 / containerWidth * 100);


            // Boundary Checks (using %)
            tooltipX = Math.max(1, Math.min(tooltipX, 100 - (tooltipWidth / containerWidth * 100) - 1));
            tooltipY = Math.max(1, Math.min(tooltipY, 100 - (tooltipHeight / containerHeight * 100) - 1));


            infoTooltip.style.left = `${tooltipX}%`;
            infoTooltip.style.top = `${tooltipY}%`;

            tooltipTitle.textContent = location.name;
            tooltipContent.textContent = location.description;

            infoTooltip.classList.add('visible');

            if (location.image && location.image.trim() !== "") {
                tooltipImageContainer.innerHTML = `<img class="tooltip-image" src="${IMG_PATH}${location.image}" alt="${location.name}">`; // Added IMG_PATH
            } else {
                tooltipImageContainer.innerHTML = `<div class="tooltip-placeholder">IMAGE OF POINT OF INTEREST</div>`;
            }

            updateExpeditionInfo(location);
        });
    }, 810); // Delay matches car transition time
}

function decreaseFuel() {
    currentFuel = Math.max(0, currentFuel - FUEL_PER_MOVE);
    fuelLevel.style.width = `${currentFuel}%`;

    // Update fuel color based on level
    fuelLevel.classList.remove('medium', 'low');

    if (currentFuel <= FUEL_LEVEL_LOW) {
        fuelLevel.classList.add('low');
    } else if (currentFuel <= FUEL_LEVEL_MEDIUM) {
        fuelLevel.classList.add('medium');
    }

    if (currentFuel === 0) {
        setTimeout(showFuelModal, 1000); // Show modal after movement animation completes
    }
}

function refuel() {
    // Play the video when refuel button is clicked
    fuelVideo.play();

    // After a short delay, refill the tank and hide modal
    setTimeout(() => {
        currentFuel = MAX_FUEL;
        fuelLevel.style.width = `${currentFuel}%`;
        fuelLevel.classList.remove('medium', 'low');

        // Hide modal after refueling animation
        setTimeout(hideFuelModal, 2000);
    }, 1000);
}

function showFuelModal() {
    fuelModal.classList.add('visible');
    // Don't auto-play the video, only when refuel button is clicked
}

function hideFuelModal() {
    fuelModal.classList.remove('visible');
    fuelVideo.pause();
    fuelVideo.currentTime = 0;
}

function updateExpeditionInfo(location) {
    trailsContent.textContent = location.trailInfo || "Select a destination for trail details.";
    weatherContent.textContent = location.weatherNote || "General weather is pleasant.";
}

function hideTooltipOnClickOutside(e) {
     if (!infoTooltip.contains(e.target) && !e.target.closest('.location-item') && !e.target.classList.contains('location-marker')) {
        infoTooltip.classList.remove('visible');
    }
}

function initializeMap() {
    createMarkersAndList();
    const initialLocation = locationsData.find(loc => loc.name === "Curepipe") || locationsData[0]; // Keep initial location from your code
    const initialMarker = Array.from(mapContainer.querySelectorAll('.location-marker')).find(m => m.dataset.name === initialLocation.name);
    if (initialMarker) {
        const initialTop = parseFloat(initialMarker.style.top);
        const initialLeft = parseFloat(initialMarker.style.left);

        car.style.transition = 'none';
        car.style.top = `${initialTop}%`;
        car.style.left = `${initialLeft}%`;
         // **** ADDED: Initialize current position ****
        currentCarTop = initialTop;
        currentCarLeft = initialLeft;
        // **** END ADDED ****

        // Add initial location to visited set
        visitedLocations.add(initialLocation.name);
        placesVisited.textContent = visitedLocations.size;

        // Initialize fuel gauge
        fuelLevel.style.width = `${currentFuel}%`;

        void car.offsetWidth;
        setTimeout(() => { car.style.transition = 'top 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55), left 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)'; }, 50);
    }

    document.addEventListener('click', hideTooltipOnClickOutside);

    // Tooltip button handlers (kept from your code)
    exploreButton.addEventListener('click', function() { alert("Explore functionality would open a detailed view or virtual tour."); });
    detailsButton.addEventListener('click', function() { alert("Details functionality would show additional information or photos."); });

    // Fuel modal handlers
    closeModal.addEventListener('click', hideFuelModal);
    refuelButton.addEventListener('click', refuel);
}

// --- Run Initialization ---
document.addEventListener('DOMContentLoaded', function() {
    // Play the car start sound
    carStartSound.play();

    // Initialize the map
    initializeMap();

    // Hide the loading overlay after 4.2 seconds
    setTimeout(() => {
        loadingOverlay.style.opacity = 0;

        // Remove from DOM after fade out
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }, 1100); // 2.2 seconds
});