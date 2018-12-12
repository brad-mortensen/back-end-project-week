
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {
          "id": 1,
          "username": "wbartrap0",
          "password": "Iiao3st"
        }, {
          "id": 2,
          "username": "hjammet1",
          "password": "JIYx9gsk"
        }, {
          "id": 3,
          "username": "cdoggett2",
          "password": "CXDqnPVkay"
        }, {
          "id": 4,
          "username": "jbeaudry3",
          "password": "Y85mRFkJtomk"
        }, {
          "id": 5,
          "username": "amcneely4",
          "password": "DA7kNbKxWi"
        }, {
          "id": 6,
          "username": "nstreeting5",
          "password": "Dz5obc"
        }, {
          "id": 7,
          "username": "asive6",
          "password": "MU5wak8Ro"
        }, {
          "id": 8,
          "username": "iritchman7",
          "password": "uVsqP3gYU"
        }, {
          "id": 9,
          "username": "hkonneke8",
          "password": "LSUfPDcVSN"
        }, {
          "id": 10,
          "username": "kstille9",
          "password": "fx80Ff7h"
        }, {
          "id": 11,
          "username": "ekingslya",
          "password": "ijthijJEJvmj"
        }, {
          "id": 12,
          "username": "ibolsoverb",
          "password": "sJjWuIwSdB"
        }, {
          "id": 13,
          "username": "carendsc",
          "password": "YObBzFuQu"
        }, {
          "id": 14,
          "username": "cguilloneaud",
          "password": "40F3RLfIub"
        }, {
          "id": 15,
          "username": "jprayere",
          "password": "dg5XevFo"
        }, {
          "id": 16,
          "username": "kmularkeyf",
          "password": "LvSROhbCt"
        }, {
          "id": 17,
          "username": "egooderg",
          "password": "TSTG9GJ36R"
        }, {
          "id": 18,
          "username": "scaleyh",
          "password": "K6KVFH4AAfo"
        }, {
          "id": 19,
          "username": "fshiltoni",
          "password": "DRgaRdYF"
        }, {
          "id": 20,
          "username": "cmeyerj",
          "password": "GGseXn3A"
        }, {
          "id": 21,
          "username": "hmcgeacheyk",
          "password": "vRsXUccB"
        }, {
          "id": 22,
          "username": "aroubyl",
          "password": "Clge7GzQ7"
        }, {
          "id": 23,
          "username": "kderobertism",
          "password": "yTci4vw7cIcX"
        }, {
          "id": 24,
          "username": "jcharlon",
          "password": "Z5lKPDF8"
        }, {
          "id": 25,
          "username": "sduffreeo",
          "password": "1A6VUZd7Q"
        }  
      ]);
    });
};

