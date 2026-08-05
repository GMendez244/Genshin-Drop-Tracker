const DAY = {
    "SUN" : 0,
    "MON" : 1,
    "TUE" : 2,
    "WED" : 3,
    "THUR": 4,
    "FRI" : 5,
    "SAT" : 6,
};

const PRIORITY = {
    "LOW": 3,
    "NORMAL": 2,
    "HIGH": 1
};

const FARM_ID = {
    "daily" : 0,
    "dailyResin" : 1,
    "dailyResinLowPriority" : 2,
    "onceAWeek" : 3,
    "localSpecialtyFarming" : 4,
    "groupA": 5,
    "groupB": 6,
    "groupC": 7
};


const FarmSchedule = [
    {
        "id": FARM_ID.daily,
        "text": "Daily",
        "availableDays": [DAY.SUN, DAY.MON, DAY.TUE, DAY.WED, DAY.THUR, DAY.FRI, DAY.SAT],
        "requiresResin": false,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": FARM_ID.dailyResin,
        "text": "Daily-Resin",
        "availableDays": [DAY.SUN, DAY.MON, DAY.TUE, DAY.WED, DAY.THUR, DAY.FRI, DAY.SAT],
        "requiresResin": true,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": FARM_ID.dailyResinLowPriority,
        "text": "Daily-Resin (Low Priority)",
        "availableDays": [DAY.SUN, DAY.MON, DAY.TUE, DAY.WED, DAY.THUR, DAY.FRI, DAY.SAT],
        "requiresResin": true,
        "priority": PRIORITY.LOW
    },
    {
        "id": FARM_ID.onceAWeek,
        "text": "Once a week",
        "availableDays": [DAY.SUN],
        "requiresResin": true,
        "priority": PRIORITY.HIGH
    },
    {
        "id": FARM_ID.localSpecialtyFarming,
        "text": "Local Speciality Farming (Monday, Wed, Fri)",
        "availableDays": [DAY.MON, DAY.WED, DAY.FRI],
        "requiresResin": false,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": FARM_ID.groupA,
        "text": "Group A - Resin (Monday, Thursday, Sunday)",
        "availableDays": [DAY.MON, DAY.THUR, DAY.SUN],
        "requiresResin": true,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": FARM_ID.groupB,
        "text": "Group B - Resin (Tuesday, Friday, Sunday)",
        "availableDays": [DAY.TUE, DAY.FRI, DAY.SUN],
        "requiresResin": true,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": FARM_ID.groupC,
        "text": "Group C - Resin (Wednesday, Saturday, Sunday)",
        "availableDays": [DAY.WED, DAY.SAT, DAY.SUN],
        "requiresResin": true,
        "priority": PRIORITY.NORMAL
    }
];



const Tier = {
    "undefined": -1,
    "gray": 0,
    "green": 1,
    "blue": 2,
    "purple": 3,
    "gold": 4
};


