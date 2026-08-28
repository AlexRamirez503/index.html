(async()=>{const r=await fetch('https://cdn.jsdelivr.net/npm/@foxreis/tizentube/dist/userScript.js?v='+Date.now());let s=await r.text();s=s.replaceAll('TizenTube','AztvTube');(0,eval)(s);})();
