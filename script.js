// Hobby database with interests, budget levels, and details
const hobbyDatabase = {
    music: [
        { name: "Learning Guitar", description: "Start playing acoustic guitar with online tutorials", budget: "low", cost: "$30-50 for starter guitar", emoji: "🎸" },
        { name: "Piano Lessons", description: "Learn piano through apps or local classes", budget: "medium", cost: "$50-150/month", emoji: "🎹" },
        { name: "Music Production", description: "Create your own music with DAW software", budget: "high", cost: "$200-500 for software/equipment", emoji: "🎧" },
        { name: "Singing", description: "Join a choir or take vocal lessons", budget: "low", cost: "Free-$50/month", emoji: "🎤" },
        { name: "DJing", description: "Learn to mix and create DJ sets", budget: "high", cost: "$300-1000 for equipment", emoji: "💿" },
        { name: "Modular Synthesis", description: "Build and experiment with modular synthesizers", budget: "high", cost: "$500-2000 for modules", emoji: "🎛️" },
        { name: "Vinyl Collecting", description: "Collect and curate vinyl records", budget: "medium", cost: "$50-200/month for records", emoji: "💿" },
        { name: "Field Recording", description: "Capture ambient sounds and nature audio", budget: "medium", cost: "$200-500 for recorder", emoji: "🎙️" },
        { name: "Beatboxing", description: "Create rhythms and sounds with your voice", budget: "low", cost: "Free", emoji: "👄" },
        { name: "Theremin Playing", description: "Play the electronic instrument without touching it", budget: "medium", cost: "$200-400 for theremin", emoji: "👻" },
        { name: "Hang Drum", description: "Play the melodic steel drum instrument", budget: "high", cost: "$500-1500 for hang drum", emoji: "🥁" },
        { name: "Kalimba Playing", description: "Master the thumb piano", budget: "low", cost: "$20-60 for kalimba", emoji: "🎹" },
        { name: "Ocarina Collecting", description: "Collect and play ceramic wind instruments", budget: "low", cost: "$15-50 per ocarina", emoji: "🎵" },
        { name: "Handpan", description: "Play the modern steel drum", budget: "high", cost: "$600-2000 for handpan", emoji: "🥁" },
        { name: "Circuit Bending", description: "Modify electronic instruments to create new sounds", budget: "low", cost: "$20-100 for old electronics", emoji: "⚡" },
        { name: "Chiptune Music", description: "Create music using retro game console sounds", budget: "low", cost: "$50-200 for software/hardware", emoji: "🎮" },
        { name: "Modular Synth Patching", description: "Create complex soundscapes with modular systems", budget: "high", cost: "$800-3000 for modules", emoji: "🎛️" },
        { name: "Tape Loop Music", description: "Create ambient music with tape loops", budget: "low", cost: "$30-100 for tape recorder", emoji: "📼" },
        { name: "Acoustic Ecology", description: "Study and record environmental sounds", budget: "medium", cost: "$200-500 for recorder", emoji: "🌿" }
    ],
    art: [
        { name: "Sketching", description: "Draw with pencils and paper", budget: "low", cost: "$10-30 for supplies", emoji: "✏️" },
        { name: "Watercolor Painting", description: "Create beautiful watercolor artworks", budget: "medium", cost: "$50-100 for supplies", emoji: "🎨" },
        { name: "Digital Art", description: "Create digital illustrations with tablet and software", budget: "high", cost: "$200-500 for tablet/software", emoji: "🖼️" },
        { name: "Pottery", description: "Shape clay into beautiful ceramics", budget: "medium", cost: "$80-150/month for classes", emoji: "🏺" },
        { name: "Calligraphy", description: "Master the art of beautiful handwriting", budget: "low", cost: "$20-40 for pens and paper", emoji: "✍️" },
        { name: "Resin Art", description: "Create art with epoxy resin and pigments", budget: "medium", cost: "$50-150 for supplies", emoji: "💎" },
        { name: "Pyrography", description: "Wood burning art and designs", budget: "low", cost: "$30-80 for tool", emoji: "🔥" },
        { name: "Miniature Painting", description: "Paint tiny detailed models and figures", budget: "low", cost: "$40-100 for paints and brushes", emoji: "🎨" },
        { name: "Encaustic Painting", description: "Paint with hot wax and pigments", budget: "medium", cost: "$100-200 for supplies", emoji: "🕯️" },
        { name: "Glass Blowing", description: "Shape molten glass into art pieces", budget: "high", cost: "$200-500 for classes", emoji: "🔥" },
        { name: "Kintsugi", description: "Repair ceramics with gold lacquer", budget: "medium", cost: "$50-150 for supplies", emoji: "🍶" },
        { name: "Suminagashi", description: "Japanese marbling art on water", budget: "low", cost: "$20-50 for supplies", emoji: "🌊" },
        { name: "Zentangle", description: "Create structured patterns and designs", budget: "low", cost: "$10-30 for pens and paper", emoji: "🌀" },
        { name: "Alcohol Ink Art", description: "Create vibrant abstract art with inks", budget: "low", cost: "$30-80 for inks and tiles", emoji: "🎨" },
        { name: "Needle Felting", description: "Sculpt with wool using special needles", budget: "low", cost: "$20-60 for supplies", emoji: "🪡" },
        { name: "Paper Quilling", description: "Create art with rolled paper strips", budget: "low", cost: "$15-40 for paper and tools", emoji: "📄" },
        { name: "Terrarium Building", description: "Create miniature ecosystems in glass", budget: "low", cost: "$30-80 for containers and plants", emoji: "🌿" },
        { name: "Epoxy River Tables", description: "Build tables with epoxy resin rivers", budget: "high", cost: "$300-800 for materials", emoji: "🪵" },
        { name: "Dye Sublimation", description: "Print designs on various materials", budget: "medium", cost: "$200-500 for printer", emoji: "🖨️" },
        { name: "Bookbinding", description: "Hand-bind books and journals", budget: "low", cost: "$30-100 for tools", emoji: "📚" },
        { name: "Linocut Printing", description: "Carve and print linoleum blocks", budget: "low", cost: "$25-70 for supplies", emoji: "🖨️" }
    ],
    technology: [
        { name: "Coding", description: "Learn programming languages online", budget: "low", cost: "Free-$20/month for courses", emoji: "💻" },
        { name: "3D Printing", description: "Design and print 3D objects", budget: "medium", cost: "$150-300 for printer", emoji: "🖨️" },
        { name: "Robotics", description: "Build and program robots", budget: "high", cost: "$300-800 for kits", emoji: "🤖" },
        { name: "Electronics", description: "Build circuits and electronic projects", budget: "medium", cost: "$50-200 for components", emoji: "⚡" },
        { name: "Game Development", description: "Create your own video games", budget: "low", cost: "Free-$50 for game engines", emoji: "🎮" },
        { name: "Home Automation", description: "Automate your home with smart devices", budget: "medium", cost: "$100-300 for devices", emoji: "🏠" },
        { name: "Raspberry Pi Projects", description: "Build projects with microcomputers", budget: "low", cost: "$50-100 for Pi and components", emoji: "🍓" },
        { name: "Arduino Tinkering", description: "Create interactive electronic projects", budget: "low", cost: "$30-80 for starter kit", emoji: "🔌" },
        { name: "Retro Computing", description: "Restore and use vintage computers", budget: "medium", cost: "$100-400 for vintage hardware", emoji: "🖥️" },
        { name: "FPV Drone Racing", description: "Build and race first-person view drones", budget: "high", cost: "$300-800 for drone and goggles", emoji: "🚁" },
        { name: "SDR Radio", description: "Explore radio frequencies with software-defined radio", budget: "medium", cost: "$50-200 for SDR dongle", emoji: "📻" },
        { name: "Ham Radio", description: "Communicate via amateur radio", budget: "medium", cost: "$100-400 for radio equipment", emoji: "📡" },
        { name: "Lock Picking", description: "Learn to pick locks as a skill", budget: "low", cost: "$30-80 for practice locks", emoji: "🔓" },
        { name: "Mechanical Keyboards", description: "Build and customize mechanical keyboards", budget: "medium", cost: "$100-400 per keyboard", emoji: "⌨️" },
        { name: "3D Scanning", description: "Scan objects to create 3D models", budget: "medium", cost: "$200-600 for scanner", emoji: "📐" },
        { name: "CNC Machining", description: "Create precision parts with CNC machines", budget: "high", cost: "$500-2000 for machine", emoji: "⚙️" },
        { name: "Laser Cutting", description: "Cut and engrave with laser cutters", budget: "high", cost: "$300-1000 for laser cutter", emoji: "⚡" },
        { name: "PCB Design", description: "Design and manufacture circuit boards", budget: "medium", cost: "$50-200 for design software", emoji: "🔌" },
        { name: "Cryptocurrency Mining", description: "Mine digital currencies", budget: "high", cost: "$500-2000 for mining rig", emoji: "⛏️" },
        { name: "Penetration Testing", description: "Ethical hacking and security testing", budget: "low", cost: "Free-$50 for tools", emoji: "🔐" }
    ],
    nature: [
        { name: "Gardening", description: "Grow your own vegetables and flowers", budget: "low", cost: "$20-50 for seeds and tools", emoji: "🌱" },
        { name: "Hiking", description: "Explore trails and nature paths", budget: "low", cost: "$30-100 for gear", emoji: "🥾" },
        { name: "Bird Watching", description: "Observe and identify birds in nature", budget: "low", cost: "$50-150 for binoculars", emoji: "🦅" },
        { name: "Photography", description: "Capture nature's beauty with a camera", budget: "medium", cost: "$200-500 for camera", emoji: "📷" },
        { name: "Camping", description: "Spend nights under the stars", budget: "medium", cost: "$100-300 for equipment", emoji: "⛺" },
        { name: "Mushroom Foraging", description: "Identify and collect wild mushrooms", budget: "low", cost: "$20-50 for guide books", emoji: "🍄" },
        { name: "Rockhounding", description: "Collect and identify rocks and minerals", budget: "low", cost: "$30-80 for tools", emoji: "💎" },
        { name: "Beekeeping", description: "Keep and care for honeybees", budget: "medium", cost: "$200-400 for hive setup", emoji: "🐝" },
        { name: "Aquascaping", description: "Design and maintain underwater landscapes", budget: "medium", cost: "$150-400 for tank and plants", emoji: "🐠" },
        { name: "Bonsai Cultivation", description: "Grow and shape miniature trees", budget: "low", cost: "$30-100 for starter tree", emoji: "🌳" },
        { name: "Moss Graffiti", description: "Create living graffiti with moss", budget: "low", cost: "$10-30 for moss and buttermilk", emoji: "🟢" },
        { name: "Kokedama", description: "Japanese moss ball plant art", budget: "low", cost: "$15-40 for supplies", emoji: "🌿" },
        { name: "Hydroponic Gardening", description: "Grow plants without soil", budget: "medium", cost: "$100-300 for system", emoji: "💧" },
        { name: "Butterfly Rearing", description: "Raise butterflies from caterpillars", budget: "low", cost: "$20-60 for habitat", emoji: "🦋" },
        { name: "Worm Composting", description: "Compost with vermiculture", budget: "low", cost: "$30-80 for bin and worms", emoji: "🐛" },
        { name: "Seed Saving", description: "Collect and preserve heirloom seeds", budget: "low", cost: "$10-30 for storage", emoji: "🌾" },
        { name: "Geocaching", description: "Treasure hunting with GPS", budget: "low", cost: "Free-$50 for GPS device", emoji: "🗺️" },
        { name: "Fossil Hunting", description: "Search for and identify fossils", budget: "low", cost: "$20-60 for tools", emoji: "🦴" },
        { name: "Mushroom Cultivation", description: "Grow gourmet mushrooms at home", budget: "low", cost: "$30-100 for growing kit", emoji: "🍄" },
        { name: "Terrarium Ecosystems", description: "Create self-sustaining mini ecosystems", budget: "low", cost: "$25-70 for materials", emoji: "🌍" },
        { name: "Plant Propagation", description: "Multiply plants through cuttings", budget: "low", cost: "$10-40 for supplies", emoji: "🌱" }
    ],
    sports: [
        { name: "Running", description: "Jog through parks and neighborhoods", budget: "low", cost: "$50-100 for shoes", emoji: "🏃" },
        { name: "Cycling", description: "Ride bikes for fitness and fun", budget: "medium", cost: "$200-500 for bike", emoji: "🚴" },
        { name: "Swimming", description: "Swim laps at local pools", budget: "low", cost: "$30-80/month for pool access", emoji: "🏊" },
        { name: "Rock Climbing", description: "Climb indoor or outdoor walls", budget: "medium", cost: "$50-150/month for gym", emoji: "🧗" },
        { name: "Tennis", description: "Play singles or doubles matches", budget: "medium", cost: "$100-200 for racket and court fees", emoji: "🎾" },
        { name: "Disc Golf", description: "Play golf with flying discs", budget: "low", cost: "$20-60 for discs", emoji: "🥏" },
        { name: "Parkour", description: "Move through urban environments efficiently", budget: "low", cost: "Free-$50 for shoes", emoji: "🏃" },
        { name: "Slacklining", description: "Balance on suspended webbing", budget: "low", cost: "$30-100 for slackline", emoji: "🪢" },
        { name: "Ultimate Frisbee", description: "Play team disc sport", budget: "low", cost: "$15-40 for disc", emoji: "🥏" },
        { name: "Pickleball", description: "Play paddle sport hybrid", budget: "low", cost: "$30-80 for paddle", emoji: "🏓" },
        { name: "Orienteering", description: "Navigate using map and compass", budget: "low", cost: "$20-60 for compass", emoji: "🧭" },
        { name: "Bouldering", description: "Rock climb without ropes", budget: "medium", cost: "$50-150/month for gym", emoji: "🧗" },
        { name: "Stand Up Paddleboarding", description: "Paddle on calm waters", budget: "medium", cost: "$300-800 for board", emoji: "🏄" },
        { name: "Archery", description: "Shoot arrows with bow", budget: "medium", cost: "$100-300 for bow and arrows", emoji: "🏹" },
        { name: "Fencing", description: "Learn sword fighting sport", budget: "medium", cost: "$80-200/month for classes", emoji: "⚔️" },
        { name: "Kite Flying", description: "Fly stunt and power kites", budget: "low", cost: "$30-150 for kite", emoji: "🪁" }
    ],
    cooking: [
        { name: "Baking", description: "Create delicious pastries and breads", budget: "low", cost: "$30-60 for ingredients and tools", emoji: "🍰" },
        { name: "Gourmet Cooking", description: "Master advanced cooking techniques", budget: "medium", cost: "$100-200/month for ingredients", emoji: "👨‍🍳" },
        { name: "Fermentation", description: "Make kombucha, kimchi, and pickles", budget: "low", cost: "$20-50 for supplies", emoji: "🥒" },
        { name: "Coffee Brewing", description: "Perfect your coffee brewing skills", budget: "medium", cost: "$100-300 for equipment", emoji: "☕" },
        { name: "Meal Prep", description: "Plan and prepare healthy meals", budget: "low", cost: "Regular grocery budget", emoji: "🍱" },
        { name: "Sourdough Baking", description: "Master sourdough bread making", budget: "low", cost: "$20-50 for starter and tools", emoji: "🍞" },
        { name: "Charcuterie", description: "Cure and preserve meats", budget: "medium", cost: "$100-300 for equipment", emoji: "🥓" },
        { name: "Cheese Making", description: "Make artisanal cheeses at home", budget: "medium", cost: "$50-150 for supplies", emoji: "🧀" },
        { name: "Miso Making", description: "Ferment traditional Japanese miso", budget: "low", cost: "$30-80 for ingredients", emoji: "🍲" },
        { name: "Tempeh Making", description: "Ferment soybeans into tempeh", budget: "low", cost: "$20-60 for starter", emoji: "🫘" },
        { name: "Homebrewing", description: "Brew your own beer", budget: "medium", cost: "$100-300 for equipment", emoji: "🍺" },
        { name: "Mead Making", description: "Ferment honey into mead", budget: "low", cost: "$40-100 for supplies", emoji: "🍯" },
        { name: "Foraging", description: "Identify and harvest wild edibles", budget: "low", cost: "$20-50 for guide books", emoji: "🌿" },
        { name: "Molecular Gastronomy", description: "Experiment with food science", budget: "medium", cost: "$100-300 for tools", emoji: "🧪" },
        { name: "Smoking Foods", description: "Smoke meats and vegetables", budget: "medium", cost: "$150-400 for smoker", emoji: "💨" },
        { name: "Canning", description: "Preserve foods in jars", budget: "low", cost: "$30-80 for canning supplies", emoji: "🥫" }
    ],
    reading: [
        { name: "Book Club", description: "Join a local or online reading group", budget: "low", cost: "Free-$30/month for books", emoji: "📚" },
        { name: "Audiobooks", description: "Listen to books during commutes", budget: "low", cost: "$10-15/month for subscription", emoji: "🎧" },
        { name: "Writing", description: "Start a blog or write stories", budget: "low", cost: "Free-$10/month for hosting", emoji: "✍️" },
        { name: "Poetry", description: "Read and write poetry", budget: "low", cost: "$20-40 for books", emoji: "📝" },
        { name: "Zine Making", description: "Create self-published magazines", budget: "low", cost: "$10-30 for supplies", emoji: "📰" },
        { name: "Flash Fiction", description: "Write very short stories", budget: "low", cost: "Free", emoji: "✍️" },
        { name: "Fan Fiction", description: "Write stories based on existing works", budget: "low", cost: "Free", emoji: "📖" },
        { name: "Script Writing", description: "Write screenplays and scripts", budget: "low", cost: "Free-$50 for software", emoji: "🎬" },
        { name: "Letter Writing", description: "Write and send handwritten letters", budget: "low", cost: "$10-30 for stationery", emoji: "✉️" },
        { name: "Book Binding", description: "Hand-bind your own books", budget: "low", cost: "$30-100 for tools", emoji: "📚" },
        { name: "Calligraphy", description: "Master beautiful handwriting", budget: "low", cost: "$20-60 for pens", emoji: "🖋️" }
    ],
    gaming: [
        { name: "Board Games", description: "Play strategy and party board games", budget: "low", cost: "$30-80 per game", emoji: "🎲" },
        { name: "Video Games", description: "Play on console or PC", budget: "medium", cost: "$200-500 for console/games", emoji: "🎮" },
        { name: "Tabletop RPGs", description: "Play Dungeons & Dragons or similar", budget: "low", cost: "$20-60 for starter set", emoji: "🐉" },
        { name: "Puzzle Solving", description: "Solve crosswords, sudoku, and brain teasers", budget: "low", cost: "$10-20 for books/apps", emoji: "🧩" },
        { name: "Speedcubing", description: "Solve Rubik's cubes as fast as possible", budget: "low", cost: "$10-30 for speedcube", emoji: "🧩" },
        { name: "Escape Rooms", description: "Solve puzzles in themed rooms", budget: "medium", cost: "$20-40 per session", emoji: "🚪" },
        { name: "LARPing", description: "Live action role-playing games", budget: "medium", cost: "$100-300 for costume", emoji: "⚔️" },
        { name: "Warhammer", description: "Build and paint miniatures, play tabletop", budget: "medium", cost: "$100-300 for starter set", emoji: "🎲" },
        { name: "Magic: The Gathering", description: "Collect and play trading card game", budget: "medium", cost: "$50-200 for decks", emoji: "🃏" },
        { name: "Chess", description: "Master the game of chess", budget: "low", cost: "$20-60 for board", emoji: "♟️" },
        { name: "Go", description: "Learn the ancient board game", budget: "low", cost: "$30-80 for board and stones", emoji: "⚫" },
        { name: "Retro Gaming", description: "Collect and play vintage video games", budget: "medium", cost: "$100-400 for console/games", emoji: "🎮" },
        { name: "Speedrunning", description: "Complete games as fast as possible", budget: "low", cost: "Free-$50 for games", emoji: "⏱️" }
    ],
    fitness: [
        { name: "Yoga", description: "Practice at home or in studios", budget: "low", cost: "Free-$50/month", emoji: "🧘" },
        { name: "Weightlifting", description: "Build strength at home or gym", budget: "medium", cost: "$50-150/month for gym", emoji: "🏋️" },
        { name: "Martial Arts", description: "Learn karate, judo, or other disciplines", budget: "medium", cost: "$80-150/month for classes", emoji: "🥋" },
        { name: "Dancing", description: "Learn various dance styles", budget: "medium", cost: "$50-120/month for classes", emoji: "💃" },
        { name: "Calisthenics", description: "Bodyweight exercises in parks", budget: "low", cost: "Free", emoji: "🤸" },
        { name: "Pole Fitness", description: "Dance and exercise on vertical pole", budget: "medium", cost: "$50-150/month for classes", emoji: "💃" },
        { name: "Aerial Silks", description: "Perform acrobatics on fabric", budget: "medium", cost: "$80-150/month for classes", emoji: "🎪" },
        { name: "Handstand Training", description: "Master handstand and inversions", budget: "low", cost: "Free-$50 for mat", emoji: "🤸" },
        { name: "Kettlebell Training", description: "Build strength with kettlebells", budget: "low", cost: "$50-150 for kettlebells", emoji: "🏋️" },
        { name: "Rucking", description: "Walk with weighted backpack", budget: "low", cost: "$50-150 for ruck", emoji: "🎒" },
        { name: "Cold Plunging", description: "Immerse in cold water for health", budget: "low", cost: "Free-$200 for setup", emoji: "🧊" },
        { name: "Breathwork", description: "Practice controlled breathing techniques", budget: "low", cost: "Free-$30 for courses", emoji: "🫁" },
        { name: "Mobility Training", description: "Improve flexibility and movement", budget: "low", cost: "Free-$50 for equipment", emoji: "🧘" },
        { name: "Obstacle Course Racing", description: "Train for and run OCR events", budget: "medium", cost: "$50-150 for race fees", emoji: "🏃" }
    ],
    photography: [
        { name: "Smartphone Photography", description: "Take great photos with your phone", budget: "low", cost: "Free-$20 for apps", emoji: "📱" },
        { name: "DSLR Photography", description: "Master professional photography", budget: "high", cost: "$500-2000 for camera", emoji: "📸" },
        { name: "Street Photography", description: "Capture urban life and moments", budget: "low", cost: "$0-100 for camera", emoji: "📷" },
        { name: "Photo Editing", description: "Edit and enhance your photos", budget: "low", cost: "Free-$10/month for software", emoji: "🎨" },
        { name: "Astrophotography", description: "Photograph stars, planets, and deep space objects", budget: "high", cost: "$500-2000 for telescope and camera", emoji: "🌌" },
        { name: "Macro Photography", description: "Extreme close-up photography of small subjects", budget: "medium", cost: "$200-500 for macro lens", emoji: "🔬" },
        { name: "Wildlife Photography", description: "Capture animals in their natural habitat", budget: "high", cost: "$500-1500 for telephoto lens", emoji: "🦁" },
        { name: "Aerial Photography", description: "Photography from drones and aircraft", budget: "high", cost: "$300-1000 for drone", emoji: "🚁" },
        { name: "Underwater Photography", description: "Capture marine life and underwater scenes", budget: "high", cost: "$200-800 for housing", emoji: "🐠" },
        { name: "Time-Lapse Photography", description: "Create time-lapse videos of changing scenes", budget: "medium", cost: "$100-300 for intervalometer", emoji: "⏱️" },
        { name: "Film Photography", description: "Shoot with analog film cameras", budget: "medium", cost: "$100-300 for camera and film", emoji: "🎞️" },
        { name: "Infrared Photography", description: "Capture light beyond visible spectrum", budget: "high", cost: "$400-1000 for converted camera", emoji: "🔴" },
        { name: "Light Painting", description: "Create art with long exposure and lights", budget: "low", cost: "$20-100 for lights", emoji: "💡" },
        { name: "Pinhole Photography", description: "Shoot with camera obscura", budget: "low", cost: "$10-50 for materials", emoji: "📷" },
        { name: "Lomography", description: "Experimental analog photography", budget: "low", cost: "$50-150 for camera", emoji: "📸" },
        { name: "Tilt-Shift Photography", description: "Create miniature effect photos", budget: "high", cost: "$500-1500 for lens", emoji: "🏙️" },
        { name: "High-Speed Photography", description: "Capture fast-moving subjects", budget: "high", cost: "$300-800 for flash system", emoji: "⚡" },
        { name: "Panoramic Photography", description: "Create wide-angle landscape photos", budget: "medium", cost: "$100-400 for equipment", emoji: "🏔️" },
        { name: "HDR Photography", description: "Merge multiple exposures", budget: "low", cost: "Free-$20 for software", emoji: "🌈" },
        { name: "Focus Stacking", description: "Combine images for maximum depth", budget: "low", cost: "Free-$30 for software", emoji: "🔍" },
        { name: "Black and White Photography", description: "Master monochrome photography", budget: "medium", cost: "$200-500 for camera", emoji: "⚫" }
    ],
    crafting: [
        { name: "Knitting", description: "Create scarves, sweaters, and more", budget: "low", cost: "$20-50 for yarn and needles", emoji: "🧶" },
        { name: "Woodworking", description: "Build furniture and wooden items", budget: "medium", cost: "$200-500 for tools", emoji: "🪵" },
        { name: "Sewing", description: "Make your own clothes and accessories", budget: "medium", cost: "$100-300 for machine", emoji: "🧵" },
        { name: "Origami", description: "Fold paper into beautiful shapes", budget: "low", cost: "$5-15 for paper", emoji: "🪷" },
        { name: "Jewelry Making", description: "Create custom jewelry pieces", budget: "medium", cost: "$50-150 for supplies", emoji: "💍" },
        { name: "Chainmaille", description: "Weave metal rings into armor", budget: "low", cost: "$30-100 for rings", emoji: "⛓️" },
        { name: "Leatherworking", description: "Craft items from leather", budget: "medium", cost: "$100-300 for tools", emoji: "👜" },
        { name: "Soap Making", description: "Create handmade soaps", budget: "low", cost: "$30-80 for supplies", emoji: "🧼" },
        { name: "Candle Making", description: "Make scented candles", budget: "low", cost: "$25-70 for materials", emoji: "🕯️" },
        { name: "Pottery Wheel", description: "Throw clay on pottery wheel", budget: "medium", cost: "$200-500 for wheel", emoji: "🏺" },
        { name: "Stained Glass", description: "Create art with colored glass", budget: "medium", cost: "$100-300 for supplies", emoji: "🪟" },
        { name: "Mosaic Art", description: "Create art from small tiles", budget: "low", cost: "$30-100 for tiles", emoji: "🧩" },
        { name: "Wire Wrapping", description: "Create jewelry with wire", budget: "low", cost: "$20-60 for wire and tools", emoji: "🌀" },
        { name: "Resin Casting", description: "Cast objects in resin", budget: "medium", cost: "$50-150 for supplies", emoji: "💎" },
        { name: "Embroidery", description: "Decorate fabric with thread", budget: "low", cost: "$15-50 for supplies", emoji: "🧵" },
        { name: "Cross Stitch", description: "Create pixel art with thread", budget: "low", cost: "$10-40 for kit", emoji: "✂️" },
        { name: "Quilling", description: "Roll paper into decorative shapes", budget: "low", cost: "$10-30 for paper", emoji: "📄" },
        { name: "Tatting", description: "Create lace with shuttle", budget: "low", cost: "$15-40 for shuttle and thread", emoji: "🪡" }
    ],
    general: [
        { name: "Journaling", description: "Write about your thoughts and experiences", budget: "low", cost: "$10-30 for notebook", emoji: "📔" },
        { name: "Meditation", description: "Practice mindfulness and relaxation", budget: "low", cost: "Free-$10/month for apps", emoji: "🧘" },
        { name: "Language Learning", description: "Learn a new language", budget: "low", cost: "Free-$20/month for apps", emoji: "🗣️" },
        { name: "Volunteering", description: "Help your community", budget: "low", cost: "Free", emoji: "🤝" }
    ],
    space: [
        { name: "Astrophotography", description: "Photograph stars, planets, and deep space objects", budget: "high", cost: "$500-2000 for telescope and camera", emoji: "🌌" },
        { name: "Amateur Astronomy", description: "Observe and study celestial objects with telescopes", budget: "medium", cost: "$200-800 for telescope", emoji: "🔭" },
        { name: "Planetarium Building", description: "Create your own planetarium dome", budget: "high", cost: "$500-1500 for projector and dome", emoji: "🌍" },
        { name: "Satellite Tracking", description: "Track and observe satellites and space stations", budget: "low", cost: "$20-50 for apps and binoculars", emoji: "🛰️" },
        { name: "Meteor Shower Watching", description: "Observe and photograph meteor showers", budget: "low", cost: "$0-100 for camera", emoji: "☄️" },
        { name: "Solar Observation", description: "Safely observe and photograph the sun", budget: "medium", cost: "$100-300 for solar filter", emoji: "☀️" },
        { name: "Lunar Photography", description: "Capture detailed photos of the moon", budget: "medium", cost: "$200-500 for telescope adapter", emoji: "🌙" },
        { name: "Space Model Building", description: "Build scale models of rockets and spacecraft", budget: "low", cost: "$30-100 per model", emoji: "🚀" },
        { name: "Radio Astronomy", description: "Observe space with radio telescopes", budget: "medium", cost: "$200-600 for equipment", emoji: "📡" },
        { name: "Eclipse Chasing", description: "Travel to view solar and lunar eclipses", budget: "medium", cost: "$200-1000 for travel", emoji: "🌑" },
        { name: "Aurora Watching", description: "Photograph and observe northern lights", budget: "low", cost: "$0-200 for travel", emoji: "🌌" },
        { name: "Meteorite Hunting", description: "Search for and identify meteorites", budget: "low", cost: "$20-100 for metal detector", emoji: "☄️" },
        { name: "Stargazing", description: "Observe night sky with naked eye", budget: "low", cost: "Free-$50 for star chart", emoji: "⭐" },
        { name: "Planet Spotting", description: "Identify planets in night sky", budget: "low", cost: "Free-$30 for app", emoji: "🪐" },
        { name: "ISS Tracking", description: "Track International Space Station", budget: "low", cost: "Free-$20 for app", emoji: "🛰️" }
    ]
};

