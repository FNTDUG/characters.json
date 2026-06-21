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
    "all": {
      "Astral Bonnie": "Godlike AOE damage and insane passives. Best in the game.",
      "Dragon Endo 01": "Highest single-target burst. Essential endgame pick.",
      "Golden Freddy": "Unmatched support and damage hybrid. Must-have carry.",
      "Frozen King Foxy": "Elite CC and damage combo. Top-tier in every mode.",
      "Frostmancer Withered Bonnie": "Best slow and DPS synergy. Endgame staple.",
      "Stormbound Chica": "Add your note here.",
      "Kronos Endo Freddy": "Add your note here."
    },
    "starter": {
      "Golden Freddy": "Add your note here."
    },
    "support": {
      "Astral Bonnie": "Add your note here.",
      "Dragon Endo 01": "Add your note here.",
      "Golden Freddy": "Add your note here.",
      "Frozen King Foxy": "Add your note here.",
      "Stormbound Chica": "Add your note here.",
      "Kronos Endo Freddy": "Add your note here."
    },
    "stun": {
      "Frostmancer Withered Bonnie": "Add your note here.",
      "Kronos Endo Freddy": "Add your note here."
    }
  },
  "notes": {
    "all": "",
    "starter": "",
    "support": "",
    "stun": ""
  }
};
  var lists = cfg.lists || {};
  var allMsg = cfg.msg || {};
  function getModeMsg() {
    var m = allMsg[mode];
    return (m && typeof m === 'object') ? m : allMsg;
  }
  function ordinal(n) {
    var s = ['th','st','nd','rd'];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }
  function countUnits(m) {
    var ls = lists[m] || {};
    var n = 0;
    TIERS.forEach(function(t) { n += (ls[t.id] || []).length; });
    return n;
  }
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
    NEW:  'https://primary.jwwb.nl/public/g/h/p/temp-xkzspsgvvlzquzykopjj/2-background-removed-high.png?enable-io=true&crop=1%3A1&width=1920',
    BUG:  'https://primary.jwwb.nl/public/g/h/p/temp-xkzspsgvvlzquzykopjj/3-background-removed-high.png?enable-io=true&crop=1%3A1&width=1920',
    UP:   'https://primary.jwwb.nl/public/g/h/p/temp-xkzspsgvvlzquzykopjj/0-background-removed-high.png?enable-io=true&crop=1%3A1&width=347',
    DOWN: 'https://primary.jwwb.nl/public/g/h/p/temp-xkzspsgvvlzquzykopjj/1-background-removed-high.png?enable-io=true&crop=1%3A1&width=347'
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
    '#tlRoot{width:100vw;position:relative;left:50%;transform:translateX(-50%);background-color:#03030a;color:#fff;font-family:"Press Start 2P",monospace;border:1px solid rgba(246,155,85,1);padding-bottom:0;box-sizing:border-box}',
    '#tlRoot *{box-sizing:border-box}',
    '#tlHdr{position:sticky;top:0;z-index:9999;background:rgba(3,3,10,0.97);border-bottom:1px solid rgba(246,155,85,1);padding:12px 18px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}',
    '#tlTitle{font-family:"Press Start 2P",monospace;font-size:clamp(15px,4vw,24px);color:#681f62;text-shadow:0 0 14px rgba(104,31,98,0.85);white-space:nowrap}',
    '.tl-mode{display:flex;gap:6px;flex-wrap:wrap}',
    '.tl-mb{font-family:"Press Start 2P",monospace;font-size:clamp(9px,2.4vw,12px);padding:11px 14px;background:rgba(0,0,0,0.55);border:2px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.38);cursor:pointer;white-space:nowrap;transition:all .15s}',
    '.tl-mb:hover{border-color:rgba(255,255,255,0.3);color:rgba(255,255,255,0.65)}',
    '.tl-mb.on{background:rgba(104,31,98,0.18);border-color:#681f62;color:#681f62;box-shadow:0 0 12px rgba(104,31,98,0.5),inset 0 0 12px rgba(104,31,98,0.12);text-shadow:0 0 8px rgba(104,31,98,0.85)}',
    '#tlList{padding:10px;display:flex;flex-direction:column;gap:4px}',
    '.tl-row{display:flex;min-height:76px;border-radius:6px;border:none;background-size:cover;background-position:center center}',
    '.tl-lbl{width:82px;min-width:82px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:6px 4px;gap:2px;background:rgba(4,4,14,1);border-radius:5px 0 0 5px;border-right:1px solid rgba(255,255,255,.07)}',
    '.tl-st{font-family:"Press Start 2P",monospace;font-size:clamp(12px,3.5vw,17px);letter-spacing:1px;line-height:1;color:#c862be}',
    '.tl-nm2{font-family:Arial,Helvetica,sans-serif;font-weight:800;font-size:clamp(26px,7vw,36px);line-height:1.1;color:#c862be;text-shadow:0 0 14px #681f62,0 0 30px #681f62}',
    '.tl-row[data-t=s] .tl-st,.tl-row[data-t=s] .tl-nm2{color:#ff7f7f;text-shadow:0 0 14px #8b0000,0 0 30px #8b0000}',
    '.tl-row[data-t=a] .tl-st,.tl-row[data-t=a] .tl-nm2{color:#ffbf7f;text-shadow:0 0 14px #7a3500,0 0 30px #7a3500}',
    '.tl-row[data-t=b] .tl-st,.tl-row[data-t=b] .tl-nm2{color:#ffff6d;text-shadow:0 0 14px #7a7a00,0 0 30px #7a7a00}',
    '.tl-row[data-t=c] .tl-st,.tl-row[data-t=c] .tl-nm2{color:#bfff7f;text-shadow:0 0 14px #3a6600,0 0 30px #3a6600}',
    '.tl-band{flex:1;border-radius:0 5px 5px 0}',
    '.tl-row[data-t=ss] .tl-band{background:rgba(200,98,190,0.2)}',
    '.tl-row[data-t=s]  .tl-band{background:rgba(255,127,127,0.18)}',
    '.tl-row[data-t=a]  .tl-band{background:rgba(255,191,127,0.18)}',
    '.tl-row[data-t=b]  .tl-band{background:rgba(255,255,109,0.18)}',
    '.tl-row[data-t=c]  .tl-band{background:rgba(191,255,127,0.18)}',
    '.tl-units{display:flex;flex-wrap:wrap;gap:6px;padding:6px;align-content:flex-start;min-height:76px;width:100%}',
    '.tl-card{border-radius:10px;padding:2px;border:none;flex-shrink:0;width:72px;height:72px;cursor:default;position:relative;box-sizing:border-box}',
    '.tl-cin{width:100%;height:100%;border-radius:8px;overflow:hidden;background:rgba(34,34,34,0.85)}',
    '.tl-cin img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block;pointer-events:none}',
    '#tlTip{position:absolute;font-family:"Press Start 2P",monospace;font-size:8px;line-height:1.7;background:rgba(6,3,18,0.97);border:2px solid #681f62;color:#fff;padding:9px 12px;border-radius:6px;text-align:center;pointer-events:none;opacity:0;transition:opacity .18s;z-index:10000;max-width:200px;word-break:break-word;display:none}',
    '.tl-msg{padding:24px;text-align:center;color:rgba(255,255,255,.35);font-size:12px;width:100%}',

    '#tlNote{padding:10px 18px;font-family:Press Start 2P,monospace;font-size:10px;line-height:2;color:rgba(246,155,85,0.9);background:rgba(3,3,10,0.97);border-bottom:1px solid rgba(246,155,85,1);display:none}',
    '#tlCount{font-family:Press Start 2P,monospace;font-size:clamp(10px,2.6vw,14px);color:#c862be;text-shadow:0 0 8px #c862be,0 0 18px #681f62;white-space:nowrap;margin-left:6px}',
    '#tlSearch{padding:10px 10px;display:flex;justify-content:center;background:rgba(3,3,10,0.97);border-bottom:1px solid rgba(246,155,85,1)}',
    '#tlSearchInput{font-family:"Press Start 2P",monospace;font-size:10px;background:rgba(0,0,0,0.6);border:1px solid rgba(104,31,98,0.6);color:#c862be;padding:9px 14px;width:340px;max-width:90%;outline:none;letter-spacing:1px}',
    '#tlSearchInput::placeholder{color:rgba(200,98,190,0.35)}',
    '#tlSearchInput:focus{border-color:#c862be;box-shadow:0 0 10px rgba(200,98,190,0.45)}',
    '@keyframes tlBlink{0%,49%{box-shadow:0 0 0 3px #ffff00,0 0 12px #ffff00}50%,100%{box-shadow:0 0 0 3px transparent,0 0 0 transparent}}',
    '.tl-match{animation:tlBlink 1.6s step-end infinite}',
    '@keyframes shinyLoop{0%{background-position:0% 50%}100%{background-position:200% 50%}}',
    '@media(max-width:600px){#tlHdr{padding:8px 10px;gap:6px}#tlTitle{font-size:8px}.tl-mb{font-size:6px;padding:6px 8px}#tlList{padding:6px 3px}.tl-lbl{width:64px;min-width:64px}.tl-nm2{font-size:22px}.tl-st{font-size:11px}.tl-card{width:48px;height:48px}.tl-units{gap:3px;padding:4px;min-height:56px}.tl-row{min-height:56px}}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = CSS;
  (document.head || document.documentElement).appendChild(style);

  var BG = 'data:image/jpeg;base64,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';
  var root = document.createElement('div');
  root.id = 'tlRoot';


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
  var countEl = document.createElement('span');
  countEl.id = 'tlCount';
  hdr.appendChild(ttl);
  hdr.appendChild(modeDiv);
  hdr.appendChild(countEl);
  root.appendChild(hdr);

  var noteEl = document.createElement('div');
  noteEl.id = 'tlNote';
  root.appendChild(noteEl);

  var searchEl = document.createElement('div');
  searchEl.id = 'tlSearch';
  var searchInp = document.createElement('input');
  searchInp.id = 'tlSearchInput';
  searchInp.type = 'text';
  searchInp.placeholder = 'SEARCH...';
  searchInp.autocomplete = 'off';
  searchInp.spellcheck = false;
  searchEl.appendChild(searchInp);
  root.appendChild(searchEl);

  var list = document.createElement('div');
  list.id = 'tlList';
  var TIER_BG_POS = {ss:'50% 0%',s:'50% 25%',a:'50% 50%',b:'50% 75%',c:'50% 100%'};
  TIERS.forEach(function(t) {
    var row = document.createElement('div');
    row.className = 'tl-row';
    row.setAttribute('data-t', t.id);
    row.style.backgroundImage = 'url(' + BG + ')';
    row.style.backgroundPosition = TIER_BG_POS[t.id] || '50% 50%';
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
      this.style.cssText = 'width:100%;height:100%;background:#1a1a2e;display:block';
      this.removeAttribute('src');
    };
    inn.appendChild(img);
    card.appendChild(inn);
    if (isSSZone) {
      var tip = getModeMsg()[name];
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
      b.style.cssText = 'position:absolute;width:26px;height:26px;' + CORNERS[i] + ';pointer-events:none;z-index:3;image-rendering:auto';
      card.appendChild(b);
    });
    return card;
  }

  function applySearch() {
    var inp = document.getElementById('tlSearchInput');
    if (!inp) return;
    var q = inp.value.trim().toLowerCase();
    document.querySelectorAll('.tl-card').forEach(function(card) {
      var img = card.querySelector('img');
      var name = img ? img.alt.toLowerCase() : '';
      if (q && name.indexOf(q) !== -1) {
        card.classList.add('tl-match');
      } else {
        card.classList.remove('tl-match');
      }
    });
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
    var cEl = document.getElementById('tlCount');
    if (cEl) { var tot = countUnits(m); cEl.textContent = tot > 0 ? ('1st - ' + ordinal(tot)) : ''; }
    var nEl = document.getElementById('tlNote');
    if (nEl) { var note = ((cfg.notes || {})[m] || '').trim(); nEl.textContent = note; nEl.style.display = note ? 'block' : 'none'; }
    applySearch();
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

  document.getElementById('tlSearchInput').addEventListener('input', applySearch);

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
