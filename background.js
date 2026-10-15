// Altere aqui com os dados do seu servidor Proxy
const proxyConfig = {
  mode: "fixed_servers",
  rules: {
    singleProxy: {
      scheme: "http", // pode ser "http", "https", ou "socks5"
host: "ip.do.seu.proxy",  // Coloque o IP ou o domínio real aqui
port: 443                 // Coloque a porta real aqui (ex: 80, 443, 3128, 8080)

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
