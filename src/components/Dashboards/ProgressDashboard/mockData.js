export default function mockData(){
  var taskData = `{"tasks":
  [{
    "team": ["Isaiah"],
    "title": "Create 5/2/2020 Slide Deck",
    "deadline": "4/25/2020",
    "thread": [],
    "updated": false
  },
  {
    "team": ["stephanie"],
    "title": "Grade team A's project",
    "deadline": "4/26/2020",
    "thread": [
    {"author": "stephanie",
      "text": "Can I get some input on the second criteria?",
      "author_img":"https://camo.githubusercontent.com/cedfeb773d556207354446cae801f818845a7619/68747470733a2f2f692e696d6775722e636f6d2f62513349524d452e6a70673f31"
    },
    {"author": "austin",
      "text": "How about we focus on creatvitiy?",
      "author_img" :"https://camo.githubusercontent.com/49938420eecf18cbb3b46e70bd39aad4c862c8c2/68747470733a2f2f696d6775722e636f6d2f737842627747672e6a7067"
    }],
    "updated": true
  },
  {
    "team": ["Isaiah", "austin"],
    "title": "debrief",
    "deadline": "4/27/2020",
    "thread": [],
    "updated": false
  }]
}`
    
  
  var taskJson = JSON.parse(taskData);
  return taskJson.tasks;
}



