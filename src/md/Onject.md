{
  "users": {
    "user_id_1": {
      "username": "user1",
      "email": "user1@example.com",
      "date_created": "2023-03-26"
    },
    "user_id_2": {
      "username": "user2",
      "email": "user2@example.com",
      "date_created": "2023-03-27"
    }
  },


  
  "questions": {
    "question_id_1": {
      "title": "What is Firebase Realtime Database?",
      "description": "I am new to Firebase and want to learn more about its Realtime Database. Can someone please explain what it is and how it works?",
      "answers": {
        "answer_id_1": {
          "author": "user_id_2",
          "text": "Firebase Realtime Database is a NoSQL cloud-hosted database that stores and syncs data in real-time. You can use it to build responsive and collaborative apps that work offline and online.",
          "upvotes": 10,
          "downvotes": 2
        }
      }
    },
    "question_id_2": {
      "title": "How to integrate Firebase Authentication with my iOS app?",
      "description": "I am building an iOS app and want to use Firebase Authentication to manage user authentication. Can someone please guide me on how to integrate Firebase Authentication with my app?",
      "answers": {
        "answer_id_1": {
          "author": "user_id_1",
          "text": "You can use the Firebase SDK for iOS to integrate Firebase Authentication with your app. First, add Firebase to your app by following the setup instructions. Then, enable Firebase Authentication and configure your sign-in methods. Finally, use the Firebase Authentication APIs to sign users in and out of your app.",
          "upvotes": 5,
          "downvotes": 1
        },
        "answer_id_2": {
          "author": "user_id_2",
          "text": "In addition to the Firebase SDK for iOS, you can also use FirebaseUI to simplify the integration of Firebase Authentication with your app. FirebaseUI provides pre-built UI components for common sign-in flows, such as email and password, Google, and Facebook. You can customize these components to fit your app's design.",
          "upvotes": 7,
          "downvotes": 0
        }
      }
    }
  }
}   