const ItemFamily = [
    {
      "name": "Ungrouped",
      "id": -1
    },
    {
      "name": "Long Night Flint",
      "id": 0
    },
    {
      "name": "Pure Sacred Dewdrop",
      "id": 1
    },
    {
      "name": "Oasis Garden",
      "id": 2
    },
    {
      "name": "Narukami's",
      "id": 3
    },
    {
      "name": "Mist Veiled",
      "id": 4
    },
    {
      "name": "Boreal Wolf's",
      "id": 5
    },
    {
      "name": "Artful Device",
      "id": 6
    },
    {
      "name": "Far North Scions",
      "id": 7
    },
    {
      "name": "Ancient Chord",
      "id": 8
    },
    {
      "name": "Goblet Of The Pristine Sea",
      "id": 9
    },
    {
      "name": "Talisman Of The Forest Dew",
      "id": 10
    },
    {
      "name": "Scorching Might",
      "id": 11
    },
    {
      "name": "Distant Sea",
      "id": 12
    },
    {
      "name": "Mask",
      "id": 13
    },
    {
      "name": "Guyun",
      "id": 14
    },
    {
      "name": "Aerosiderite",
      "id": 15
    },
    {
      "name": "Decarabian's",
      "id": 16
    },
    {
      "name": "Dandelion Gladiator",
      "id": 17
    },
    {
      "name": "Moonlight",
      "id": 18
    },
    {
      "name": "Elysium",
      "id": 19
    },
    {
      "name": "Vagrancy",
      "id": 20
    },
    {
      "name": "Transience",
      "id": 21
    },
    {
      "name": "Elegance",
      "id": 22
    },
    {
      "name": "Light",
      "id": 23
    },
    {
      "name": "Contention",
      "id": 24
    },
    {
      "name": "Kindling",
      "id": 25
    },
    {
      "name": "Conflict",
      "id": 26
    },
    {
      "name": "Equity",
      "id": 27
    },
    {
      "name": "Justice",
      "id": 28
    },
    {
      "name": "Order",
      "id": 29
    },
    {
      "name": "Admonition",
      "id": 30
    },
    {
      "name": "Ingenuity",
      "id": 31
    },
    {
      "name": "Praxis",
      "id": 32
    },
    {
      "name": "Prosperity",
      "id": 33
    },
    {
      "name": "Diligence",
      "id": 34
    },
    {
      "name": "Gold",
      "id": 35
    },
    {
      "name": "Freedom",
      "id": 36
    },
    {
      "name": "Resistance",
      "id": 37
    },
    {
      "name": "Ballad",
      "id": 38
    },
    {
      "name": "Character EXP Material",
      "id": 39
    },
    {
      "name": "False Moon Institute",
      "id": 40
    },
    {
      "name": "End of the Oneiric Euthymia",
      "id": 41
    },
    {
      "name": "Binding Field of Universal Nirvana",
      "id": 42
    },
    {
      "name": "Unresolved Chess Game",
      "id": 43
    },
    {
      "name": "Stone Stele Records",
      "id": 44
    },
    {
      "name": "Scattered Ruins",
      "id": 45
    },
    {
      "name": "Shadow of Another World",
      "id": 46
    },
    {
      "name": "The Realm of Beginnings",
      "id": 47
    },
    {
      "name": "Joururi Workshop",
      "id": 48
    },
    {
      "name": "Narukami Island: Tenshukaku",
      "id": 49
    },
    {
      "name": "Beneath the Dragon-Queller",
      "id": 50
    },
    {
      "name": "Enter the Golden House",
      "id": 51
    },
    {
      "name": "Confront Stormterror",
      "id": 52
    },
    {
      "name": "Watcher: Fallen Vigil",
      "id": 53
    },
    {
      "name": "Radiant Moongecko",
      "id": 54
    },
    {
      "name": "Lord of the Hidden Depths: Whisperer of Nightmares",
      "id": 55
    },
    {
      "name": "Super-Heavy Landrover: Mechanized Fortress",
      "id": 56
    },
    {
      "name": "Frostnight Herra",
      "id": 57
    },
    {
      "name": "Radiant Moonfly",
      "id": 58
    },
    {
      "name": "Knuckle Duckle",
      "id": 59
    },
    {
      "name": "Secret Source Automaton: Overseer Device",
      "id": 60
    },
    {
      "name": "Lava Dragon Statue",
      "id": 61
    },
    {
      "name": "Wayward Hermetic Spiritspeaker",
      "id": 62
    },
    {
      "name": "Tenebrous Papilla",
      "id": 63
    },
    {
      "name": "Secret Source Automaton: Configuration Device",
      "id": 64
    },
    {
      "name": "Goldflame Qucusaur Tyrant",
      "id": 65
    },
    {
      "name": "Gluttonous Yumkasaur Mountain King",
      "id": 66
    },
    {
      "name": "Cloudseam Scale",
      "id": 67
    },
    {
      "name": "Hydro Tulpa",
      "id": 68
    },
    {
      "name": "Millenial Pearl Seahorse",
      "id": 69
    },
    {
      "name": "Experimental Field Generator",
      "id": 70
    },
    {
      "name": "Emperor of Fire and Iron",
      "id": 71
    },
    {
      "name": "Icewind Suite",
      "id": 72
    },
    {
      "name": "Iniquitous Baptist",
      "id": 73
    },
    {
      "name": "Setekh Wenut",
      "id": 74
    },
    {
      "name": "Dendro Hypostasis",
      "id": 75
    },
    {
      "name": "Algorithm of Semi-Intransient Matrix of Overseer Network",
      "id": 76
    },
    {
      "name": "Aeonblight Drake",
      "id": 77
    },
    {
      "name": "Jadeplume Terrorshroom",
      "id": 78
    },
    {
      "name": "Electro Regisvine",
      "id": 79
    },
    {
      "name": "Ruin Serpent",
      "id": 80
    },
    {
      "name": "Bathysmal Vishap Herd",
      "id": 81
    },
    {
      "name": "Golden Wolflord",
      "id": 82
    },
    {
      "name": "Thunder Manifestation",
      "id": 83
    },
    {
      "name": "Hydro Hypostasis",
      "id": 84
    },
    {
      "name": "Perpetual Mechanical Array",
      "id": 85
    },
    {
      "name": "Pyro Hypostasis",
      "id": 86
    },
    {
      "name": "Maguu Kenki",
      "id": 87
    },
    {
      "name": "Cryo Hypostasis",
      "id": 88
    },
    {
      "name": "Primo Geovishap",
      "id": 89
    },
    {
      "name": "Pyro Regisvine",
      "id": 90
    },
    {
      "name": "Oceanid",
      "id": 91
    },
    {
      "name": "Geo Hypostasis",
      "id": 92
    },
    {
      "name": " Cryo Regisvine",
      "id": 93
    },
    {
      "name": "Anemo Hypostasis",
      "id": 94
    },
    {
      "name": "Electro Hypostasis",
      "id": 95
    },
    {
      "name": "Lunar Iron",
      "id": 96
    },
    {
      "name": "Flaming Hilt",
      "id": 97
    },
    {
      "name": "Deep Shadow",
      "id": 98
    },
    {
      "name": "Radiant Beast",
      "id": 99
    },
    {
      "name": "Mistshroud",
      "id": 100
    },
    {
      "name": "Frostnight's",
      "id": 101
    },
    {
      "name": "Furnace Shell Mountain Weasel",
      "id": 102
    },
    {
      "name": "Tenebrous Mimiflora",
      "id": 103
    },
    {
      "name": "Secret Source Automaton: Hunter-Seeker",
      "id": 104
    },
    {
      "name": "Avatars of Lava",
      "id": 105
    },
    {
      "name": "Wayob Manifestations",
      "id": 106
    },
    {
      "name": "Praetorian Golem",
      "id": 107
    },
    {
      "name": "Xuanwen Beast",
      "id": 108
    },
    {
      "name": "Fatui Operative",
      "id": 109
    },
    {
      "name": "Breacher Primus",
      "id": 110
    },
    {
      "name": "Tainted Hydro Phantasm",
      "id": 111
    },
    {
      "name": "Hilichurl Rogue",
      "id": 112
    },
    {
      "name": "Consecrated Beast",
      "id": 113
    },
    {
      "name": "Primal Construct",
      "id": 114
    },
    {
      "name": "Ruin Drake",
      "id": 115
    },
    {
      "name": "The Black Serpents",
      "id": 116
    },
    {
      "name": "Bathysmal Vishap",
      "id": 117
    },
    {
      "name": "Wolves of the Rift",
      "id": 118
    },
    {
      "name": "Ruin Sentinels",
      "id": 119
    },
    {
      "name": "Fatui Snezhnayan Maiden",
      "id": 120
    },
    {
      "name": "Hilichurl Chieftain",
      "id": 121
    },
    {
      "name": "Hilichurl",
      "id": 122
    },
    {
      "name": "Ruin Hunter",
      "id": 123
    },
    {
      "name": "Sacrificial Knife",
      "id": 124
    },
    {
      "name": "Insignia",
      "id": 125
    },
    {
      "name": "Ley Line",
      "id": 126
    },
    {
      "name": "Mist Grass",
      "id": 127
    }
]