// Advanced semantic interest mapping with related concepts
const interestKeywords = {
    music: ["music", "musical", "song", "guitar", "piano", "instrument", "sing", "singing", "dj", "djing", "audio", "sound", "melody", "rhythm", "beat", "harmony", "concert", "band", "orchestra"],
    art: ["art", "artistic", "draw", "drawing", "paint", "painting", "sketch", "sketching", "creative", "design", "visual", "canvas", "brush", "color", "illustration", "sculpture", "gallery"],
    technology: ["tech", "technology", "computer", "coding", "programming", "code", "software", "digital", "electronic", "robot", "3d", "app", "website", "internet", "ai", "machine learning", "data"],
    nature: ["nature", "outdoor", "outdoors", "garden", "gardening", "hike", "hiking", "camp", "camping", "bird", "wildlife", "plant", "forest", "mountain", "beach", "ocean", "tree", "flower", "animal"],
    sports: ["sport", "sports", "athletic", "fitness", "exercise", "run", "running", "bike", "cycling", "swim", "swimming", "tennis", "basketball", "football", "soccer", "baseball", "golf", "volleyball"],
    cooking: ["cook", "cooking", "bake", "baking", "food", "recipe", "culinary", "kitchen", "chef", "meal", "cuisine", "restaurant", "ingredient", "flavor", "taste"],
    reading: ["read", "reading", "book", "books", "literature", "novel", "story", "write", "writing", "author", "library", "poetry", "magazine", "article"],
    gaming: ["game", "gaming", "play", "gamer", "video game", "board game", "puzzle", "console", "arcade", "strategy", "adventure"],
    fitness: ["fitness", "workout", "exercise", "gym", "yoga", "dance", "dancing", "martial", "strength", "cardio", "health", "wellness", "meditation"],
    photography: ["photo", "photography", "camera", "picture", "image", "photograph", "lens", "shutter", "portrait", "landscape", "astrophotography", "macro", "wildlife", "aerial", "underwater", "timelapse", "film", "infrared"],
    space: ["space", "astronomy", "stars", "planets", "galaxy", "universe", "cosmos", "nebula", "telescope", "astrophotography", "solar", "lunar", "mars", "saturn", "jupiter", "moon", "constellation"],
    crafting: ["craft", "crafting", "make", "making", "handmade", "diy", "knit", "sew", "woodwork", "sculpt", "build", "create"]
};

