// Altere aqui com os dados do seu servidor Proxy
const proxyConfig = {
  mode: "fixed_servers",
  rules: {
    singleProxy: {
      scheme: "http", // pode ser "http", "https", ou "socks5"
      host: "127.0.0.1", // IP do seu proxy
      port: 8080        // Porta do seu proxy
    },
    bypassList: ["localhost", "127.0.0.1"] // Sites que NÃO vão passar pelo proxy
  }
};

// Ativa o proxy assim que a extensão é carregada
chrome.runtime.onInstalled.addListener(() => {
  chrome.proxy.settings.set(
    { value: proxyConfig, scope: "regular" },
    () => { console.log("Proxy configurado com sucesso!"); }
  );
});
