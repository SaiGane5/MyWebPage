const project = [
  {
    id: 1,
    name: "VidyaRANG",
    description: ["Applied Retrieval-Augmented Generation (RAG) techniques for interactive course material chats and developed the VidyaRANG application to serve as a personalized student companion. ","Developed a Flask application for file uploads to an Amazon S3 bucket. ","Implemented a CI/CD pipeline using AWS CodeDeploy and CodePipeline services to automatically update code on AWS EC2 upon commits to the GitHub repository. "],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHih_sVC4jYZMCTkpiXFWPgyxO_IolCNRDnWm4qQ9xNmlEKIZAPPv0bL1JmdmpLLDoy0&usqp=CAU"
  },
  {
    id: 2,
    name: "ISBChatBot",
    description: ["Implemented a hybrid approach that can fetch information from web if it didn’t get info from context"],
    img: "data:image/jpeg;base64,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"
  }
];
export default project;