// Semantic relationships between interests (more conservative to avoid unrelated matches)
const interestRelations = {
    music: ["technology"],
    art: ["crafting"],
    technology: ["gaming"],
    nature: ["photography", "fitness"],
    sports: ["fitness", "nature"],
    cooking: ["crafting"],
    reading: ["writing"],
    gaming: ["technology"],
    fitness: ["sports", "nature"],
    photography: ["nature", "technology", "space"], // Removed "art" - too broad
    crafting: ["art", "cooking"],
    space: ["photography", "technology"] // Removed "nature" - too broad for space searches
};

// Niche hobby keyword mappings for better matching
const nicheKeywords = {
    "astrophotography": ["space", "astronomy", "stars", "planets", "galaxy", "universe", "cosmos", "nebula", "telescope", "solar", "lunar", "mars", "saturn", "jupiter", "moon", "constellation"],
    "macro photography": ["macro", "close-up", "tiny", "small", "insect", "detail"],
    "wildlife photography": ["wildlife", "animal", "nature", "safari", "zoo"],
    "aerial photography": ["aerial", "drone", "sky", "above", "bird's eye"],
    "underwater photography": ["underwater", "diving", "scuba", "marine", "ocean", "sea"],
    "film photography": ["film", "analog", "vintage", "35mm", "medium format"],
    "infrared photography": ["infrared", "ir", "spectrum"],
    "modular synthesis": ["modular", "synthesizer", "eurorack", "patch"],
    "vinyl collecting": ["vinyl", "records", "lp", "turntable"],
    "field recording": ["field recording", "ambient", "soundscape", "audio"],
    "theremin": ["theremin", "electronic instrument"],
    "hang drum": ["hang drum", "handpan", "steel drum"],
    "kalimba": ["kalimba", "thumb piano", "mbira"],
    "handpan": ["handpan", "hang drum", "steel pan"],
    "circuit bending": ["circuit bending", "modify electronics", "circuit mod"],
    "chiptune": ["chiptune", "8-bit", "game music", "retro music"],
    "resin art": ["resin", "epoxy", "pouring"],
    "pyrography": ["pyrography", "wood burning", "burning"],
    "miniature painting": ["miniature", "models", "figures", "warhammer", "dnd"],
    "glass blowing": ["glass blowing", "glassblowing", "molten glass"],
    "kintsugi": ["kintsugi", "gold repair", "ceramic repair"],
    "suminagashi": ["suminagashi", "water marbling", "japanese marbling"],
    "zentangle": ["zentangle", "pattern drawing", "structured drawing"],
    "alcohol ink": ["alcohol ink", "ink art", "tile art"],
    "needle felting": ["needle felting", "wool sculpting", "felting"],
    "paper quilling": ["paper quilling", "quilled paper", "rolled paper"],
    "terrarium": ["terrarium", "mini ecosystem", "glass garden"],
    "epoxy river": ["epoxy river", "resin table", "river table"],
    "bookbinding": ["bookbinding", "bind books", "hand bind"],
    "linocut": ["linocut", "lino printing", "block printing"],
    "home automation": ["home automation", "smart home", "iot", "automation"],
    "raspberry pi": ["raspberry pi", "raspberry", "microcomputer"],
    "arduino": ["arduino", "microcontroller", "embedded"],
    "retro computing": ["retro", "vintage computer", "commodore", "apple ii"],
    "fpv drone": ["fpv", "drone racing", "first person view"],
    "sdr radio": ["sdr", "software defined radio", "radio frequencies"],
    "ham radio": ["ham radio", "amateur radio", "radio communication"],
    "lock picking": ["lock picking", "locksport", "lockpicking"],
    "mechanical keyboards": ["mechanical keyboard", "keyboard building", "custom keyboard"],
    "3d scanning": ["3d scanning", "3d scan", "object scanning"],
    "cnc": ["cnc", "cnc machining", "computer numerical control"],
    "laser cutting": ["laser cutting", "laser cutter", "laser engraving"],
    "pcb design": ["pcb", "circuit board", "printed circuit"],
    "cryptocurrency mining": ["crypto mining", "bitcoin mining", "mining"],
    "penetration testing": ["penetration testing", "ethical hacking", "pentesting"],
    "mushroom foraging": ["mushroom", "foraging", "mycology", "fungi"],
    "rockhounding": ["rockhounding", "rock collecting", "minerals", "gemstones"],
    "beekeeping": ["beekeeping", "bees", "honey", "apiary"],
    "aquascaping": ["aquascaping", "aquarium", "planted tank"],
    "bonsai": ["bonsai", "miniature tree", "tree shaping"],
    "moss graffiti": ["moss graffiti", "living graffiti", "moss art"],
    "kokedama": ["kokedama", "moss ball", "japanese plant"],
    "hydroponic": ["hydroponic", "hydroponics", "soilless growing"],
    "butterfly rearing": ["butterfly", "caterpillar", "raise butterflies"],
    "worm composting": ["worm composting", "vermiculture", "compost worms"],
    "seed saving": ["seed saving", "heirloom seeds", "seed preservation"],
    "geocaching": ["geocaching", "gps treasure", "cache hunting"],
    "fossil hunting": ["fossil hunting", "fossils", "paleontology"],
    "mushroom cultivation": ["grow mushrooms", "mushroom growing", "cultivate mushrooms"],
    "disc golf": ["disc golf", "frisbee golf", "frolf"],
    "parkour": ["parkour", "free running", "urban movement"],
    "slacklining": ["slacklining", "slackline", "balance line"],
    "ultimate frisbee": ["ultimate frisbee", "ultimate", "frisbee sport"],
    "pickleball": ["pickleball", "paddle sport"],
    "orienteering": ["orienteering", "map reading", "compass navigation"],
    "bouldering": ["bouldering", "rock climbing", "indoor climbing"],
    "stand up paddleboarding": ["paddleboarding", "sup", "stand up paddle"],
    "archery": ["archery", "bow", "arrows", "shooting"],
    "fencing": ["fencing", "sword fighting", "foil", "sabre"],
    "kite flying": ["kite flying", "stunt kite", "power kite"],
    "sourdough": ["sourdough", "sourdough bread", "starter"],
    "charcuterie": ["charcuterie", "cure meat", "preserve meat"],
    "cheese making": ["cheese making", "make cheese", "artisan cheese"],
    "miso": ["miso", "ferment miso", "japanese miso"],
    "tempeh": ["tempeh", "ferment tempeh", "soybean"],
    "homebrewing": ["homebrewing", "brew beer", "beer making"],
    "mead": ["mead", "honey wine", "ferment mead"],
    "foraging": ["foraging", "wild edibles", "harvest wild"],
    "molecular gastronomy": ["molecular gastronomy", "food science", "spherification"],
    "smoking": ["smoke food", "smoker", "bbq smoking"],
    "canning": ["canning", "preserve food", "jar food"],
    "zine making": ["zine", "zine making", "self publish"],
    "flash fiction": ["flash fiction", "short story", "micro fiction"],
    "fan fiction": ["fan fiction", "fanfic", "fan fic"],
    "script writing": ["script writing", "screenplay", "write scripts"],
    "letter writing": ["letter writing", "handwritten", "pen pal"],
    "speedcubing": ["speedcubing", "rubik's cube", "speed solve"],
    "escape rooms": ["escape room", "escape game", "puzzle room"],
    "larping": ["larp", "larping", "live action roleplay"],
    "warhammer": ["warhammer", "40k", "warhammer 40k"],
    "magic the gathering": ["magic the gathering", "mtg", "magic cards"],
    "chess": ["chess", "chess playing", "chess strategy"],
    "go": ["go", "weiqi", "baduk", "go game"],
    "retro gaming": ["retro gaming", "vintage games", "classic games"],
    "speedrunning": ["speedrunning", "speedrun", "speed run"],
    "pole fitness": ["pole fitness", "pole dancing", "pole dance"],
    "aerial silks": ["aerial silks", "silks", "fabric acrobatics"],
    "handstand": ["handstand", "inversion", "upside down"],
    "kettlebell": ["kettlebell", "kettlebells", "russian kettlebell"],
    "rucking": ["rucking", "weighted walk", "ruck"],
    "cold plunging": ["cold plunge", "cold water", "ice bath"],
    "breathwork": ["breathwork", "breathing", "pranayama"],
    "mobility training": ["mobility", "flexibility", "movement"],
    "obstacle course racing": ["obstacle course", "ocr", "spartan race"],
    "light painting": ["light painting", "light art", "long exposure light"],
    "pinhole photography": ["pinhole", "camera obscura", "pinhole camera"],
    "lomography": ["lomography", "lomo", "experimental film"],
    "tilt shift": ["tilt shift", "miniature effect", "tilt shift lens"],
    "high speed photography": ["high speed", "fast photography", "freeze motion"],
    "panoramic photography": ["panoramic", "panorama", "wide angle"],
    "hdr photography": ["hdr", "high dynamic range", "merge exposures"],
    "focus stacking": ["focus stacking", "focus merge", "depth of field"],
    "black and white photography": ["black and white", "b&w", "monochrome"],
    "chainmaille": ["chainmaille", "chainmail", "ring mail"],
    "leatherworking": ["leatherworking", "leather craft", "leather work"],
    "soap making": ["soap making", "make soap", "handmade soap"],
    "candle making": ["candle making", "make candles", "candle craft"],
    "pottery wheel": ["pottery wheel", "throw pottery", "wheel throwing"],
    "stained glass": ["stained glass", "glass art", "lead glass"],
    "mosaic": ["mosaic", "mosaic art", "tile art"],
    "wire wrapping": ["wire wrapping", "wire jewelry", "wire work"],
    "resin casting": ["resin casting", "cast resin", "resin mold"],
    "embroidery": ["embroidery", "embroider", "thread art"],
    "cross stitch": ["cross stitch", "cross stitching", "x stitch"],
    "quilling": ["quilling", "paper quilling", "rolled paper"],
    "tatting": ["tatting", "shuttle tatting", "lace making"],
    "radio astronomy": ["radio astronomy", "radio telescope", "radio waves"],
    "eclipse chasing": ["eclipse", "solar eclipse", "lunar eclipse"],
    "aurora": ["aurora", "northern lights", "aurora borealis"],
    "meteorite hunting": ["meteorite", "meteorite hunting", "space rock"],
    "stargazing": ["stargazing", "star gazing", "night sky"],
    "planet spotting": ["planet", "planets", "spot planets"],
    "iss tracking": ["iss", "space station", "international space station"]
};

