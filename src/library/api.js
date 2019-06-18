function toQuery(obj) {
   var k, i, tmp, str='';

   for (k in obj) {
      if ((tmp = obj[k]) !== void 0) {
         if (Array.isArray(tmp)) {
            for (i=0; i < tmp.length; i++) {
               str && (str += '&');
               str += encodeURIComponent(k) + '=' + encodeURIComponent(tmp[i]);
            }
         } else {
            str && (str += '&');
            str += encodeURIComponent(k) + '=' + encodeURIComponent(tmp);
         }
      }
   }

   return str;
}

export const graph = {

   get: async function (query = '', params = {}, preload = null) {

      const url = 'graph.json?query=' + query + '&' + toQuery(params);
      const req = await (preload ? preload.fetch(url) : fetch(url));

      return req.json();
   }
}