const predefinedItems = [
    {
      "itemName": "Ember of Long Night Flint",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 0,
      "priority": 2
    },
    {
      "itemName": "Afterglow of Long Night Flint",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 0,
      "priority": 2
    },
    {
      "itemName": "Flare of Long Night Flint",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 0,
      "priority": 2
    },
    {
      "itemName": "Blaze of Long Night Flint",
      "farmScheduleID": 6,
      "tier": 4,
      "itemFamily": 0,
      "priority": 2
    },
    {
      "itemName": "Dross of Pure Sacred Dewdrop",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 1,
      "priority": 2
    },
    {
      "itemName": "Sublimation of Pure Sacred Dewdrop",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 1,
      "priority": 2
    },
    {
      "itemName": "Spring of Pure Sacred Dewdrop",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 1,
      "priority": 2
    },
    {
      "itemName": "Essence of Pure Sacred Dewdrop",
      "farmScheduleID": 6,
      "tier": 4,
      "itemFamily": 1,
      "priority": 2
    },
    {
      "itemName": "Oasis Garden's Reminiscence",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 2,
      "priority": 2
    },
    {
      "itemName": "Oasis Garden's Kindness",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 2,
      "priority": 2
    },
    {
      "itemName": "Oasis Garden's Mourning",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 2,
      "priority": 2
    },
    {
      "itemName": "Oasis Garden's Truth",
      "farmScheduleID": 6,
      "tier": 4,
      "itemFamily": 2,
      "priority": 2
    },
    {
      "itemName": "Narukami's Wisdom",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 3,
      "priority": 2
    },
    {
      "itemName": "Narukami's Joy",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 3,
      "priority": 2
    },
    {
      "itemName": "Narukami's Affection",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 3,
      "priority": 2
    },
    {
      "itemName": "Narukami's Valor",
      "farmScheduleID": 6,
      "tier": 4,
      "itemFamily": 3,
      "priority": 2
    },
    {
      "itemName": "Mist Veiled Lead Elixir",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 4,
      "priority": 2
    },
    {
      "itemName": "Mist Veiled Mercury Elixir",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 4,
      "priority": 2
    },
    {
      "itemName": "Mist Veiled Gold Elixir",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 4,
      "priority": 2
    },
    {
      "itemName": "Mist Veiled Primo Elixir",
      "farmScheduleID": 6,
      "tier": 4,
      "itemFamily": 4,
      "priority": 2
    },
    {
      "itemName": "Boreal Wolf's Milk Tooth",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 5,
      "priority": 2
    },
    {
      "itemName": "Boreal Wolf's Cracked Tooth",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 5,
      "priority": 2
    },
    {
      "itemName": "Boreal Wolf's Broken Fang",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 5,
      "priority": 2
    },
    {
      "itemName": "Boreal Wolf's Nostalgia",
      "farmScheduleID": 6,
      "tier": 4,
      "itemFamily": 5,
      "priority": 2
    },
    {
      "itemName": "Artful Device Fragment",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 6,
      "priority": 2
    },
    {
      "itemName": "Artful Device Replica",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 6,
      "priority": 2
    },
    {
      "itemName": "Artful Device Inheritance",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 6,
      "priority": 2
    },
    {
      "itemName": "Artful Device Wish",
      "farmScheduleID": 5,
      "tier": 4,
      "itemFamily": 6,
      "priority": 2
    },
    {
      "itemName": "Sundered Glory of the Far-North Scions",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 7,
      "priority": 2
    },
    {
      "itemName": "Unyielding Delusion of the Far-North Scions",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 7,
      "priority": 2
    },
    {
      "itemName": "Oblation of the Far-North Scions",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 7,
      "priority": 2
    },
    {
      "itemName": "Aureate Radiance of the Far-North Scions",
      "farmScheduleID": 7,
      "tier": 4,
      "itemFamily": 7,
      "priority": 2
    },
    {
      "itemName": "Fragment of an Ancient Chord",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 8,
      "priority": 2
    },
    {
      "itemName": "Chapter of an Ancient Chord",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 8,
      "priority": 2
    },
    {
      "itemName": "Movement of an Ancient Chord",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 8,
      "priority": 2
    },
    {
      "itemName": "Echo of an Ancient Chord",
      "farmScheduleID": 5,
      "tier": 4,
      "itemFamily": 8,
      "priority": 2
    },
    {
      "itemName": "Broken Goblet of the Pristine Sea",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 9,
      "priority": 2
    },
    {
      "itemName": "Wine Goblet of the Pristine Sea",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 9,
      "priority": 2
    },
    {
      "itemName": "Silver Goblet of the Pristine Sea",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 9,
      "priority": 2
    },
    {
      "itemName": "Golden Goblet of the Pristine Sea",
      "farmScheduleID": 7,
      "tier": 4,
      "itemFamily": 9,
      "priority": 2
    },
    {
      "itemName": "Copper Talisman of the Forest Dew",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 10,
      "priority": 2
    },
    {
      "itemName": "Iron Talisman of the Forest Dew",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 10,
      "priority": 2
    },
    {
      "itemName": "Silver Talisman of the Forest Dew",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 10,
      "priority": 2
    },
    {
      "itemName": "Golden Talisman of the Forest Dew",
      "farmScheduleID": 5,
      "tier": 4,
      "itemFamily": 10,
      "priority": 2
    },
    {
      "itemName": "Echo of Scorching Might",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 11,
      "priority": 2
    },
    {
      "itemName": "Remnant Glow of Scorching Might",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 11,
      "priority": 2
    },
    {
      "itemName": "Dream of Scorching Might",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 11,
      "priority": 2
    },
    {
      "itemName": "Olden Days of Scorching Might",
      "farmScheduleID": 7,
      "tier": 4,
      "itemFamily": 11,
      "priority": 2
    },
    {
      "itemName": "Coral Branch of Distant Sea",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 12,
      "priority": 2
    },
    {
      "itemName": "Jeweled Branch of a Distant Sea",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 12,
      "priority": 2
    },
    {
      "itemName": "Jade Branch of a Distant Sea",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 12,
      "priority": 2
    },
    {
      "itemName": "Golden Branch of a Distant Sea",
      "farmScheduleID": 5,
      "tier": 4,
      "itemFamily": 12,
      "priority": 2
    },
    {
      "itemName": "Mask of the Wicked Lieutenant",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 13,
      "priority": 2
    },
    {
      "itemName": "Mask of the Tiger's Bite",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 13,
      "priority": 2
    },
    {
      "itemName": "Mask of the One-Horned",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 13,
      "priority": 2
    },
    {
      "itemName": "Mask of the Kijin",
      "farmScheduleID": 7,
      "tier": 4,
      "itemFamily": 13,
      "priority": 2
    },
    {
      "itemName": "Luminous Sands from Guyun",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 14,
      "priority": 2
    },
    {
      "itemName": "Lustrous Stone from Guyun",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 14,
      "priority": 2
    },
    {
      "itemName": "Relic from Guyun",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 14,
      "priority": 2
    },
    {
      "itemName": "Divine Body from Guyun",
      "farmScheduleID": 5,
      "tier": 4,
      "itemFamily": 14,
      "priority": 2
    },
    {
      "itemName": "Grain of Aerosiderite",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 15,
      "priority": 2
    },
    {
      "itemName": "Piece of Aerosiderite",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 15,
      "priority": 2
    },
    {
      "itemName": "Bit of Aerosiderite",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 15,
      "priority": 2
    },
    {
      "itemName": "Chunk of Aerosiderite",
      "farmScheduleID": 7,
      "tier": 4,
      "itemFamily": 15,
      "priority": 2
    },
    {
      "itemName": "Tile of Decarabian's Tower",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 16,
      "priority": 2
    },
    {
      "itemName": "Debris of Decarabian's City",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 16,
      "priority": 2
    },
    {
      "itemName": "Fragment of Decarabian's Epic",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 16,
      "priority": 2
    },
    {
      "itemName": "Scattered Piece of Decarabian's Dream",
      "farmScheduleID": 5,
      "tier": 4,
      "itemFamily": 16,
      "priority": 2
    },
    {
      "itemName": "Fetters of the Dandelion Gladiator",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 17,
      "priority": 2
    },
    {
      "itemName": "Chains of the Dandelion Gladiator",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 17,
      "priority": 2
    },
    {
      "itemName": "Shackles of the Dandelion Gladiator",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 17,
      "priority": 2
    },
    {
      "itemName": "Dream of the Dandelion Gladiator",
      "farmScheduleID": 7,
      "tier": 4,
      "itemFamily": 17,
      "priority": 2
    },
    {
      "itemName": "Teachings of Moonlight",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 18,
      "priority": 2
    },
    {
      "itemName": "Guide to Moonlight",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 18,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Moonlight",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 18,
      "priority": 2
    },
    {
      "itemName": "Teachings of Elysium",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 19,
      "priority": 2
    },
    {
      "itemName": "Guide to Elysium",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 19,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Elysium",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 19,
      "priority": 2
    },
    {
      "itemName": "Teachings of Vagrancy",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 20,
      "priority": 2
    },
    {
      "itemName": "Guide to Vagrancy",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 20,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Vagrancy",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 20,
      "priority": 2
    },
    {
      "itemName": "Teachings of Transience",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 21,
      "priority": 2
    },
    {
      "itemName": "Guide to Transience",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 21,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Transience",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 21,
      "priority": 2
    },
    {
      "itemName": "Teachings of Elegance",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 22,
      "priority": 2
    },
    {
      "itemName": "Guide to Elegance",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 22,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Elegance",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 22,
      "priority": 2
    },
    {
      "itemName": "Teachings of Light",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 23,
      "priority": 2
    },
    {
      "itemName": "Guide to Light",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 23,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Light",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 23,
      "priority": 2
    },
    {
      "itemName": "Teachings of Contention",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 24,
      "priority": 2
    },
    {
      "itemName": "Guide to Contention",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 24,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Contention",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 24,
      "priority": 2
    },
    {
      "itemName": "Teachings of Kindling",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 25,
      "priority": 2
    },
    {
      "itemName": "Guide to Kindling",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 25,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Kindling",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 25,
      "priority": 2
    },
    {
      "itemName": "Teachings of Conflict",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 26,
      "priority": 2
    },
    {
      "itemName": "Guide to Conflict",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 26,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Conflict",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 26,
      "priority": 2
    },
    {
      "itemName": "Teachings of Equity",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 27,
      "priority": 2
    },
    {
      "itemName": "Guide to Equity",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 27,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Equity",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 27,
      "priority": 2
    },
    {
      "itemName": "Teachings of Justice",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 28,
      "priority": 2
    },
    {
      "itemName": "Guide to Justice",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 28,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Justice",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 28,
      "priority": 2
    },
    {
      "itemName": "Teachings of Order",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 29,
      "priority": 2
    },
    {
      "itemName": "Guide to Order",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 29,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Order",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 29,
      "priority": 2
    },
    {
      "itemName": "Teachings of Admonition",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 30,
      "priority": 2
    },
    {
      "itemName": "Guide to Admonition",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 30,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Admonition",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 30,
      "priority": 2
    },
    {
      "itemName": "Teachings of Ingenuity",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 31,
      "priority": 2
    },
    {
      "itemName": "Guide to Ingenuity",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 31,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Ingenuity",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 31,
      "priority": 2
    },
    {
      "itemName": "Teachings of Praxis",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 32,
      "priority": 2
    },
    {
      "itemName": "Guide to Praxis",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 32,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Praxis",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 32,
      "priority": 2
    },
    {
      "itemName": "Teachings of Prosperity",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 33,
      "priority": 2
    },
    {
      "itemName": "Guide to Prosperity",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 33,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Prosperity",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 33,
      "priority": 2
    },
    {
      "itemName": "Teachings of Diligence",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 34,
      "priority": 2
    },
    {
      "itemName": "Guide to Diligence",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 34,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Diligence",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 34,
      "priority": 2
    },
    {
      "itemName": "Teachings of Gold",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 35,
      "priority": 2
    },
    {
      "itemName": "Guide to Gold",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 35,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Gold",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 35,
      "priority": 2
    },
    {
      "itemName": "Teachings of Freedom",
      "farmScheduleID": 5,
      "tier": 1,
      "itemFamily": 36,
      "priority": 2
    },
    {
      "itemName": "Guide to Freedom",
      "farmScheduleID": 5,
      "tier": 2,
      "itemFamily": 36,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Freedom",
      "farmScheduleID": 5,
      "tier": 3,
      "itemFamily": 36,
      "priority": 2
    },
    {
      "itemName": "Teachings of Resistance",
      "farmScheduleID": 6,
      "tier": 1,
      "itemFamily": 37,
      "priority": 2
    },
    {
      "itemName": "Guide to Resistance",
      "farmScheduleID": 6,
      "tier": 2,
      "itemFamily": 37,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Resistance",
      "farmScheduleID": 6,
      "tier": 3,
      "itemFamily": 37,
      "priority": 2
    },
    {
      "itemName": "Teachings of Ballad",
      "farmScheduleID": 7,
      "tier": 1,
      "itemFamily": 38,
      "priority": 2
    },
    {
      "itemName": "Guide to Ballad",
      "farmScheduleID": 7,
      "tier": 2,
      "itemFamily": 38,
      "priority": 2
    },
    {
      "itemName": "Philosophies of Ballad",
      "farmScheduleID": 7,
      "tier": 3,
      "itemFamily": 38,
      "priority": 2
    },
    {
      "itemName": "Wanderer's Advice",
      "farmScheduleID": 2,
      "tier": 1,
      "itemFamily": 39,
      "priority": 3
    },
    {
      "itemName": "Adventurer's Experience",
      "farmScheduleID": 2,
      "tier": 2,
      "itemFamily": 39,
      "priority": 3
    },
    {
      "itemName": "Hero's Wit",
      "farmScheduleID": 2,
      "tier": 3,
      "itemFamily": 39,
      "priority": 3
    },
    {
      "itemName": "Mask of the Virtuous Doctor",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 40,
      "priority": 1
    },
    {
      "itemName": "Madman's Restraint",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 40,
      "priority": 1
    },
    {
      "itemName": "Elixir of the Heretic",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 40,
      "priority": 1
    },
    {
      "itemName": "Mudra of the Malefic General",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 41,
      "priority": 1
    },
    {
      "itemName": "Tears of the Calamitous God",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 41,
      "priority": 1
    },
    {
      "itemName": "The Meaning of Aeons",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 41,
      "priority": 1
    },
    {
      "itemName": "Counterfeit Resin",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 42,
      "priority": 1
    },
    {
      "itemName": "Twist Withered Branch",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 42,
      "priority": 1
    },
    {
      "itemName": "Profaned Sprout",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 42,
      "priority": 1
    },
    {
      "itemName": "Ascended Sample: Knight",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 43,
      "priority": 1
    },
    {
      "itemName": "Ascended Sample: Rook",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 43,
      "priority": 1
    },
    {
      "itemName": "Ascended Sample: Queen",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 43,
      "priority": 1
    },
    {
      "itemName": "Eroded Horn",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 44,
      "priority": 1
    },
    {
      "itemName": "Eroded Sunfire",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 44,
      "priority": 1
    },
    {
      "itemName": "Eroded Scale-Feather",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 44,
      "priority": 1
    },
    {
      "itemName": "Fading Candle",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 45,
      "priority": 1
    },
    {
      "itemName": "Silken Feather",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 45,
      "priority": 1
    },
    {
      "itemName": "Denial and Judgment",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 45,
      "priority": 1
    },
    {
      "itemName": "Lightless Silk String",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 46,
      "priority": 1
    },
    {
      "itemName": "Lightless Eye of the Maelstrom",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 46,
      "priority": 1
    },
    {
      "itemName": "Lightless Mass",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 46,
      "priority": 1
    },
    {
      "itemName": "Worldspan Fern",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 47,
      "priority": 1
    },
    {
      "itemName": "Primordial Greenbloom",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 47,
      "priority": 1
    },
    {
      "itemName": "Everamber",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 47,
      "priority": 1
    },
    {
      "itemName": "Puppet Strings",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 48,
      "priority": 1
    },
    {
      "itemName": "Mirror of Mushin",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 48,
      "priority": 1
    },
    {
      "itemName": "Daka's Bell",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 48,
      "priority": 1
    },
    {
      "itemName": "Molten Moment",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 49,
      "priority": 1
    },
    {
      "itemName": "Hellfire Butterfly",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 49,
      "priority": 1
    },
    {
      "itemName": "Ashen Heart",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 49,
      "priority": 1
    },
    {
      "itemName": "Dragon Lord's Crown",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 50,
      "priority": 1
    },
    {
      "itemName": "Bloodjade Branch",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 50,
      "priority": 1
    },
    {
      "itemName": "Gilded Scale",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 50,
      "priority": 1
    },
    {
      "itemName": "Tusk of Monoceros Caeli",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 51,
      "priority": 1
    },
    {
      "itemName": "Shard of a Foul Legacy",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 51,
      "priority": 1
    },
    {
      "itemName": "Shadow of the Warrior",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 51,
      "priority": 1
    },
    {
      "itemName": "Dvalin's Plume",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 52,
      "priority": 1
    },
    {
      "itemName": "Dvalin's Claw",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 52,
      "priority": 1
    },
    {
      "itemName": "Dvalin's Sigh",
      "farmScheduleID": 3,
      "tier": 4,
      "itemFamily": 52,
      "priority": 1
    },
    {
      "itemName": "Plume of the Fallen Watcher",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 53,
      "priority": 2
    },
    {
      "itemName": "Prismatic Severed Tail",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 54,
      "priority": 2
    },
    {
      "itemName": "Remnant of the Dreadwing",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 55,
      "priority": 2
    },
    {
      "itemName": "Cyclic Military Kuuvahki Core",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 56,
      "priority": 2
    },
    {
      "itemName": "Radiant Antler",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 57,
      "priority": 2
    },
    {
      "itemName": "Lightbearing Scale-Feather",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 58,
      "priority": 2
    },
    {
      "itemName": "Precision Kuuvahki Stamping Die",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 59,
      "priority": 2
    },
    {
      "itemName": "Secret Source Airflow Accumulator",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 60,
      "priority": 2
    },
    {
      "itemName": "Sparkless Statue Core",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 61,
      "priority": 2
    },
    {
      "itemName": "Talisman of the Enigmatic Land",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 62,
      "priority": 2
    },
    {
      "itemName": "Ensnaring Gaze",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 63,
      "priority": 2
    },
    {
      "itemName": "Gold-Inscribed Secret Source Core",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 64,
      "priority": 2
    },
    {
      "itemName": "Mark of the Binding Blessing",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 65,
      "priority": 2
    },
    {
      "itemName": "Overripe Flamegranate",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 66,
      "priority": 2
    },
    {
      "itemName": "Solitary Suanni",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 67,
      "priority": 2
    },
    {
      "itemName": "Water That Failed to Transcend",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 68,
      "priority": 2
    },
    {
      "itemName": "Fontemer Unihorn",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 69,
      "priority": 2
    },
    {
      "itemName": "Tourbillon Device",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 70,
      "priority": 2
    },
    {
      "itemName": "Emperor's Resolution",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 71,
      "priority": 2
    },
    {
      "itemName": "Artificed Spare Clockwork Component - Coppelia",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 72,
      "priority": 2
    },
    {
      "itemName": "Artificed Spare Clockwork Component - Coppelius",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 72,
      "priority": 2
    },
    {
      "itemName": "Evergloom Ring",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 73,
      "priority": 2
    },
    {
      "itemName": "Pseudo-Stamens",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 74,
      "priority": 2
    },
    {
      "itemName": "Quelled Creeper",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 75,
      "priority": 2
    },
    {
      "itemName": "Light Guiding Tetrahedron",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 76,
      "priority": 2
    },
    {
      "itemName": "Perpetual Caliber",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 77,
      "priority": 2
    },
    {
      "itemName": "Majestic Hooked Beak",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 78,
      "priority": 2
    },
    {
      "itemName": "Thunderclap Fruitcore",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 79,
      "priority": 2
    },
    {
      "itemName": "Runic Fang",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 80,
      "priority": 2
    },
    {
      "itemName": "Dragonheir's False Fin",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 81,
      "priority": 2
    },
    {
      "itemName": "Riftborn Regalia",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 82,
      "priority": 2
    },
    {
      "itemName": "Storm Beads",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 83,
      "priority": 2
    },
    {
      "itemName": "Dew of Repudiation",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 84,
      "priority": 2
    },
    {
      "itemName": "Perpetual Heart",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 85,
      "priority": 2
    },
    {
      "itemName": "Smoldering Pearl",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 86,
      "priority": 2
    },
    {
      "itemName": "Marionette Core",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 87,
      "priority": 2
    },
    {
      "itemName": "Crystalline Bloom",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 88,
      "priority": 2
    },
    {
      "itemName": "Juvenile Jade",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 89,
      "priority": 2
    },
    {
      "itemName": "Everflame Seed",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 90,
      "priority": 2
    },
    {
      "itemName": "Cleansing Heart",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 91,
      "priority": 2
    },
    {
      "itemName": "Basalt Pillar",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 92,
      "priority": 2
    },
    {
      "itemName": "Hoarfrost Core",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 93,
      "priority": 2
    },
    {
      "itemName": "Hurricane Seed",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 94,
      "priority": 2
    },
    {
      "itemName": "Lightning Prism",
      "farmScheduleID": 1,
      "tier": 3,
      "itemFamily": 95,
      "priority": 2
    },
    {
      "itemName": "Fractured Lunar Iron",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 96,
      "priority": 2
    },
    {
      "itemName": "Depleted Lunar Iron",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 96,
      "priority": 2
    },
    {
      "itemName": "Unblemished Lunar Iron",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 96,
      "priority": 2
    },
    {
      "itemName": "Faded Flaming Hilt",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 97,
      "priority": 2
    },
    {
      "itemName": "Fractured Flaming Hilt",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 97,
      "priority": 2
    },
    {
      "itemName": "Jeweled Flaming Hilt",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 97,
      "priority": 2
    },
    {
      "itemName": "Fractured Eye of the Deep Shadow",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 98,
      "priority": 2
    },
    {
      "itemName": "Aberrant Core of the Deep Shadow",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 98,
      "priority": 2
    },
    {
      "itemName": "Hooked Beak of the Deep Shadow",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 98,
      "priority": 2
    },
    {
      "itemName": "Lightless Bone",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 99,
      "priority": 2
    },
    {
      "itemName": "Glowing Remains",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 99,
      "priority": 2
    },
    {
      "itemName": "Radiant Exoskeleton",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 99,
      "priority": 2
    },
    {
      "itemName": "Mistshroud Manifestation",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 100,
      "priority": 2
    },
    {
      "itemName": "Mistshroud Plate",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 100,
      "priority": 2
    },
    {
      "itemName": "Mistshroud Helmet",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 100,
      "priority": 2
    },
    {
      "itemName": "Frostnight's Glimmer",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 101,
      "priority": 2
    },
    {
      "itemName": "Frostnight's Glow",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 101,
      "priority": 2
    },
    {
      "itemName": "Frostnight's Glory",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 101,
      "priority": 2
    },
    {
      "itemName": "Cold-Cracked Shellshard",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 102,
      "priority": 2
    },
    {
      "itemName": "Warm Back-Shell",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 102,
      "priority": 2
    },
    {
      "itemName": "Blazing Prismshell",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 102,
      "priority": 2
    },
    {
      "itemName": "Refractive Bud",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 103,
      "priority": 2
    },
    {
      "itemName": "Bewildering Broadleaf",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 103,
      "priority": 2
    },
    {
      "itemName": "Illusory Leafcoil",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 103,
      "priority": 2
    },
    {
      "itemName": "Axis of the Secret Source",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 104,
      "priority": 2
    },
    {
      "itemName": "Sheath of the Secret Source",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 104,
      "priority": 2
    },
    {
      "itemName": "Heart of the Secret Source",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 104,
      "priority": 2
    },
    {
      "itemName": "Ignited Stone",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 105,
      "priority": 2
    },
    {
      "itemName": "Ignited Seed of Life",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 105,
      "priority": 2
    },
    {
      "itemName": "Ignited Seeing Eye",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 105,
      "priority": 2
    },
    {
      "itemName": "Shard of a Shattered Will",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 106,
      "priority": 2
    },
    {
      "itemName": "Locus of a Clear Will",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 106,
      "priority": 2
    },
    {
      "itemName": "Sigil of a Striding Will",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 106,
      "priority": 2
    },
    {
      "itemName": "Ruined Hilt",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 107,
      "priority": 2
    },
    {
      "itemName": "Splintered Hilt",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 107,
      "priority": 2
    },
    {
      "itemName": "Still-Smoldering Hilt",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 107,
      "priority": 2
    },
    {
      "itemName": "Feathery Fin",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 108,
      "priority": 2
    },
    {
      "itemName": "Lunar Fin",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 108,
      "priority": 2
    },
    {
      "itemName": "Chasmlight Fin",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 108,
      "priority": 2
    },
    {
      "itemName": "Old Operative's Pocket Watch",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 109,
      "priority": 2
    },
    {
      "itemName": "Operative's Standard Pocket Watch",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 109,
      "priority": 2
    },
    {
      "itemName": "Operative's Constancy",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 109,
      "priority": 2
    },
    {
      "itemName": "Rift Core",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 110,
      "priority": 2
    },
    {
      "itemName": "Foreign Synapse",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 110,
      "priority": 2
    },
    {
      "itemName": "Alien Life Core",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 110,
      "priority": 2
    },
    {
      "itemName": "Drop of Tainted Water",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 111,
      "priority": 2
    },
    {
      "itemName": "Scoop of Tainted Water",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 111,
      "priority": 2
    },
    {
      "itemName": "Newborn Tainted Hydro Phantasm",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 111,
      "priority": 2
    },
    {
      "itemName": "A Flower Yet to Bloom",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 112,
      "priority": 2
    },
    {
      "itemName": "Treasured Flower",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 112,
      "priority": 2
    },
    {
      "itemName": "Wanderer's Blooming Flower",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 112,
      "priority": 2
    },
    {
      "itemName": "Dessicated Shell",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 113,
      "priority": 2
    },
    {
      "itemName": "Sturdy Shell",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 113,
      "priority": 2
    },
    {
      "itemName": "Marked Shell",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 113,
      "priority": 2
    },
    {
      "itemName": "Damaged Prism",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 114,
      "priority": 2
    },
    {
      "itemName": "Turbid Prism",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 114,
      "priority": 2
    },
    {
      "itemName": "Radiant Prism",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 114,
      "priority": 2
    },
    {
      "itemName": "Chaos Storage",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 115,
      "priority": 2
    },
    {
      "itemName": "Chaos Module",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 115,
      "priority": 2
    },
    {
      "itemName": "Chaos Bolt",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 115,
      "priority": 2
    },
    {
      "itemName": "Gloomy Statuette",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 116,
      "priority": 2
    },
    {
      "itemName": "Dark Statuette",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 116,
      "priority": 2
    },
    {
      "itemName": "Deathly Statuette",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 116,
      "priority": 2
    },
    {
      "itemName": "Fragile Bone Shard",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 117,
      "priority": 2
    },
    {
      "itemName": "Sturdy Bone Shard",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 117,
      "priority": 2
    },
    {
      "itemName": "Fossilized Bone Shard",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 117,
      "priority": 2
    },
    {
      "itemName": "Concealed Claw",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 118,
      "priority": 2
    },
    {
      "itemName": "Concealed Unguis",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 118,
      "priority": 2
    },
    {
      "itemName": "Concealed Talon",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 118,
      "priority": 2
    },
    {
      "itemName": "Chaos Gear",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 119,
      "priority": 2
    },
    {
      "itemName": "Chaos Axis",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 119,
      "priority": 2
    },
    {
      "itemName": "Chaos Oculus",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 119,
      "priority": 2
    },
    {
      "itemName": "Dismal Prism",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 120,
      "priority": 2
    },
    {
      "itemName": "Crystal Prism",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 120,
      "priority": 2
    },
    {
      "itemName": "Polarizing Prism",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 120,
      "priority": 2
    },
    {
      "itemName": "Heavy Horn",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 121,
      "priority": 2
    },
    {
      "itemName": "Black Bronze Horn",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 121,
      "priority": 2
    },
    {
      "itemName": "Black Crystal Horn",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 121,
      "priority": 2
    },
    {
      "itemName": "Damaged Mask",
      "farmScheduleID": 0,
      "tier": 0,
      "itemFamily": 122,
      "priority": 2
    },
    {
      "itemName": "Stained Mask",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 122,
      "priority": 2
    },
    {
      "itemName": "Ominous Mask",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 122,
      "priority": 2
    },
    {
      "itemName": "Chaos Device",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 123,
      "priority": 2
    },
    {
      "itemName": "Chaos Circuit",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 123,
      "priority": 2
    },
    {
      "itemName": "Chaos Core",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 123,
      "priority": 2
    },
    {
      "itemName": "Hunter's Sacrificial Knife",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 124,
      "priority": 2
    },
    {
      "itemName": "Agent's Sacrificial Knife",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 124,
      "priority": 2
    },
    {
      "itemName": "Inspector's Sacrificial Knife",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 124,
      "priority": 2
    },
    {
      "itemName": "Recruit's Insignia",
      "farmScheduleID": 0,
      "tier": 0,
      "itemFamily": 125,
      "priority": 2
    },
    {
      "itemName": "Sergeant's Insignia",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 125,
      "priority": 2
    },
    {
      "itemName": "Lieutenant's Insignia",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 125,
      "priority": 2
    },
    {
      "itemName": "Dead Ley Line Branch",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 126,
      "priority": 2
    },
    {
      "itemName": "Dead Ley Line Leaves",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 126,
      "priority": 2
    },
    {
      "itemName": "Ley Line Sprout",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 126,
      "priority": 2
    },
    {
      "itemName": "Mist Grass Pollen",
      "farmScheduleID": 0,
      "tier": 1,
      "itemFamily": 127,
      "priority": 2
    },
    {
      "itemName": "Mist Grass",
      "farmScheduleID": 0,
      "tier": 2,
      "itemFamily": 127,
      "priority": 2
    },
    {
      "itemName": "Mist Grass Wick",
      "farmScheduleID": 0,
      "tier": 3,
      "itemFamily": 127,
      "priority": 2
    }
]