// Advanced semantic matching with scoring
function calculateInterestScore(userInput, category) {
    const input = userInput.toLowerCase();
    const keywords = interestKeywords[category] || [];
    let score = 0;
    
    // Direct keyword matches (general interests get scored first)
    keywords.forEach(keyword => {
        if (input.includes(keyword)) {
            score += 10;
            // Boost for exact word matches
            const regex = new RegExp(`\\b${keyword}\\b`, 'i');
            if (regex.test(userInput)) {
                score += 5;
            }
        }
    });
    
    // Check for niche hobby matches (additional boost, but doesn't override general)
    for (const [nicheHobby, nicheWords] of Object.entries(nicheKeywords)) {
        nicheWords.forEach(nicheWord => {
            if (input.includes(nicheWord)) {
                // Boost score for niche matches, but not as dominant
                score += 15;
                // Extra boost for exact matches
                const regex = new RegExp(`\\b${nicheWord}\\b`, 'i');
                if (regex.test(userInput)) {
                    score += 10;
                }
            }
        });
    }
    
    return score;
}

// Find matching interests with semantic scoring - STRICT MODE
function findMatchingInterests(userInput) {
    const input = userInput.toLowerCase().trim();
    const categoryScores = {};
    
    // Calculate scores for each category
    for (const category of Object.keys(interestKeywords)) {
        const score = calculateInterestScore(userInput, category);
        if (score > 0) {
            categoryScores[category] = score;
        }
    }
    
    // Get top categories with HIGH minimum score threshold (much stricter)
    const sortedCategories = Object.entries(categoryScores)
        .filter(([cat, score]) => score >= 15) // Increased threshold - only strong matches
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3) // Reduced to top 3 categories only
        .map(([cat]) => cat);
    
    // DON'T add related categories automatically - only use directly matched categories
    const matchedCategories = new Set(sortedCategories);
    
    // If no matches, return general hobbies
    if (matchedCategories.size === 0) {
        matchedCategories.add("general");
    }
    
    return Array.from(matchedCategories);
}

