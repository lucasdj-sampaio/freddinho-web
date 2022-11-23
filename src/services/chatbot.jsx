export default function createChat(url) {
  window.watsonAssistantChatOptions = {
    integrationID: 'ff61f9af-d4e5-4af7-a291-de7fb8f3dff7', // The ID of this integration.
    region: 'us-south', // The region your integration is hosted in.
    serviceInstanceID: 'a74e97b6-5ebc-42fa-a8fd-9645d7a59dbd',
    // The ID of your service instance.
    onLoad(instance) {
      if (window.location.pathname.includes(url)) {
        instance.render();
      }
    },
  };
  setTimeout(() => {
    const t = document.createElement('script');
    t.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${
      window.watsonAssistantChatOptions.clientVersion || 'latest'
    }/WatsonAssistantChatEntry.js`;
    document.head.appendChild(t);
  });
}
