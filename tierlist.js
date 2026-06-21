(function() {
  if (document.getElementById('tlRoot')) return;

  var cfg = {
  "lists": {
    "all": {
      "ss": [
        "Astral Bonnie",
        "Dragon Endo 01",
        "Golden Freddy",
        "Frozen King Foxy",
        "Frostmancer Withered Bonnie",
        "Stormbound Chica",
        "Kronos Endo Freddy"
      ],
      "s": [
        "Nightmare Fredbear",
        "Thanatos",
        "Nightmarionne",
        "Psychic Friend Fredbear",
        "Shepherd Fredbear",
        "Hag Withered Chica",
        "Starfarer Princess",
        "Shark Withered Foxy",
        "Spring Duo",
        "Golden Cupcake",
        "Valkyrie Chica",
        "Deadeye Freddy",
        "Gravelord Foxy",
        "Blighted Endo Freddy",
        "War Machine Foxy",
        "Overgrown Foxy",
        "Old Man Consequences",
        "Follow Me",
        "Shadow Freddy",
        "Shadow Bonnie",
        "Withered Bonnie",
        "Purple Guy",
        "Dreadbear",
        "Headless Horseman Mangle",
        "Yeti Oni Bonnie",
        "Toy Maker Mangle",
        "Krampus Purple Guy",
        "Lolbit",
        "Yenndo",
        "Ennard",
        "Anti-Hero Mike",
        "Ignited Burst Withered Freddy",
        "Detective Bonnie",
        "Goodnight Plushtime",
        "Fazman",
        "Devious Purple Guy",
        "Chipper",
        "Animdude",
        "Purifier Mercenary Toy Chica",
        "Mother Nature Ballora"
      ],
      "a": [
        "Sweetheart Toy Foxy",
        "Blossom Chica",
        "Plushtrap",
        "Crying Child",
        "Freddles",
        "Nightmare Endo",
        "Nightmare Foxy",
        "Nightmare BB",
        "Lich Shadow Bonnie",
        "Cursed Jester Spring Bonnie",
        "Barbarian Boy",
        "Harlequin Mangle",
        "Serpent Endo",
        "Springtrap",
        "Cerberus Freddy",
        "Hades Bonnie",
        "Hacker King RWQFSFASXC",
        "Leviathan Mangle",
        "Tarnished Spring Bonnie",
        "Rockin Bonnie",
        "Mecha Cupcake",
        "Popeyes Toy Freddy",
        "Phantom Foxy",
        "Phantom Bonnie",
        "Phantom Mangle",
        "Phone Dude",
        "Phantom BB",
        "Foxy",
        "Bonnie",
        "Jack'O Bonnie",
        "Withered Freddy",
        "Endo 02",
        "Slasher Bonnie",
        "Mangle",
        "Withered Golden Freddy",
        "Breadbear",
        "Bear5",
        "Puppet",
        "Grinch Foxy",
        "Scrooge Freddy",
        "Popcorn Bot",
        "Luminary Reporter Shadow Bonnie",
        "Scarecrow Freddy",
        "Party Packer Cupcake",
        "Tidal Wailer Crying Child",
        "Circus Baby",
        "Scooped Michael",
        "Exotic Butters",
        "Ballora",
        "Elizabeth",
        "Handunit",
        "Super Soldier Foxy",
        "Bones of The Past Nightmare Freddy"
      ],
      "b": [
        "Party Glock Freddy",
        "UFO Tangle",
        "Fisherman Toy Bonnie",
        "Nightmare Bonnie",
        "Nightmare Cupcake",
        "Nightmare Freddy",
        "Masked Bullies",
        "Shadow Knight Freddy",
        "Nightmare Mangle",
        "Clockwork Cupcake",
        "Time Lord Withered Freddy",
        "Phantom Chica",
        "Cloaked Sparky",
        "Turkey Chica",
        "PaperPals",
        "Toy Freddy",
        "Withered Foxy",
        "Hor Hor Freddy",
        "John Pigpatch",
        "Freddy Fastbear",
        "Puppet's Alliance",
        "Endo 01",
        "Frosty the Snowcake",
        "Movie Director Freddy",
        "Conductor Toy Freddy",
        "Undead Chica",
        "Balloon Boy",
        "Bidybabs",
        "Funtime Foxy",
        "Funtime Freddy",
        "Minireenas",
        "Faz-ino Spring Bonnie"
      ],
      "c": [
        "Freddy With a Glock",
        "Dead Soul Freddy",
        "Soul Prisoner Foxy",
        "Phantom Freddy",
        "Freddy",
        "Chica",
        "JJ",
        "Toy Bonnie",
        "BBnJ",
        "Withered Chica",
        "Toy Chica",
        "Mrs Claus Toy Chica",
        "Santa Freddy",
        "Fazcade",
        "Cupcake"
      ]
    },
    "starter": {
      "ss": [
        "Golden Freddy"
      ],
      "s": [
        "Old Man Consequences",
        "Withered Bonnie"
      ],
      "a": [
        "Barbarian Boy",
        "Rockin Bonnie",
        "Phantom Bonnie",
        "Phantom Mangle",
        "Phantom BB",
        "Foxy",
        "Bonnie",
        "Jack'O Bonnie",
        "Party Packer Cupcake"
      ],
      "b": [
        "Party Glock Freddy",
        "UFO Tangle",
        "Nightmare Cupcake",
        "Nightmare Freddy",
        "Masked Bullies",
        "Phantom Chica",
        "Cloaked Sparky",
        "Turkey Chica",
        "PaperPals",
        "Toy Freddy",
        "Hor Hor Freddy",
        "Endo 01",
        "Frosty the Snowcake",
        "Conductor Toy Freddy",
        "Undead Chica",
        "Bidybabs",
        "Faz-ino Spring Bonnie"
      ],
      "c": [
        "Freddy With a Glock",
        "Soul Prisoner Foxy",
        "Freddy",
        "Chica",
        "JJ",
        "Toy Bonnie",
        "Withered Chica",
        "Toy Chica",
        "Mrs Claus Toy Chica",
        "Santa Freddy",
        "Foxy Fighters",
        "Hero PaperPals",
        "Bucket Bob",
        "No. 1 Crate",
        "Pan Stan",
        "Rockstar Chica"
      ]
    },
    "support": {
      "ss": [
        "Astral Bonnie",
        "Dragon Endo 01",
        "Golden Freddy",
        "Frozen King Foxy",
        "Stormbound Chica",
        "Kronos Endo Freddy"
      ],
      "s": [
        "Nightmare Fredbear",
        "Starfarer Princess",
        "Spring Duo",
        "Golden Cupcake",
        "Overgrown Foxy",
        "Old Man Consequences",
        "Headless Horseman Mangle",
        "Lolbit",
        "Ennard",
        "Chipper",
        "Animdude",
        "Mother Nature Ballora"
      ],
      "a": [
        "Sweetheart Toy Foxy",
        "Barbarian Boy",
        "Springtrap",
        "Rockin Bonnie",
        "Phantom Mangle",
        "Bear5",
        "Puppet",
        "Popcorn Bot",
        "Scarecrow Freddy",
        "Party Packer Cupcake",
        "Handunit"
      ],
      "b": [
        "Shadow Knight Freddy",
        "Movie Director Freddy",
        "Balloon Boy",
        "Funtime Foxy"
      ],
      "c": [
        "Nightmare Chica",
        "Cupcake",
        "Michael Afton",
        "Candy Cadet",
        "Helpy",
        "Lefty",
        "Fredtrap",
        "Rockstar Foxy"
      ]
    },
    "stun": {
      "ss": [
        "Frostmancer Withered Bonnie",
        "Kronos Endo Freddy"
      ],
      "s": [
        "Nightmare Fredbear",
        "Old Man Consequences",
        "Krampus Purple Guy",
        "Yenndo",
        "Ennard",
        "Mother Nature Ballora"
      ],
      "a": [
        "Mangle",
        "Circus Baby",
        "Exotic Butters"
      ],
      "b": [
        "Nightmare Mangle",
        "Time Lord Withered Freddy"
      ],
      "c": [
        "Landslide Funtime Foxy",
        "Foxy Fighters",
        "Michael Afton",
        "Lefty",
        "Molten Freddy",
        "Pan Stan",
        "Rockstar Chica"
      ]
    }
  },
  "msg": {
    "Astral Bonnie": "Godlike AOE damage and insane passives. Best in the game.",
    "Dragon Endo 01": "Highest single-target burst. Essential endgame pick.",
    "Golden Freddy": "Unmatched support and damage hybrid. Must-have carry.",
    "Frozen King Foxy": "Elite CC and damage combo. Top-tier in every mode.",
    "Frostmancer Withered Bonnie": "Best slow and DPS synergy. Endgame staple.",
    "Stormbound Chica": "Add your note here.",
    "Kronos Endo Freddy": "Add your note here."
  }
};
  var lists = cfg.lists || {};
  var msg   = cfg.msg   || {};
  var unitMap = {};
  var mode  = 'all';

  var lnk = document.createElement('link');
  lnk.rel  = 'stylesheet';
  lnk.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
  (document.head || document.documentElement).appendChild(lnk);

  var TIERS = [
    {id:'ss', name:'SS', stars:'\u2605\u2605\u2605\u2605\u2605'},
    {id:'s',  name:'S',  stars:'\u2605\u2605\u2605\u2605'},
    {id:'a',  name:'A',  stars:'\u2605\u2605\u2605'},
    {id:'b',  name:'B',  stars:'\u2605\u2605'},
    {id:'c',  name:'C',  stars:'\u2605'}
  ];

  var RARITY = {
    uncommon:  'linear-gradient(90deg,#5CFF4D,#3FFF8F)',
    rare:      'linear-gradient(90deg,#58A6FF,#1C3AA0)',
    epic:      'linear-gradient(90deg,#FF35FF,#87009F)',
    mythic:    'linear-gradient(90deg,#FFB81F,#FFFF00)',
    exclusive: 'linear-gradient(180deg,rgb(140,255,203) 0%,rgb(20,115,91) 25.1%,rgb(51,231,255) 50%,rgb(20,68,112) 68%,rgb(21,74,118) 74.6%,rgb(79,164,255) 100%)',
    secret:    'linear-gradient(90deg,#FF8800,#FF0C0C)',
    nightmare: 'linear-gradient(90deg,#492590,#2A1E42)',
    apex:      'linear-gradient(90deg,#9D0078,#0063F8)',
    hero:      'linear-gradient(90deg,#FFCD19,#353815,#FFFB85)',
    radiant:   'linear-gradient(90deg,#FF6600,#FFCC33)'
  };

  var SHINY = {
    'Astral Bonnie':           'linear-gradient(90deg,#ffeb3b,#ff9800,#f44336,#9c27b0,#2196f3,#4caf50,#ffeb3b)',
    'Frozen King Foxy':        'linear-gradient(90deg,#ff85a2,#ffc107,#e91e63,#9c27b0,#ff85a2)',
    'Dragon Endo 01':          'linear-gradient(90deg,#4a00e0,#6e25ff,#1e0066,#6e25ff,#4a00e0)',
    'Kronos Endo Freddy':      'linear-gradient(90deg,#00ffff,#17a2b8,#000,#17a2b8,#00ffff)',
    'Headless Horseman Mangle':'linear-gradient(90deg,#50f2d0,#42a2f8,#1c734d,#8b5cf6,#000,#1c734d,#50f2d0)',
    'Hacker King RWQFSFASXC':  'linear-gradient(90deg,#000,#ff3131,#000,#ff3131,#000)',
    'Turkey Chica':            'linear-gradient(90deg,#000,#ff3131,#000,#ff3131,#000)',
    'Scooped Michael':         'linear-gradient(90deg,#a020f0,#6a0dad,#000,#bf00ff,#7d26cd)',
    'Yeti Oni Bonnie':         'linear-gradient(90deg,#5bb9ff,#fff,#2b70d9,#000,#2b70d9,#5bb9ff)',
    'Plushtrap':               'linear-gradient(90deg,#000,#555,#aaa,#555,#000)'
  };
  var SHINY_DEF = 'linear-gradient(90deg,red,orange,yellow,lime,cyan,blue,magenta,red)';

  var STATUS_TAGS = ['NEW','BUG','UP','DOWN'];
  var STATUS_ICON = {
    NEW:  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACCCAYAAADblyOeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAACsoAMABAAAAAEAAACCAAAAAJsoI6IAAAHLaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xNzI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTMwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CqEjNhQAABh3SURBVHgB7V1bjCTXWf7r1pe5z3hndr2bZB3bMQ52HBsrEECJgsAQC9s8BQtBBLwgGYlISPAQRCSEeOMFBSkPSDyEhAeLi5GVQGQrUggmJEbBONjYcXzLxdnd2cvsbE9Pd9eV7/tPVc+MZ4bUdM9M2tn/zFRX1alzq+989Z//nDrnLxFzhoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAjsQMDbcWYnoyDg7xOpgD83c4bABCBwtyzIH8lX5cvSkxclCy75WbQmWXheMu8ZyeQv5XvyoPwuSmpC4RCry8AcBcw75GdXPnb6yZX3n26/cvJ5kUAk81PJ8hSHnswWc9K63JLotaZ897Fvfz37inxInpeNUbKyODsRMMLuxOMHnXnysPzJ2x8+8wn/nrZ3KViT7sxVkbSQKANr4RI/Ed8PJcoDaW9OycrGilz+1ysblz9z8Yx8Ta79oAzsuiFweAjcL+8/8/ipbOnlpcI/3yxkLSikAz31sle0LrWLmavzhb8G/yteIetSeLg+dWGmeOeLtxbyB/IFFMQExJi14cTCmIlcF9FvktaJjyx+aeq+9uK59gUppjKoAuhTYSc5/otMBl4C9qagJfzZFcP1xIslkb6cXFq+5dq1ztPQd1++LvA6opvcr4d7RNm9hZO9Rz7auLl59kJxUWQO9xFjAzfJ2YAoNnAQYR9i86HJUkVgmLZIt7kpxdnMk3vlz+BjUhYgjOqMsPWQ8+Rt8nvpKV/CMJRGX6RVBDKbNcSjdC03ySBuoc8G4GYrm4YeOwO2gseIs9HsyMp7F98rv6B0r5erhdqFgBF2FyR7eNwB2Xm2OR2ejiT3PckgOUOvKfEA4pJKVYmiB9mph2BwlrnNQwcsyVLpNweSzqYBdIaf2yMH86qJgBG2DlAtmQtPemc7UQcDrXgb4DdkE8rroAXyQrpqGw+JW0ANwCmu55KGA8kj6LTUZxEnCTNZOLUowQ11MrQw+yFAjctcDQTyoI+3AwHeCkAF4GOOcVcyNWf/Ch5+EUpO5vqZ2xeJe89FsYswvJYGGdKokZkF2RcBk7D7QrPzQgTRGYGdBZVWkhXERM8KREU4+tFxX6oIBJaHeqkgk0na8rqe2c8oCJiErYkaWnQJS16qyCRRtztlJgKU/iQyNAP8+JIV6IhhM+mwHbDRjo2wNXHzC18CvL0K0aFKoAuEJQHjson34auEpOAlTytyFxGkbA41NsbbsMqzZqYWbBcCRthdkOztkXmQlNjoPJDXL3LX2SqDqzDFMYlaSVLVdxGHGkGBOHoFhDY3OgJG2JrYDYgUtgydKDbuGKBSwlJNYIcqR9Ofg5mUxDiTmDqEqq7Qd6EexBj/Sjy+WTA3DgKVMBgnjesibgakSNJKdaVEpQTVTpciQHaS1QiopMUhvajbcg/v3DP5ACTGcoZgTfiaSSjt2JfNxiZi8J2rIyu83HHOth5DWiA1yazMJsvJaAxxQTFAx8vF0wj2MxICJdwjxbVIhsCxI2CEPXbILcNxEDDCjoOexT12BIywxw65ZTgOAkbYcdCzuMeOgBH22CG3DMdBwAg7DnoW99gRMMIeO+SW4TgIGGHHQc/iHjsCRthjh9wyHAcBI+w46FncY0fACHvskFuG4yBghB0HPYt77AgYYY8dcstwHASMsOOgZ3GPHQGbD1sH8g5WzGaJNDDZNYFllwQTsovQ01UGU/0GJnJjnVcEOwRvevy5jAYmtzAnFmGlIXHRxJTZBjxsXmwd2PcKY4TdC5U9/GjxRSdnw5hWtTyLpokyP1ZjGWqTQOORtZjCXS5NwMoZGNvACZeE81K5aHGPLMyrBgJG2BogySxkYpBDUKbSy2EgQ42+cSUBls2AiGp2gMtg6JSoW4sU9ZQ/jA9DGiZdCdLo7k2N2OgJ/UjHhEpQ0LYALL/g35GS3IMg5SoYla5DwmIhIkQxLRRxORcE89CZIY0hFCMfGGFrQteCKSJuEcUphKyfwJIh9FK3MhaJUIGlzlDQoqHvloLDWwlOlKEWpFz3ZW1aTcT3DmaE3RuXnb5UCdJEkgFMaFTKKu1pcRWstvlVcGWmUxEgfhl00AOnKW2xzNujnS3TYSuwRtq/lZ/3bY2t3vsO6tRE481pVNF2pjUrYQZTrzGtZMDWq499jqGCmPZghyngGnUEtU/gkuElH/puo9GQFKY5sz5sFByPq0q18z6OJ+8jzWXyCXurNGHF+ifklCyGK/LHzfmW7zWDmxOvWExBmDCCVGO33ct72L8KY2398rzy33PveznMXfk/hpqFjezKYRgKiie2dT/3Xi48bw46aj+7Mb1t/vaZoN/uSx9fiinIUlh08WBpm4zgSu4deizpwgvYuEsTmN9MU/EXfWn/zPS70oX43qkkeKSZBXdebYPkrvwj7WmkjpnQErg+PEUxm/vZramz6/FCEXhxjodltjktyVq6ufGN9Y/LeXlWXocd+7egq57EySv6PbIc/nLrb95x3zt+KV3qeyGHMEGmFGObdBwiYgOMjw3xDBv9D77PMSxFay3O/BBqGalorx9peTyA3jrAGOv69CWJYe9VHcL7sAdLXTWjH8lSOfjznDa46GgfNsMIgequSSRLnQWZ6bfBLXc9DZjmwctd3W8KIFTlUMIyTffQgbD6EPEWfNj34lduokEkM8WUNHuh/O/TzyXxE+lH5DF5nMXE9pZwk0nYD8uv3fqbt382fnfsX1pYlcEMhGdYoN+CCimhDcgl1s+Yd8C+kloaBO+5Z6+flcykHZEhRfGg5JXpoTKc61h5MFzMei4LxV1pD5YcJZGYVqamD10wP47U/hakIPppGOoqozKVURz7eeqYjuZfnvMZqLDhM4FwQdESbzOXqbSBZgUNyyCXmUdbF1/5+zduk/8WfL9p8t3kqQS/Ig+ffPjUZ5N7e/7lmcuS4IMCjqxkErZyrCjD+CfduBXONJScKuVQw1rpZCUlFK6UEp3hKl4qEanPIiyJqa6MygeATs0Y6QkukFUZE6bDuC11YIYjoSpvXhrFVfGxJxYsMl2Vnd+AVXDasqXDV2744PFrNxLiI3hotdoPrCxL/MaTIOxPIkSVmgafxJ/q+ZyMsv2ifPD0R099Tu7K/as3rEuvjS9aKGnwdolkpbiiBFNSOGwxPKr1znpi/R90zySZoMemnGJIz5GV1r5eYgBXlcyS+SEMdVbGVUkKb0bjOYs5TAPM3rIK6yKQ7BS9VbhDKT/SdGTFffAPiVOd4V8OKaqO2SMzzR5ETWGUuZvgRQjUnZtvu+X0pe9delG+Kc+5wJP7O0mEDVq/6n/uxIdPrqwvX5ONAF9soyAA3iElFM1WKtzwQGXwSy0B2m90nZQoqJsR946ohZrSLPVBrXRXwZola1kZBjaCreiM6Z7E8zLUPjtgZCviKdF31LdSBD7MhxQi2V1YniPhEctd3i9S4APHjiAQQVp8sLknZp40mg1qtZpVeYvuqzd8sFD0uOV06OXFkw+ud9Y+Ja/g27kT7FjsyXAPyENzP750x0YbkjXa0JY4mgEhlRx4w4S6DSBG0LuH0AVp8e9MW45bfBIKieG1aw6pw+aajhKXBowrwvogJKXYlnPhKp136L8jDHzJSZX7CK/XcA/ck+Aq1Xl9DKdpMT6kKbBhqTKqHDzGFuNTN0UMlWCABwMXvRBVzlfLWi784KHbbHRl6vZWU87KnzKlSXaTo8P6MtdtDdAVCAAyAJ7CC6UYCGPYKgPS+F6LyhGtdIBMHZCdIef43PF4hH2lo7ICoRfzWcAYgL5e1SM0o2z+kSUcfrTWcaXMOufXYnCs0TUMgpXXGEMdL2rbT10S94Jw+rAhLafzjlDu8n7duIYjqhai0lfLsvCZaDadZI9B2hxDbK6wKBQ+yYRXdjhPpTO1LrIo96OA5MSxDRgjrwM5IjUJzpMb5WPzy/No4jG2WkHGimYJOcEErzZ1pAh+rtXDOVtZDTD6nuOXCgLzGua3nXE7JSvDqr5Y7l3ll3Gx2+7eLJEduRCC94B83UNQVcFoexZZXXXAPTcmV/olcSH9PjLEbYWYFhmSqBAMVCECSHqOEQ/8rizePfcO+WmVv7g+mY4lnwz3NvDwTCZJM8MMKGCNTeeSolfDiif+2GnvW/VBtMUBxFOm45ij30JBEUTpB2lX1TGJVCBdttqUrkpQzQ+fPaInHMdXWZ5G2amhajDs+WsI5YceUdcmMfgYpNXwGFsHJqC6cRlhhB2j60uLKi6LV6WJPH2AqPjx5ngJf1n5yaYCkjUaTOkr5ixqSS/r8E3IXQj2NQ08gT/lbfzwS9bAe/kgjyRJ0ESh5WSHq9FE08xWFBXLSuFQkToQTKWVqgSVNBx175p8SiPmoRxiJjhQCci89RSSqCRlDgZQ1+VGonIrebyVABOiw16HsUhwTdB509/p4KOW28XTX+ZVba6wrtAucy1bdZn7ocNJEmIyOXRaCof+ajeTFt6CTbCbFAlbxOfSp7vne/fkM2ANAOToQIZBbsgmSC7QU5t/eJbS0DV3QFlJrNUGmA++1xjUMbQLXb1/ggznpOsqPVzL+GqNMlifIMRivgxS7XlMyTZkLs41ADs/OKyU3tKbrQNHFnKtgYOXm8lo+Rww7hS/PvF5k3MfEynLvP0aypsFVAdiaReY4cMn8vWqLNsDTs4xa2Ey3Cvy6eKC5PPBoqtnVCS/EsQvDHquVkEORyIWWiXuYZR+B+EJBRIFQZV32rSWmVSk417jMCwcL3NTPzbB7LBhggz328hLdUFVBsbZzSn6juYwnZFTGpknHwLMgUC+xI0dVXbqSFQCieSHZWdhAoSFFGgB50EqrR7GuFbz5+T1yV6/w9uYDPcF+Wrxmny6uYHhgX6AjgCKhUMOzQTULznTH70uFthJLByo1B2z+MNKpGRBTesbNPfaVOcAVGpHJVlRFgpe8mDrQ3NlGcomnzu+unUs2QNi5MlPeKY6Y2XM8kM6spdPUjLfAA9KoAAh3ereiFNVHIaBbtXAO+VmArJjCsx0PCXLPXwE91X5c4QkEBPrDqPKD+3meunm55tnowfmzyzcuBlhZIAE0iYPFQKxUc3eh6+rDNbCHk3ggQpU8YnVVElEkrSq7GFi9IADEUkI/bAcCkL9dcth+B5pMGT1AkGP2YOk2HMXcBUHzIN+ejNbKRz8iGkxX8YkYtSVeSt8wYFjlo/50pV58cNN/PdQhoX+nCyuLci1L3cGnSeuPSIXJ/vFwUQRFs1Rvtnc/Ke5E7O/7c21pgaY8FLo4j9MnGaNAPiqWfXBFD+NUCnslY3hWKFImh2+AM2qhweAf8MmdCgpGQ5ExcSRkOHwx+aXDa+L48pAkpAIFHKOJ3wLBcfykz18ALnnO12iP2bx3YOAEpOgTL7ciBu7pnoj9FQWowwolCsGRgvQRNz5nZvlwpfOX1z960s34cXsGos6yc5hOmklfEhOzv/WyrPN98yc7LW6kkZdkABvv4C7fioTuIdpG4TBqEI43pvENEzQRAZoHlsqOTlRJEVHhNP+WMdhCt0OLkY4VnaIh6Tq3VNd4QPDcKorbscRZXThQGqiTJUCN9BIqvRQbhA2xOytcVxaDvsxDT4TzvEhIVnp2Llzr5ypgehzgj3DUsAvf2b23Lc+f/4OeWryycq7mZRRApZlyz0uF9abq2duuTb7j6fuuvHB7lTHG4Rt6QU9CRp4fRpB98L6/hwDtlM72+StNGoe9YuuSswWiBRBt8tJQEzM5kfkWNmNAvlmA4mnIRHRQUk96IyUihFYmMKvciQlXUkEPaakRVgPg/XoO0JfhHUCfNiLEjrEPNoC7IniaQ066g/n6vLBoD5NVaXSMjIcEBp2/D0cNFF4dqymNpuykM/J1Zcu5a/9+3cfvfoX3d9A3ttuZNSSHE+8CubjyW2UXD6Eh+p9ctfczdPvDheaj/SCmJPk4AkJ66F5LoYSdgU3c4Z8UfHiVMn9ciTl8C5SLsZR/xRUgfkmCMtets4pYA7VC4nMT3rT8f+k78reJyuel8KQhrb1eGZUiCVgtoq2rTonaVSqIoi+AGGfCISdSzB09IJ3rbiQP8dlNimMc/gyDZFb3KEhCzmHtL+PaJWbx8FpXMPk1eHEA6Qu/LrdS9jSfhRj/Y4/A+3pVpC2UfXjUqTPcWu/GclGpy9tf0pmiznpvNK50vnGld+XV+Xv5OtcTvnWcpNP2MnA05O/lWcXPjD7nkEb6gI6hEkGSasOXKKAYk+dT4qSFedV20WEsUSljYdh4fs3ZOc+dfEG+St9WDS2/RwMgUrROVis6zD0bDYtTSwv4eJDndMAYkZo6rW3j6bfOXbAML6pr3vhQ7ISYVUvRJZai354NbzThbXfURCo5MAoca+rOAVEZo45jtRtabaI85lUhW1AfJKvbKjReeNIA13swZ8X2OiiX9XDLKkNv+OljXSZ182NhoARtiZuGfTNGM16xg8cl5KTtgZgHsOlAMLytSh74RSrfMulb3epFvNdPfw5T3XsYaya5f1RDWaErVmzadCXBiY/B+jZcKyVvCxS9t14QLJyg6+qB7xaOsznLTA6oJI2BtwBe2uV/lsFsn1dBEyHrYkUh6BgaFMJybm5lLI+JsRU45qOsPAmaeHyalCUEyIQLcRSlUaEIazhoEbNjC3YDgRMwu6AY5+Tu2U+yFo3+QnWQ2AQKsO4LAmLkU6VtIxFtZYvsZydgTIdDpMpszEem8aYzIPRqIZJ1xKdkXYmYevC9v+P69ZNxcKNiYARtg6AfQxMFVxjau6HjYARtk4NTFfjAnUCW5ijRMAIe5ToWtqHjoAR9tAhtQSPEgEj7FGia2kfOgJG2EOH1BI8SgSMsEeJrqV96AgYYQ8dUkvwKBEwwh4lupb2oSNghD10SC3Bo0TACHuU6Frah46AEfbQIbUEjxIBI+xRomtpHzoCRthDh9QSPEoEbD5sTXQbMELVxPJXWBPQxQNqSA3GBhrw45LuNMCzr4sPaQgO6625VJZ2CZA+l1vjH1u5QqFmnhZsNwJG2N2Y7OnjiAeDxljOjfUGujEg/Wn5RY/UCAF9HEmVpTjmdVI1V5OevGpuVASMsDWRo1XwBIY7UpISCw8dLfGLUzWaQW/SUvc7CatZwD/hsoRyybf62c+BETDC1oSsQCOfYfkrjb8NiQmzRo648KI3FyJWpKU0VT/saciAy8NNwtZEe/9g1unaH5utKx2QjYyDjgqzQOArYeNCRCdhK6nKCOSoOkUWH76oDDJz2bda1agC2H4UBIywB0CNC2H59Wy1PcDVsduV2SodMFZJS8WVRtpAbhpqc9K3CmT7UREwlaA2cjCSAUMZEZZtc7XsAAKXvf8haZWlICtITB6roWUQNSrQScNGrSDEp+vNjYeAEbYmfrQ7wEadHS6ysuQnhrBcI8Ur/LKNjhiUknfHl24QQePYyFZNxPcOZirB3rjs8vUwOhDiy9jryUAymB6i+UztXylDaZe1pLCKV0YnhWEcmV/PpjTGWQS7s40AJ+ZGRsAIWwe6rhSDy72sgCW4cEZfCQi/gBniO2LVR5UpX6mzqnAtuUur3Pz6KA1stJtT8sbrqxKvmoitA/l+YYyw+yGz3f8NuSLn5Zud1UQGMFMvbScyU7CWPX+3cdgKSgPIStmqAwJElwa2G6EMOr7E5/H2a92puAxi7uAIGGHrYVbgCwCPnYiXZTqdE+kCtkYEq4Qw7KZDW6CoGoEb6gNIldBioy2tzQBfa1mSVnc+lQ35Yr0sLdReCBhh90JlL79n5JPpfyXd5Y0TEvSnYNy4LUWXdrIoT0lYNPVKWpyWnS4OIwT4qMfSYF5OXVmS/lfW/kWel+5eyZtfPQSsB1APJ5E3pNeVq/8ZLYe/vnDjvNeTjuT88gC/E8axLN0gU3mINPkVlzALZR6WuxcuT8vmUxvZtSc6D+ArBlfqZmnhdiNghN2Nyf4+35JX4xOd7so75+7baPa8vE07sexEQcKWbRV5S7vFPiwXtvGlwbn1SC4/da649GjnD+U/5J/3T9yuGAJHhcDvyE+BfF3/Ylj4lyFT1yBQ2ZnC5l/Bl18vYluNiqXvzBXyD5iN+JB8HEUpxw6OqlDXR7oG4oj1fPre0yc++ND9z3z7558/7QWYDAvz8UmS4c1WU2Zlplh74Ur++r+99MnVJ1c/IRdMbx0R5l3RjLC7IDmQB/Hz5ANyUt6O6Vx057FdwOzt52UVR+yRmTMEDAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ0AR+D/P78Ln9DQZoAAAAABJRU5ErkJggg==',
    BUG:  'data:image/png;base64,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',
    UP:   'data:image/png;base64,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',
    DOWN: 'data:image/png;base64,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'
  };
  var CORNERS = ['top:2px;left:2px','top:2px;right:2px','bottom:2px;left:2px','bottom:2px;right:2px'];

  function parseUnit(str) {
    var parts = str.split(' ');
    var tags  = [];
    while (parts.length > 1 && STATUS_TAGS.indexOf(parts[parts.length-1]) !== -1)
      tags.unshift(parts.pop());
    return { name: parts.join(' '), tags: tags };
  }

  var CSS = [
    '@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);',
    '#tlRoot{width:100vw;position:relative;left:50%;transform:translateX(-50%);background-color:#090909;color:#fff;font-family:"Press Start 2P",monospace;border:3px solid #f69b55;padding-bottom:20px;box-sizing:border-box}',
    '#tlRoot *{box-sizing:border-box}',
    '#tlHdr{position:sticky;top:0;z-index:9999;background:rgba(3,3,10,0.97);border-bottom:2px solid rgba(246,155,85,0.35);padding:12px 18px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}',
    '#tlTitle{font-family:"Press Start 2P",monospace;font-size:clamp(15px,4vw,24px);color:#681f62;text-shadow:0 0 14px rgba(104,31,98,0.85);white-space:nowrap}',
    '.tl-mode{display:flex;gap:6px;flex-wrap:wrap}',
    '.tl-mb{font-family:"Press Start 2P",monospace;font-size:clamp(9px,2.4vw,12px);padding:11px 14px;background:rgba(0,0,0,0.55);border:2px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.38);cursor:pointer;white-space:nowrap;transition:all .15s}',
    '.tl-mb:hover{border-color:rgba(255,255,255,0.3);color:rgba(255,255,255,0.65)}',
    '.tl-mb.on{background:rgba(104,31,98,0.18);border-color:#681f62;color:#681f62;box-shadow:0 0 12px rgba(104,31,98,0.5),inset 0 0 12px rgba(104,31,98,0.12);text-shadow:0 0 8px rgba(104,31,98,0.85)}',
    '#tlList{padding:10px 18px;display:flex;flex-direction:column;gap:4px}',
    '.tl-row{display:flex;min-height:90px;border-radius:6px;border:1px solid rgba(255,255,255,.06)}',
    '.tl-lbl{width:82px;min-width:82px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:6px 4px;gap:2px;background:rgba(4,4,14,.92);border-radius:5px 0 0 5px;border-right:1px solid rgba(255,255,255,.07)}',
    '.tl-st{font-family:"Press Start 2P",monospace;font-size:clamp(11px,3.2vw,15px);letter-spacing:1px;line-height:1;color:#FFD700}',
    '.tl-nm2{font-family:Arial,Helvetica,sans-serif;font-weight:800;font-size:clamp(22px,6vw,32px);line-height:1.1;color:#FFD700;text-shadow:0 0 12px #FFD700}',
    '.tl-row[data-t=s] .tl-st,.tl-row[data-t=s] .tl-nm2{color:#FF9900;text-shadow:0 0 12px #FF9900}',
    '.tl-row[data-t=a] .tl-st,.tl-row[data-t=a] .tl-nm2{color:#A8FF47;text-shadow:0 0 10px #A8FF47}',
    '.tl-row[data-t=b] .tl-st,.tl-row[data-t=b] .tl-nm2{color:#47AFFF;text-shadow:0 0 10px #47AFFF}',
    '.tl-row[data-t=c] .tl-st,.tl-row[data-t=c] .tl-nm2{color:#888;text-shadow:none}',
    '.tl-band{flex:1;border-radius:0 5px 5px 0}',
    '.tl-row[data-t=ss] .tl-band{background:rgba(140,60,0,.22)}',
    '.tl-row[data-t=s]  .tl-band{background:rgba(110,65,0,.17)}',
    '.tl-row[data-t=a]  .tl-band{background:rgba(40,90,0,.17)}',
    '.tl-row[data-t=b]  .tl-band{background:rgba(0,45,110,.17)}',
    '.tl-row[data-t=c]  .tl-band{background:rgba(25,25,45,.22)}',
    '.tl-units{display:flex;flex-wrap:wrap;gap:4px;padding:7px;align-content:flex-start;min-height:90px;width:100%}',
    '.tl-card{border-radius:12px;padding:2px;border:none;flex-shrink:0;width:80px;cursor:default;position:relative}',
    '.tl-cin{border-radius:10px;overflow:hidden;background:rgba(34,34,34,0.85)}',
    '.tl-cin img{width:76px;height:76px;object-fit:cover;object-position:center top;display:block;pointer-events:none}',
    '#tlTip{position:absolute;font-family:"Press Start 2P",monospace;font-size:8px;line-height:1.7;background:rgba(6,3,18,0.97);border:2px solid #681f62;color:#fff;padding:9px 12px;border-radius:6px;text-align:center;pointer-events:none;opacity:0;transition:opacity .18s;z-index:10000;max-width:200px;word-break:break-word;display:none}',
    '.tl-msg{padding:24px;text-align:center;color:rgba(255,255,255,.35);font-size:12px;width:100%}',
    '@keyframes shinyLoop{0%{background-position:0% 50%}100%{background-position:200% 50%}}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = CSS;
  (document.head || document.documentElement).appendChild(style);

  var BG = 'data:image/jpeg;base64,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';
  var root = document.createElement('div');
  root.id = 'tlRoot';
  root.style.backgroundImage = 'url(' + BG + ')';
  root.style.backgroundSize = 'cover';
  root.style.backgroundPosition = 'center center';
  try {
    document.body.style.setProperty('background-image', 'url(' + BG + ')');
    document.body.style.setProperty('background-size', 'cover', 'important');
  } catch(e) {}

  var hdr = document.createElement('div');
  hdr.id = 'tlHdr';
  var ttl = document.createElement('span');
  ttl.id = 'tlTitle';
  ttl.textContent = 'TIERLIST';
  var modeDiv = document.createElement('div');
  modeDiv.className = 'tl-mode';
  modeDiv.id = 'tlModes';
  [['all','Every Unit'],['starter','Starter'],['support','Support'],['stun','Stun']].forEach(function(p) {
    var b = document.createElement('button');
    b.className = 'tl-mb' + (p[0] === 'all' ? ' on' : '');
    b.setAttribute('data-m', p[0]);
    b.textContent = p[1];
    modeDiv.appendChild(b);
  });
  hdr.appendChild(ttl);
  hdr.appendChild(modeDiv);
  root.appendChild(hdr);

  var list = document.createElement('div');
  list.id = 'tlList';
  TIERS.forEach(function(t) {
    var row = document.createElement('div');
    row.className = 'tl-row';
    row.setAttribute('data-t', t.id);
    var lbl = document.createElement('div');
    lbl.className = 'tl-lbl';
    lbl.innerHTML = '<div class=tl-st>' + t.stars + '</div><div class=tl-nm2>' + t.name + '</div>';
    var band = document.createElement('div');
    band.className = 'tl-band';
    var uz = document.createElement('div');
    uz.className = 'tl-units';
    uz.id = 'tl_' + t.id;
    band.appendChild(uz);
    row.appendChild(lbl);
    row.appendChild(band);
    list.appendChild(row);
  });
  root.appendChild(list);

  var mount = document.getElementById('tlMount');
  if (mount) {
    mount.appendChild(root);
  } else if (document.currentScript && document.currentScript.parentNode) {
    document.currentScript.parentNode.insertBefore(root, document.currentScript);
  } else {
    document.body.appendChild(root);
  }

  var floatTip = document.createElement('div');
  floatTip.id = 'tlTip';
  document.body.appendChild(floatTip);

  function makeCard(raw_name, isSSZone) {
    var parsed = parseUnit(raw_name);
    var name = parsed.name;
    var statuses = parsed.tags;
    var u   = unitMap[name] || {};
    var rar = (u.rarity || '').toLowerCase();
    var card = document.createElement('div');
    card.className = 'tl-card';
    if (rar === 'shiny') {
      card.style.background = SHINY[name] || SHINY_DEF;
      card.style.backgroundSize = '200% 200%';
      card.style.animation = 'shinyLoop 6s linear infinite';
    } else {
      card.style.background = RARITY[rar] || '#aaaaaa';
    }
    var inn = document.createElement('div');
    inn.className = 'tl-cin';
    var img = document.createElement('img');
    img.alt = name;
    img.loading = 'lazy';
    img.draggable = false;
    img.src = u.img || '';
    img.onerror = function() {
      this.style.cssText = 'width:76px;height:76px;background:#1a1a2e;display:block';
      this.removeAttribute('src');
    };
    inn.appendChild(img);
    card.appendChild(inn);
    if (isSSZone) {
      var tip = msg[name];
      if (tip) {
        card.addEventListener('mouseenter', function() {
          var r  = card.getBoundingClientRect();
          var sy = window.pageYOffset || document.documentElement.scrollTop;
          var sx = window.pageXOffset || document.documentElement.scrollLeft;
          floatTip.textContent = tip;
          floatTip.style.display = 'block';
          floatTip.style.opacity = '0';
          var tw = floatTip.offsetWidth;
          floatTip.style.left = (r.left + sx + r.width / 2 - tw / 2) + 'px';
          floatTip.style.top  = (r.bottom + sy + 6) + 'px';
          floatTip.style.opacity = '1';
        });
        card.addEventListener('mouseleave', function() {
          floatTip.style.opacity = '0';
          floatTip.style.display = 'none';
        });
      }
    }
    statuses.forEach(function(tag, i) {
      if (i >= 4) return;
      var b = document.createElement('img');
      b.src = STATUS_ICON[tag] || '';
      b.style.cssText = 'position:absolute;width:18px;height:18px;' + CORNERS[i] + ';pointer-events:none;z-index:3;image-rendering:auto';
      card.appendChild(b);
    });
    return card;
  }

  function renderMode(m) {
    var ls = lists[m] || {};
    TIERS.forEach(function(t) {
      var z = document.getElementById('tl_' + t.id);
      if (!z) return;
      z.innerHTML = '';
      var names = ls[t.id] || [];
      if (!names.length) { z.innerHTML = '<div class=tl-msg>Empty.</div>'; return; }
      names.forEach(function(name) { z.appendChild(makeCard(name, t.id === 'ss')); });
    });
  }

  document.getElementById('tlModes').addEventListener('click', function(e) {
    var b = e.target;
    while (b && b.getAttribute && !b.getAttribute('data-m')) b = b.parentNode;
    if (!b || !b.getAttribute('data-m')) return;
    Array.prototype.forEach.call(document.querySelectorAll('.tl-mb'), function(x) { x.classList.remove('on'); });
    b.classList.add('on');
    mode = b.getAttribute('data-m');
    renderMode(mode);
  });

  renderMode(mode);

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://raw.githubusercontent.com/FNTDUG/characters.json/refs/heads/main/json', true);
  xhr.onload = function() {
    var units;
    try { units = JSON.parse(xhr.responseText); } catch(e) { return; }
    units.forEach(function(u) { unitMap[u.name] = {img: u.imgNormal || '', rarity: u.rarity || ''}; });
    renderMode(mode);
  };
  xhr.onerror = function() { renderMode(mode); };
  xhr.send();
})();