function getBudgetCategory(budgetAmount) {
    if (budgetAmount === 0) {
        return "free";
    } else if (budgetAmount <= 50) {
        return "low";
    } else if (budgetAmount <= 200) {
        return "medium";
    } else {
        return "high";
    }
}

// Extract minimum and maximum cost from cost strings
function parseCost(costString) {
    if (!costString) return { min: null, max: null };
    
    const cost = costString.toLowerCase().trim();
    
    // Check if it starts with "Free"
    if (cost.startsWith("free")) {
        const afterFree = cost.substring(4).trim();
        
        // If it's just "Free", min and max are both 0
        if (cost === "free" || !afterFree.match(/[\$0-9]/)) {
            return { min: 0, max: 0 };
        }
        
        // Extract cost from "Free-$X" patterns
        const costMatch = afterFree.match(/\$(\d+)/);
        if (costMatch) {
            const maxCost = parseInt(costMatch[1]);
            return { min: 0, max: maxCost };
        }
        
        return { min: 0, max: 0 };
    }
    
    // Extract costs from patterns like "$200-500", "$200", "$50-100/month"
    const rangeMatch = cost.match(/\$(\d+)(?:\s*-\s*\$?(\d+))?/);
    if (rangeMatch) {
        const minCost = parseInt(rangeMatch[1]);
        const maxCost = rangeMatch[2] ? parseInt(rangeMatch[2]) : minCost;
        return { min: minCost, max: maxCost };
    }
    
    // Try to find any dollar amount as fallback
    const singleMatch = cost.match(/\$(\d+)/);
    if (singleMatch) {
        const amount = parseInt(singleMatch[1]);
        return { min: amount, max: amount };
    }
    
    return { min: null, max: null };
}

