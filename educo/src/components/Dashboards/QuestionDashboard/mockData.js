export default function mockData(id){
  var questionsData = `{
  "0": {
    "author": "Isaiah B.",
    "title": "Scratch Set Up Help",
    "text": "I’m working on the social impact game, and I’m having trouble setting up Scratch on my computer. I followed the tutorial but I can’t seem to get it working. It keeps freezing past the login screen. I tried resetting my computer, but that does not help me. Can someone help?",
    "tags":[
      "scratch",
      "spring 2020"
    ],
    "solved": true,
    "upvotes": 0,
    "attachements":[
      {
     "img": "https://u.cubeupload.com/XxShazammxX/forumsamended.jpg",
     "title": "scratch.jpg"
      },
      {
       "img": "https://zdnet1.cbsistatic.com/hub/i/r/2019/08/20/b3fbfed9-ec64-4efc-a7af-f0360ba90a08/resize/1200x900/755e999f592b0e0d7a21f93536a81d35/scratch3-on-raspbian-cropped1.png",
      "title": "log_in.jpg"
      }
    ],
    "threads": [ 
      {"text": 
        [{"author":"stephanie", 
        "comment": "Have you tried looking at the FAQs?"
        },
        {"author": "Isaiah B.", 
          "comment": "Oh that works! Thanks so much"
        },
        {"author": "stephanie", 
          "comment": "no problem, always try to look at that first!"
        }],
        "accepted":true
        },
        {"text": [
          {"author": "austin", 
          "comment": "maybe try restarting your computer?"
          },
          {"author": "Isaiah B.", 
          "comment": "that didn't work"
          }],
          "accepted": false
        }
      ]
  },
  "1": {
    "author": "stephanie",
    "title": "Ideas to prototype timeline",
    "text": "I was wondering how much time it would take to make my chatbot from a paper idea to a working chatbot? My student are wondering what to expect, and I thought to ask online to get some advice.",
    "solved": false,
    "tags":[
      "chatbot",
      "facillitator Qs"
    ],
    "upvotes": 0,
    "attachements":[
      {
     "img": "http://chiefdisruptionofficer.com/wp-content/uploads/2014/03/ux_paper1.jpg",
     "title": "my prototype"
      }
    ],
    "threads": [ 
      {"text": 
        [{"author":"Isaiah B.", 
        "comment": "Maybe around 2-3 weeks? Our teams only meet once a week though, so maybe it will be different depending on your school or team."
        },
        {"author": "stephanie", 
        "comment": "That makes sense! I didn't realize how different team scheudles were!"
        }],
        "accepted":true
        }
      ]
  },
  "2": {
    "author": "Isaiah B.",
    "title": "Breakable loop in Scratch?",
    "text": "How do you make a breakable loop in Scratch? I'm using Scratch 2.0 and can't find any good way to make a loop breakable, from inside of the loop itself.",
    "tags":[
      "scratch",
      "spring 2020",
      "coding"
    ],
    "solved": true,
    "upvotes": 0,
    "attachements":[],
    "threads": []
  }
}`;
  
  var questionJson = JSON.parse(questionsData);
  return questionJson[id];
}



