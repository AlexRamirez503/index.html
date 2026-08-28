(()=>{
  const ORIGINAL='https://cdn.jsdelivr.net/npm/@foxreis/tizentube/dist/userScript.js?v='+Date.now();

  function renameText(root=document){
    try{
      if(document.title && document.title.includes('TizenTube')) document.title=document.title.replaceAll('TizenTube','AztvTube');
      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
      const nodes=[];
      while(walker.nextNode()) nodes.push(walker.currentNode);
      for(const n of nodes){
        if(n.nodeValue && n.nodeValue.includes('TizenTube')) n.nodeValue=n.nodeValue.replaceAll('TizenTube','AztvTube');
      }
    }catch(e){}
  }

  const script=document.createElement('script');
  script.src=ORIGINAL;
  script.async=false;
  script.onload=()=>{
    renameText();
    const obs=new MutationObserver(muts=>{
      for(const m of muts){
        for(const n of m.addedNodes){
          if(n.nodeType===Node.TEXT_NODE){
            if(n.nodeValue && n.nodeValue.includes('TizenTube')) n.nodeValue=n.nodeValue.replaceAll('TizenTube','AztvTube');
          }else if(n.nodeType===Node.ELEMENT_NODE){
            renameText(n);
          }
        }
      }
    });
    obs.observe(document.documentElement,{childList:true,subtree:true,characterData:true});
  };
  (document.head||document.documentElement).appendChild(script);
})();