// Check if a hobby is affordable for $0 budget (must start with "Free" and max cost is reasonable)
function isAffordableForFreeBudget(costString, maxAllowedCost = 30) {
    if (!costString) return false;
    const cost = costString.toLowerCase().trim();
    
    // Must start with "Free"
    if (!cost.startsWith("free")) return false;
    
    // Exact match for "Free" - always allowed
    if (cost === "free") return true;
    
    // Check for "Free-$X" or "Free $X" patterns
    const afterFree = cost.substring(4).trim();
    
    // If there's no dollar amount after "Free", it's free (like "Free to start")
    if (!afterFree.match(/[\$0-9]/)) {
        return true;
    }
    
    // Extract the maximum cost from patterns like "Free-$20", "Free-$50/month", "Free-$30 for X"
    const costMatch = afterFree.match(/\$(\d+)/);
    if (costMatch) {
        const maxCost = parseInt(costMatch[1]);
        // Allow if the maximum cost is within the allowed range
        return maxCost <= maxAllowedCost;
    }
    
    // If we can't parse a cost, assume it's free (like "Free with library card")
    return true;
}

function filterByBudget(hobbies, budgetAmount) {
    const budgetCategory = getBudgetCategory(budgetAmount);
    
    return hobbies.filter(hobby => {
        // Special handling for $0 budget - show hobbies that start with "Free" and have reasonable max cost
        if (budgetCategory === "free") {
            // Allow hobbies that start with "Free" and have max cost up to $30
            return isAffordableForFreeBudget(hobby.cost, 30);
        }
        
        // For other budgets, check actual cost amounts
        const costInfo = parseCost(hobby.cost);
        
        // If we can't parse the cost, be conservative - use budget category but be strict
        if (costInfo.min === null && costInfo.max === null) {
            // Fall back to budget category system, but be strict
            if (budgetCategory === "low") {
                return hobby.budget === "low";
            } else if (budgetCategory === "medium") {
                // For medium budget, only allow low budget hobbies to be safe
                // (since we can't verify the actual cost)
                return hobby.budget === "low";
            } else {
                return true; // high budget can access all hobbies
            }
        }
        
        // Check if the minimum cost fits within the budget
        // Allow if min cost is within budget, or if it's "Free-$X" and max is reasonable
        if (costInfo.min === 0) {
            // It's free or starts with "Free"
            // For non-$0 budgets, allow if max cost is within budget
            if (budgetAmount > 0) {
                return costInfo.max <= budgetAmount;
            }
            return true;
        }
        
        // For costs that start with a dollar amount, check if minimum is within budget
        // STRICT: Only allow if minimum cost is within budget (no buffer)
        // If minimum cost is $200 and budget is $195, filter it out
        return costInfo.min <= budgetAmount;
    });
}

