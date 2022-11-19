export default function createChat(url) {
  window.watsonAssistantChatOptions = {
    integrationID: '522ab48c-3799-4493-9cb2-fda6738666ca', // The ID of this integration.
    region: 'au-syd', // The region your integration is hosted in.
    serviceInstanceID: 'd49713dd-cdac-4bae-8394-920d98824e24',
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
