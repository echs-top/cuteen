document.addEventListener('alpine:init', () => { const mediaquery = window.matchMedia('(prefers-color-scheme: dark)'); function getThemeFromLocalStorage(a=0) { if (localStorage.theme === 'dark' || (!('theme' in localStorage) && mediaquery.matches)) { if(a!=1){document.documentElement.classList.add('dark');} document.cookie = "dark=true;path=/";return true; } else { if(a!=1){document.documentElement.classList.remove('dark');} document.cookie = "dark=light;path=/";return false; } } mediaquery.addListener(getThemeFromLocalStorage); Alpine.data('data', () => ({ dark: getThemeFromLocalStorage(1), Copyright: 'Theme By <a href="https: autoTheme() { localStorage.removeItem('theme'); if (window.matchMedia('(prefers-color-scheme: dark)').matches) { this.dark = true; document.documentElement.classList.add('dark');document.cookie = "dark=true;path=/"; } else { this.dark = false; document.documentElement.classList.remove('dark');document.cookie = "dark=light;path=/"; } }, isProfileMenuOpen: false, toggleProfileMenu() { this.isProfileMenuOpen = !this.isProfileMenuOpen; }, closeProfileMenu() { this.isProfileMenuOpen = false; }, isPagesMenuOpen: false, togglePagesMenu() { this.isPagesMenuOpen = !this.isPagesMenuOpen; }, top() { var d = document,dd = document.documentElement,db = document.body,top = dd.scrollTop || db.scrollTop,step = Math.floor(top / 20); (function() {top -= step;if (top > -step) {dd.scrollTop == 0 ? db.scrollTop = top: dd.scrollTop = top;setTimeout(arguments.callee, 20);}})(); }, })); Alpine.store('switch', { searchtext:'', searchtype:'', isSearch: true, toggleSearch() { this.isSearch = !this.isSearch; }, isSideMenuOpen: true, toggleSideMenu() { this.isSideMenuOpen = !this.isSideMenuOpen; }, }); }) function sinnertip(type, msg){ var ico = type ? '<span class="d-block text-green-500 mb-2"><?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "- var c = type ? 'tips-success' : 'tips-error'; var html = '<section class="sinner-tips '+c+' sitips-open">'+ '<div class="fixed inset-0 z-40 flex items-end backdrop-blur-md bg-black/30 sm:items-center sm:justify-center"></div>'+ '<div class="fixed top-0 left-0 z-50 flex justify-center justify-items-center items-center w-full h-full border dark:border-gray-600"><div class="tips-body rounded pb-6 max-w-xs bg-gray-50 text-lu dark:text-white dark:bg-gray-600">'+ '<div class="rounded-t py-2 bg-luhead bg-gray-100 dark:bg-black"><div class="mx-2 text-right"><button class="w-3 h-3 bg-gray-300 rounded-full mx-1 focus:outline-none"></button><button class="w-3 h-3 bg-gray-300 rounded-full mx-1 focus:outline-none"></button><button class="w-3 h-3 bg-gray-300 rounded-full mx-1 focus:outline-none"></button></div></div>'+ '<div class="text-center px-6"><div class="px-5 dark:text-gray-100 dark:border-gray-400">'+ico+'<div class="text-sm">'+msg+'</div></div></div></div></div></section>'; document.body.insertAdjacentHTML('beforeend',html); setTimeout(function(){ var tips=document.querySelector('.sinner-tips'); tips.classList.remove('sitips-open'); tips.classList.add('sitips-close'); setTimeout(function(){ tips.classList.remove('sitips-close'); tips.parentNode.removeChild(tips); },400); },1000); } function sinnertips(type, html){ var con = html; var html = '<section class="sinner-tips sitips-open">'+ '<div class="fixed inset-0 z-40 flex items-end backdrop-blur-md bg-black/30 sm:items-center sm:justify-center"></div>'+ '<div class="fixed top-0 left-0 z-50 flex justify-center justify-items-center items-center w-full h-full border dark:border-gray-600"><div class="tips-body rounded pb-6 max-w-'+type+' bg-gray-50 text-lu dark:text-white dark:bg-gray-600">'+ '<div class="rounded-t py-2 bg-luhead bg-gray-100 dark:bg-black"><div class="mx-2 text-right"><button class="w-3 h-3 bg-gray-300 rounded-full mx-1 focus:outline-none"></button><button class="w-3 h-3 bg-gray-300 rounded-full mx-1 focus:outline-none"></button><button class="w-3 h-3 bg-gray-300 rounded-full mx-1 focus:outline-none"></button></div></div>'+ '<div class="text-center px-6"><div class="px-5 dark:text-gray-100 dark:border-gray-400">'+con+'</div></div><div class="btn-close-tips" x-ref="closetips">\ <?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "- </div></div></div></section>'; document.body.insertAdjacentHTML('beforeend',html); [].slice.call(document.querySelectorAll('.btn-close-tips')).forEach(function (closebtn) { closebtn.onclick=function(){ var c=this.parentNode.parentNode.parentNode; c.classList.remove('sitips-open'); c.classList.add('sitips-close'); setTimeout(function(){ c.classList.remove('sitips-close'); c.remove(); },400); } }); } function popups(obj){ var img = obj.getAttribute('data-img'); var title = obj.getAttribute('data-title'); var desc = obj.getAttribute('data-desc'); var html = '<div class="text-center"><h6 class="mb-1 mt-2">' + title + '</h6>\ <div class="text-muted text-sm mb-2" > '+ desc + ' </div>\ <img src="' + img + '" alt="' + title + '" class="w-full h-auto">\ </div>' sinnertips('xs',html); } var storage = window.localStorage; function share(){ sinnertips('sm',document.querySelector('#single-share-template').innerHTML); var postQrcode = jrQrcode.getQrBase64(globals.post_url); document.querySelector(".weixin").setAttribute('data-img',postQrcode); document.querySelector(".qq").setAttribute('data-img',postQrcode); if(!storage.getItem('share_'+globals.post_id)){ var sha=document.querySelectorAll(".list-share a"); for (var i = 0; i < sha.length; i++) { sha[i].addEventListener("click",function(){ fetch(globals.ajax_url+'?share='+globals.post_id+'&do_action=do',{method: "POST",}).then(data => data.text()).then(data => { storage.setItem('share_'+globals.post_id, true); document.querySelector(".share-count").removeAttribute('x-text'); document.querySelector(".share-count").innerHTML=data.trim(); }); });}} } function reward(obj) { var wximg = obj.getAttribute('data-wx'); var tbimg = obj.getAttribute('data-tb'); var title = obj.getAttribute('data-title'); var wxdesc = obj.getAttribute('data-desc'); var tbdesc = obj.getAttribute('data-desc2'); var html = '<div class="text-center"><input type="radio" name="tab" id="wxpay" class="hidden" checked><input type="radio" name="tab" id="alipay" class="hidden"><h6 class="my-2">'+title+'</h6>\ <img class="wx-img hidden w-full h-auto" src="' + wximg + '" alt="' + title + '">\ <img class="tb-img hidden w-full h-auto" src="' + tbimg + '" alt="' + title + '">\ <div class="inline-block px-2 py-3 mt-2 text-sm rounded-full bg-gray-300 dark:bg-gray-500"><label for="wxpay"><span class="btn-wx cursor-pointer rounded-full py-2 px-3">'+wxdesc+'</span></label><label for="alipay"><span class="btn-wx cursor-pointer rounded-full py-2 px-3">'+tbdesc+'</span></label></div>\ </div>'; sinnertips('xs',html); } function like(obj){ var id=obj.getAttribute('data-id'); var html=obj.innerHTML; if(obj.classList.contains('requesting')){ return false; } obj.classList.add('requesting'); if(obj.getAttribute('data-action')=='like'){ if(storage.getItem('like_'+globals.post_id)){return false;} fetch(globals.ajax_url+'?likeup='+id+'&do_action=do',{method: "POST",}).then(data => data.text()).then(data => { storage.setItem('like_'+id, true); obj.classList.add('bg-red-500','dark:bg-red-500','text-white'); obj.innerHTML=html; obj.setAttribute('data-action', 'unlike'); sinnertip(1, __.thank_you) document.querySelector('.like-count').removeAttribute('x-text'); document.querySelector('.like-count').innerHTML=data.trim(); obj.classList.remove('requesting'); }); }else{ if(!storage.getItem('like_'+globals.post_id)){return false;} fetch(globals.ajax_url+'?likeup='+id+'&do_action=undo',{method: "POST",}).then(data => data.text()).then(data => { storage.removeItem('like_'+id); obj.classList.remove('bg-red-500','dark:bg-red-500','text-white'); obj.innerHTML=html; obj.setAttribute('data-action', 'like'); sinnertip(0, __.cancelled) document.querySelector('.like-count').removeAttribute('x-text'); document.querySelector('.like-count').innerHTML=data.trim(); obj.classList.remove('requesting'); }); } } window.main = {}; main.serialize = function(form){ var res = [], current = null, i, len, k, optionLen, option, optionValue, form = form; for(i=0, len=form.elements.length; i<len; i++){ current = form.elements[i]; if(current.disabled) continue; switch(current.type){ case "file": case "submit": case "button": case "image": case "reset": case undefined: break; case "select-one": case "select-multiple": if(current.name && current.name.length){ console.log(current) for(k=0, optionLen=current.options.length; k<optionLen; k++){ option = current.options[k]; optionValue = ""; if(option.selected){ optionValue = option.hasAttribute('value') ? option.value : option.text } res.push(encodeURIComponent(current.name) + "=" + encodeURIComponent(optionValue)); } } break; case "radio": case "checkbox": if(!current.checked) break; default: if(current.name && current.name.length){ res.push(encodeURIComponent(current.name) + "=" + encodeURIComponent(current.value)); } } } return res.join("&"); } function Limg() { var viewHeight = document.documentElement.clientHeight var t = document.documentElement.scrollTop || document.body.scrollTop; var limg = document.querySelectorAll("[data-xurl]") Array.prototype.forEach.call(limg, function(item, index) { var rect if(item.getAttribute("data-xurl") === "") return rect = item.getBoundingClientRect() if(rect.bottom >= 0 && rect.top < viewHeight) { (function() { var img = new Image(); var qq=item.getAttribute("data-type"); if(item.nodeName==='IMG'){ if(qq&&qq=="qqtx"){ fetch(item.getAttribute("data-xurl")).then(data => data.json()).then(data => { img.src = data.url; img.onload = function(){ item.src = img.src; item.classList.add('ojbk'); } }); }else{ img.src = item.getAttribute("data-xurl"); img.onload = function(){ item.src = img.src; item.classList.add('ojbk');} }} else{if(item.nodeName==='A'||item.nodeName==='DIV'){ img.src = item.getAttribute("data-xurl"); img.onload = function(){ item.style.backgroundImage='url("'+img.src+'")'; item.classList.add('ojbk'); } } } item.removeAttribute('data-xurl') })() } }) } main.ajaxcomment = function(){ var commentform=document.querySelector("#commentform"); if(commentform){ commentform.addEventListener("submit",function(event){ event.preventDefault(); var params = main.serialize(commentform);params += '&themeAction=comment'; var buttonhtml=document.querySelector('#submit').innerHTML; var appendComment = function(comment){ var el = document.querySelector('#comments > .comment-list'); var pl = " comment-parent"; if(0 != comment.parent){ pl = " children"; var el = document.querySelector('#li-comment-'+comment.parent); if(el.querySelectorAll('.comment-list').length <1){ el.insertAdjacentHTML('beforeend', '<ol class="comment-list"></ol>'); } el = document.querySelector('#li-comment-'+comment.parent+' .comment-list'); } if(!el){ document.querySelector('#comments').insertAdjacentHTML('beforeend', '<ol class="comment-list"></ol>'); el = document.querySelector('#comments > .comment-list'); } var html = '<div id="div-comment-'+comment.coid+'" class="comment-body'+pl+' comment-ajax"><article id="div-comment-'+comment.coid+'" class="flex comment-body my-4 py-md-2"><div class="flex-initial comment-avatar flex-avatar bg-light mr-3"><img alt="" src="'+comment.avatar+'" class="w-12 rounded-full scrollLoading" height="48" width="48"></div><div class="flex-initial w-full text-sm"><div class="comment-author mb-1"><div class="flex items-center"><a href="'+comment.permalink+'" target="_blank" rel="external nofollow">'+comment.author+'</a>'+comment.sf+'<span class="mx-1"></span></div></div><div class="comment-content px-4 py-2 rounded text-gray-700 dark:bg-gray-800 dark:text-white">'+comment.content+'</div><div class="comment-meta text-xs text-gray-700 mt-1 dark:text-white"><time class="mr-1 text-gray-500">刚刚</time><span class="mr-1 text-gray-500">'+comment.os+'</span><span class="text-muted">'+comment.status+'</span></div></div></article></div>'; el.insertAdjacentHTML('afterbegin', html); }; var submit=document.querySelector('#submit'); submit.setAttribute('disabled','disabled'); submit.innerHTML='<svg class="animate-spin h-5 w-5 text-white m-auto" xmlns="http: fetch(globals.post_url+"?"+params,{method: "POST",}).then(data => data.json()).then(data => { if(data.status==1){ appendComment(data.comment); document.querySelector('#comment').value=''; TypechoComment.cancelReply(); sinnertip(1, __.success); main.ajaxcommentfinish(); }else{ var tishi=undefined === data.msg ? '评论返回数据异常' : data.msg; sinnertip(0, tishi); } document.querySelector('#submit').disabled=''; document.querySelector('#submit').innerHTML=buttonhtml; }).catch(error => { var tishi=undefined === data.msg ? '评论失败请重试' : data.msg; sinnertip(0, tishi); document.querySelector('#submit').disabled=''; document.querySelector('#submit').innerHTML=buttonhtml; }); return false; }); } } main.password = function(){ var passwordform=document.querySelector(".protected") if(passwordform){ passwordform.addEventListener("submit",function(event){ event.preventDefault(); var surl=this.getAttribute('action'); fetch(surl+'&'+main.serialize(passwordform),{method: "POST",}).then(data => data.text()).then(data => { if(data.indexOf('name="protectPassword"') >= 0 ||data.indexOf("您输入的密码错误") >= 0) { sinnertip(0, "密码错误，请重试！"); }else{ sinnertip(1, "密码正确，请等待页面刷新！"); var zhongzhuan = document.createElement("div"); zhongzhuan.innerHTML=data; document.querySelector(".post-content").innerHTML=zhongzhuan.querySelectorAll(".post-content")[0].innerHTML; main.ajaxcommentfinish(); } }); }); } } main.search = function(){ var search=document.querySelector("#search"); if(search){ search.addEventListener("submit",function(event){ event.preventDefault(); var link=document.querySelector("#searchurl"); link.dispatchEvent(new MouseEvent("mouseover")); link.click(); Alpine.store('switch').toggleSearch(); Alpine.store('switch').searchtext=''; return false; }); } } main.windows=function(){ if(navigator.userAgentData){ navigator.userAgentData.getHighEntropyValues(["platformVersion"]) .then(ua => { if (navigator.userAgentData.platform === "Windows") { const majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]); if (majorPlatformVersion >= 13) { document.cookie = "win11=true;path=/"; } } });} } main.fancybox=function(){ cn={ CLOSE: "关闭", NEXT: "下一张", PREV: "上一张", MODAL: "您可以使用 ESC 键关闭此模式", ERROR: "出现错误，请稍后再次尝试", IMAGE_ERROR: "未找到图片", ELEMENT_NOT_FOUND: "找不到 HTML 内容", AJAX_NOT_FOUND: "AJAX 加载错误：未找到", AJAX_FORBIDDEN: "AJAX 加载错误：禁止", IFRAME_ERROR: "加载页面时出错", TOGGLE_ZOOM: "缩放", TOGGLE_THUMBS: "切换缩略图", TOGGLE_SLIDESHOW: "播放/暂停幻灯片", TOGGLE_FULLSCREEN: "切换全屏模式", DOWNLOAD: "下载", }; Fancybox.defaults.l10n = cn; var fancybox=document.querySelectorAll(".fancycon img"); if(fancybox){ fancybox.forEach((value, index) => { var element = document.createElement("a"); if(fancybox[index].getAttribute('src')){ if(!fancybox[index].parentElement.getAttribute('href')&&fancybox[index].getAttribute('src').indexOf('/TePass')<0&&!fancybox[index].getAttribute("nofancybox")){ element.setAttribute("href", fancybox[index].getAttribute('src')); if(fancybox[index].getAttribute('data-url')){ element.setAttribute("href", fancybox[index].getAttribute('data-url')); } element.classList.add("shortcode","item"); element.setAttribute("data-fancybox", "gallery"); element.setAttribute("target", "_blank"); element.setAttribute("data-caption", fancybox[index].getAttribute('alt')); element.setAttribute("title", fancybox[index].getAttribute('alt')); fancybox[index].parentNode.insertBefore(element, fancybox[index]); fancybox[index].parentNode.removeChild(fancybox[index]); element.appendChild(fancybox[index]); } } });} } main.code=function(){ if(globals.hljs=="on"){ hljs.highlightAll(); if(globals.lines=="on"){lines();} if(globals.copycode=="on"){ var pres = document.querySelectorAll("pre"); if (document.getElementById("post")){ for (var i = 0; i < pres.length; i++) { var t = pres[i].getElementsByTagName("code")[0].textContent; var btn = document.createElement("button"); btn.classList.add("copy","dark:text-white","absolute","top-0","right-0","p-2","text-xs"); btn.setAttribute("data-clipboard-text", t.trim()); btn.setAttribute("aria-label", "复制"); var textnode=document.createTextNode(""); btn.appendChild(textnode) pres[i].insertBefore(btn,pres[i].childNodes[0]); var c = new ClipboardJS(btn); c.on('success', function(e) { e.trigger.classList.add('copyed'); setTimeout(() => {e.trigger.classList.remove('copyed');}, 2000); e.clearSelection(); }); c.on('error', function(e) { e.trigger.classList.add('copyerror'); }); } } } } } main.ajaxcommentfinish=function(){ main.code();main.fancybox(); } main.init = function(){ if(document.getElementsByClassName('OwO')[0]){ var biaoqingapi=globals.theme_url+'assets/OwO.json?2022'; if(globals.biaoqing.length>1){biaoqingapi=globals.biaoqing;} var OwO_demo = new OwO({ container: document.getElementsByClassName('OwO')[0]， target: document.getElementsByClassName('OwO-textarea')[0], api: biaoqingapi, position: 'down', width: '66vw', maxHeight: '250px' }); } var likebtn=document.querySelector(".btn-like"); var like=document.querySelector('.btn-like[data-action="like"]'); if(globals.post_id!=0&&likebtn){ if(storage.getItem('like_'+globals.post_id)&&like){ like.setAttribute('data-action', 'unlike'); like.classList.add('bg-red-500','dark:bg-red-500','text-white'); } } var PrivateComments=document.getElementById("PrivateComments"); if(PrivateComments){ var holder = document.getElementById("comment").getAttribute('placeholder'); PrivateComments.addEventListener('change', function () { if(PrivateComments.checked){ document.getElementById("comment").setAttribute("placeholder","正在隐私评论中..."); }else{ document.getElementById("comment").setAttribute("placeholder",holder); } });} var mail=document.getElementById("mail"); if(mail){ mail.onblur = function() { var mailcon=mail.value; if(mailcon.length>5){ fetch(globals.ajax_url+"?xid="+mailcon+"&info=1").then(data => data.json()).then(data => { var author=document.getElementById("author"); var url=document.getElementById("url"); document.getElementById("pltx").setAttribute("src",data.url); if(author.value.length<1){ author.value=data.info.author; } if(url.value.length<1){ url.value=data.info.url; } }) }}} window.addEventListener("scroll",function () { var topbtn = document.getElementById('widget-to-top'); var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; scroll >= 50 ? topbtn.classList.remove("scale-0") : topbtn.classList.add("scale-0"); }); var clipboard = new ClipboardJS('.copybtn'); clipboard.on('success', function(e) { sinnertip(1, "复制成功！"); e.clearSelection(); }); clipboard.on('error', function(e) { sinnertip(0, "复制失败！"); }); } main.all = function(){ Limg(); main.init(); main.code(); main.fancybox(); main.ajaxcomment(); main.search(); main.password(); main.windows(); window.onscroll = function(){Limg();} }; main.all();