function displayHobbies(hobbies, isAI = false) {
    const resultsSection = document.getElementById("results");
    const hobbyList = document.getElementById("hobbyList");
    
    if (hobbies.length === 0) {
        hobbyList.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
                <p style="font-size: 1.2rem; margin-bottom: 10px;">No hobbies found matching your criteria.</p>
                <p>Try adjusting your interests or budget!</p>
            </div>
        `;
    } else {
        const aiBadge = isAI ? '<span style="background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.7rem; margin-left: 8px; font-weight: 600;">✨ AI</span>' : '';
        hobbyList.innerHTML = hobbies.map((hobby, index) => `
            <div class="hobby-card" style="animation: fadeIn 0.3s ease ${index * 0.05}s both;">
                <h3>${hobby.emoji || '🎯'} ${hobby.name}${aiBadge}</h3>
                <p class="description">${hobby.description}</p>
                ${hobby.budget ? `<span class="budget-badge ${hobby.budget}">${hobby.budget} budget</span>` : ''}
                ${hobby.cost ? `<p class="cost">💰 ${hobby.cost}</p>` : ''}
            </div>
        `).join("");
    }
    
    resultsSection.classList.remove("hidden");
    resultsSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Real AI using free AI service (no API key required)
async function getRealAIRecommendations(interests, budget) {
    const budgetCategory = getBudgetCategory(budget);
    const budgetText = budgetCategory === "low" ? "$0-50" : budgetCategory === "medium" ? "$50-200" : "$200+";
    
    const prompt = `Suggest 10-12 hobbies for someone interested in: ${interests}. Budget: $${budget}/month (${budgetText}). 
Format as JSON: [{"name":"Hobby Name","description":"Brief description","cost":"$X/month","emoji":"🎯","budget":"low/medium/high"}]`;

    try {
        // Use Hugging Face Inference API with CORS proxy
        // Using a public CORS proxy to access the API
        const corsProxy = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = 'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium';
        
        // Try direct access first (some browsers allow it)
        let response;
        try {
            response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputs: prompt,
                    parameters: {
                        max_new_tokens: 400,
                        temperature: 0.7,
                        return_full_text: false
                    }
                })
            });
        } catch (corsError) {
            // If CORS fails, try with proxy (note: may need user activation)
            console.log('Direct access failed, trying alternative method...');
            // Use intelligent matching as fallback since CORS proxy may not work
            return generateIntelligentRecommendations(interests, budget);
        }

        if (response && response.ok) {
            const data = await response.json();
            let text = '';
            
            if (Array.isArray(data) && data[0]?.generated_text) {
                text = data[0].generated_text;
            } else if (data.generated_text) {
                text = data.generated_text;
            } else if (typeof data === 'string') {
                text = data;
            }

            if (text && text.length > 20) {
                const hobbies = parseAIResponse(text, budget, interests);
                if (hobbies.length > 0) {
                    return hobbies;
                }
            }
        }
        
        // Fallback to intelligent matching
        return generateIntelligentRecommendations(interests, budget);
    } catch (error) {
        console.error('AI API Error:', error);
        // Use enhanced intelligent matching as fallback
        return generateIntelligentRecommendations(interests, budget);
    }
}

// Parse AI text response into structured hobbies
function parseAIResponse(text, budget, interests) {
    const budgetCategory = getBudgetCategory(budget);
    const hobbies = [];
    
    // Try to extract JSON first
    try {
        const jsonMatch = text.match(/\[[\s\S]*?\]/);
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed.map(h => ({
                    name: h.name || "AI Suggested Hobby",
                    description: h.description || "A great hobby to explore",
                    cost: h.cost || `Within $${budget}/month`,
                    emoji: h.emoji || "✨",
                    budget: h.budget || budgetCategory
                })).slice(0, 12);
            }
        }
    } catch (e) {
        // Continue to text parsing
    }
    
    // Parse structured text
    const lines = text.split('\n').filter(line => line.trim());
    let currentHobby = null;
    
    lines.forEach(line => {
        line = line.trim();
        if (line.match(/^\d+[\.\)]/) || line.match(/^[-*]/) || line.match(/^[A-Z][^:]+:/)) {
            if (currentHobby && currentHobby.name) hobbies.push(currentHobby);
            currentHobby = { 
                name: "", 
                description: "", 
                cost: `Within $${budget}/month`, 
                emoji: "✨", 
                budget: budgetCategory 
            };
            const nameMatch = line.match(/[:\-]\s*(.+?)(?:,|$)/);
            if (nameMatch) {
                currentHobby.name = nameMatch[1].trim();
            } else {
                currentHobby.name = line.replace(/^\d+[\.\)]\s*/, '').replace(/^[-*]\s*/, '').trim();
            }
        } else if (currentHobby) {
            if (!currentHobby.description && line.length > 10) {
                currentHobby.description = line;
            } else if ((line.includes('$') || line.toLowerCase().includes('cost')) && !currentHobby.cost.includes('$')) {
                currentHobby.cost = line;
            }
        }
    });
    if (currentHobby && currentHobby.name) hobbies.push(currentHobby);
    
    return hobbies.length > 0 ? hobbies.slice(0, 12) : generateIntelligentRecommendations(interests, budget);
}

// Define general/broad hobbies (the more common, accessible ones)
const generalHobbyNames = new Set([
    "Learning Guitar", "Piano Lessons", "Singing", "Sketching", "Watercolor Painting", 
    "Digital Art", "Pottery", "Calligraphy", "Coding", "3D Printing", "Robotics", 
    "Electronics", "Game Development", "Gardening", "Hiking", "Bird Watching", 
    "Photography", "Camping", "Running", "Cycling", "Swimming", "Rock Climbing", 
    "Tennis", "Baking", "Gourmet Cooking", "Fermentation", "Coffee Brewing", 
    "Meal Prep", "Book Club", "Audiobooks", "Writing", "Poetry", "Board Games", 
    "Video Games", "Tabletop RPGs", "Puzzle Solving", "Yoga", "Weightlifting", 
    "Martial Arts", "Dancing", "Calisthenics", "Smartphone Photography", 
    "DSLR Photography", "Street Photography", "Photo Editing", "Knitting", 
    "Woodworking", "Sewing", "Origami", "Jewelry Making", "Journaling", 
    "Meditation", "Language Learning", "Volunteering"
]);

// Fallback intelligent recommendation system
function generateIntelligentRecommendations(interests, budget) {
    const budgetCategory = getBudgetCategory(budget);
    const matchedCategories = findMatchingInterests(interests);
    const input = interests.toLowerCase();
    
    const hobbyScores = [];
    const generalHobbies = [];
    const nicheHobbies = [];
    
    // Calculate category relevance scores
    const categoryScores = {};
    for (const category of Object.keys(interestKeywords)) {
        const score = calculateInterestScore(interests, category);
        if (score > 0) {
            categoryScores[category] = score;
        }
    }
    
    // Extract keywords from input
    const inputWords = input.split(/[,\s]+/).filter(w => w.length > 2);
    
    matchedCategories.forEach(category => {
        if (hobbyDatabase[category]) {
            const categoryRelevance = categoryScores[category] || 0;
            
            hobbyDatabase[category].forEach(hobby => {
                // Check if hobby name or description contains input keywords - REQUIRED
                const hobbyText = (hobby.name + " " + hobby.description).toLowerCase();
                let hasKeywordMatch = false;
                let keywordScore = 0;
                
                // Check for direct keyword matches
                inputWords.forEach(word => {
                    if (hobbyText.includes(word)) {
                        hasKeywordMatch = true;
                        keywordScore += 30; // Very high boost for keyword match
                    }
                });
                
                // Also check niche keywords
                for (const [nicheHobby, nicheWords] of Object.entries(nicheKeywords)) {
                    nicheWords.forEach(nicheWord => {
                        if (input.includes(nicheWord) && hobbyText.includes(nicheWord)) {
                            hasKeywordMatch = true;
                            keywordScore += 40; // Even higher for niche keyword match
                        }
                    });
                }
                
                // ONLY include hobbies that have keyword matches OR are from the primary category with high relevance
                const isPrimaryCategory = category === matchedCategories[0];
                const isRelevant = hasKeywordMatch || (isPrimaryCategory && categoryRelevance >= 20);
                
                if (!isRelevant) {
                    return; // Skip this hobby - not relevant enough
                }
                
                let score = keywordScore; // Start with keyword score
                
                // Boost score based on category relevance
                score += Math.min(categoryRelevance, 25);
                
                if (budgetCategory === hobby.budget) {
                    score += 15;
                } else if (budgetCategory === "high" && (hobby.budget === "low" || hobby.budget === "medium")) {
                    score += 10;
                } else if (budgetCategory === "medium" && hobby.budget === "low") {
                    score += 5;
                }
                
                if (isPrimaryCategory) {
                    score += 10;
                }
                
                const hobbyWithScore = { ...hobby, score, category };
                hobbyScores.push(hobbyWithScore);
                
                // Separate into general and niche
                if (generalHobbyNames.has(hobby.name)) {
                    generalHobbies.push(hobbyWithScore);
                } else {
                    nicheHobbies.push(hobbyWithScore);
                }
            });
        }
    });
    
    // Sort both lists
    generalHobbies.sort((a, b) => b.score - a.score);
    nicheHobbies.sort((a, b) => b.score - a.score);
    
    // Filter by budget
    const filteredGeneral = filterByBudget(generalHobbies, budget);
    const filteredNiche = filterByBudget(nicheHobbies, budget);
    
    // Remove duplicates
    const uniqueGeneral = [];
    const uniqueNiche = [];
    const seenGeneral = new Set();
    const seenNiche = new Set();
    
    filteredGeneral.forEach(hobby => {
        if (!seenGeneral.has(hobby.name)) {
            seenGeneral.add(hobby.name);
            uniqueGeneral.push(hobby);
        }
    });
    
    filteredNiche.forEach(hobby => {
        if (!seenNiche.has(hobby.name)) {
            seenNiche.add(hobby.name);
            uniqueNiche.push(hobby);
        }
    });
    
    // Filter out hobbies with very low scores (not relevant enough)
    const minScore = 25; // Minimum score threshold
    const relevantGeneral = uniqueGeneral.filter(h => h.score >= minScore);
    const relevantNiche = uniqueNiche.filter(h => h.score >= minScore);
    
    // Mix general and niche hobbies, prioritizing by score
    const finalHobbies = [];
    const maxResults = 12;
    
    // Sort all relevant hobbies by score (best first)
    const allRelevant = [...relevantGeneral, ...relevantNiche].sort((a, b) => b.score - a.score);
    
    // Take top hobbies regardless of general/niche - just the most relevant ones
    for (let i = 0; i < Math.min(maxResults, allRelevant.length); i++) {
        finalHobbies.push(allRelevant[i]);
    }
    
    // If we have very few results, we can be slightly more lenient but still require relevance
    if (finalHobbies.length < 5) {
        const allHobbies = [...uniqueGeneral, ...uniqueNiche].sort((a, b) => b.score - a.score);
        const finalNames = new Set(finalHobbies.map(h => h.name));
        const relaxedMinScore = 15; // Slightly lower threshold if we need more results
        
        for (const hobby of allHobbies) {
            if (finalHobbies.length >= maxResults) break;
            if (!finalNames.has(hobby.name) && hobby.score >= relaxedMinScore) {
                finalHobbies.push(hobby);
                finalNames.add(hobby.name);
            }
        }
    }
    
    return finalHobbies.map(hobby => ({
        ...hobby,
        description: personalizeDescription(hobby, interests, budget),
        isAI: true
    }));
}

// Personalize hobby descriptions
function personalizeDescription(hobby, interests, budget) {
    const interestWords = interests.toLowerCase().split(/[,\s]+]/).filter(w => w.length > 2);
    const budgetCategory = getBudgetCategory(budget);
    
    let description = hobby.description;
    
    if (budgetCategory === "low" && hobby.budget === "low") {
        description += " Perfect for your budget!";
    } else if (budgetCategory === "medium" && hobby.budget === "low") {
        description += " Great value option.";
    } else if (budgetCategory === "high" && hobby.budget === "high") {
        description += " Premium experience within your budget.";
    }
    
    return description;
}

function updateBudgetDisplay(value) {
    const budgetValue = parseInt(value);
    document.getElementById("budgetValue").textContent = budgetValue;
    document.getElementById("budgetSlider").value = budgetValue;
    document.getElementById("budgetInput").value = budgetValue;
}

async function findHobbies() {
    const interestsInput = document.getElementById("interests").value.trim();
    const budgetAmount = parseInt(document.getElementById("budgetInput").value) || parseInt(document.getElementById("budgetSlider").value);
    
    if (!interestsInput) {
        alert("Please enter your interests!");
        return;
    }
    
    if (isNaN(budgetAmount) || budgetAmount < 0) {
        alert("Please enter a valid budget amount!");
        return;
    }
    
    // Show loading state
    const findButton = document.getElementById("findHobbies");
    const buttonText = document.getElementById("buttonText");
    const loadingSpinner = document.getElementById("loadingSpinner");
    findButton.disabled = true;
    buttonText.textContent = "🤖 AI is thinking...";
    loadingSpinner.classList.remove("hidden");
    
    try {
        // Use real AI (Hugging Face API - free, no key required)
        const hobbies = await getRealAIRecommendations(interestsInput, budgetAmount);
        
        displayHobbies(hobbies, true);
    } catch (error) {
        console.error("Error finding hobbies:", error);
        alert("AI service temporarily unavailable. Using intelligent matching instead.");
        // Fallback to intelligent matching
        const hobbies = generateIntelligentRecommendations(interestsInput, budgetAmount);
        displayHobbies(hobbies, true);
    } finally {
        // Reset button state
        findButton.disabled = false;
        buttonText.textContent = "🤖 Get AI Recommendations";
        loadingSpinner.classList.add("hidden");
    }
}

// Event listeners
document.getElementById("findHobbies").addEventListener("click", findHobbies);

document.getElementById("interests").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        findHobbies();
    }
});

// Budget slider and input synchronization
const budgetSlider = document.getElementById("budgetSlider");
const budgetInput = document.getElementById("budgetInput");

budgetSlider.addEventListener("input", (e) => {
    const value = parseInt(e.target.value);
    updateBudgetDisplay(value);
});

budgetInput.addEventListener("input", (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 0) {
        value = 0;
    } else if (value > 500) {
        value = 500;
    }
    updateBudgetDisplay(value);
});

budgetInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        findHobbies();
    }
});

// Initialize budget display
updateBudgetDisplay(125);

