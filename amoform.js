!function(){
    const e="#PROTOCOL#://formsen.amocrm.#DOMAIN#".replace("#PROTOCOL#","").replace("#DOMAIN#",""),
          t=()=>(window.amo_forms_params||{}).is_global||-1!==window.location.origin.indexOf(e),
          r=(e,r)=>(t()?"#PROTOCOL#://formsen.amocrm.#DOMAIN#":"#PROTOCOL#://forms.amocrm.#DOMAIN#").replace("#PROTOCOL#",e).replace("#DOMAIN#",r);
    var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};

    !function(){
        var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{};
        function t(e,t){return e(t={exports:{}},t.exports),t.exports}

        for(var r=t((function(e){
            var t,r,n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);
            n?(t=new Uint8Array(16),e.exports=function(){return n(t),t}):(r=new Array(16),e.exports=function(){
                for(var e,t=0;t<16;t++)!(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;
                return r
            })
        })), o=[], a=0; a<256; ++a) o[a]=(a+256).toString(16).substr(1);

        var i=function(e,t){
            t=t||0; var r=o;
            return [
                r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],"-",
                r[e[t++]],r[e[t++]],"-",
                r[e[t++]],r[e[t++]],"-",
                r[e[t++]],r[e[t++]],"-",
                r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],r[e[+t]]
            ].join("")
        };

                var s=function(e,t){
            var r=t||0,n=o;
            return n[e[r+0]]+n[e[r+1]]+n[e[r+2]]+n[e[r+3]]+"-"+n[e[r+4]]+n[e[r+5]]+"-"+n[e[r+6]]+n[e[r+7]]+"-"+n[e[r+8]]+n[e[r+9]]+"-"+n[e[r+10]]+n[e[r+11]]+n[e[r+12]]+n[e[r+13]]+n[e[r+14]]+n[e[r+15]]
        };

        var c=function(){
            var e=t((function(e){
                var t=r();
                e.exports=s(t)
            }));
            return e
        };

        var u=c(),
            l={},
            d={},
            f=function(e,t){
                return d[e]=t
            };

        l.uuid=u;
        l.define=f;
        var h=l;

        var p=h.uuid,
            v=h.define;

        v("amoenv",(function(){return{
            uuid: p,
            env: {
                domain: window.location.hostname,
                protocol: window.location.protocol,
                location: window.location.href
            },
            storage: {
                get: function(e){
                    try {
                        return JSON.parse(localStorage.getItem(e))
                    } catch(e){
                        return null
                    }
                },
                set: function(e,t){
                    try {
                        localStorage.setItem(e,JSON.stringify(t))
                    } catch(e){}
                }
            }
        }}));

        // Далее продолжается подключение и конфигурация формы amoCRM

        window.amo_forms_loaded = true;

                !function(){
            var t=function(e){
                var t=document.createElement("script");
                t.type="text/javascript", t.async=!0, t.charset="utf-8", t.src=e;
                var r=document.getElementsByTagName("script")[0];
                r.parentNode.insertBefore(t,r)
            };

            var r="https://forms.amocrm.ru/forms/assets/js/v2/amoform.min.js";
            t(r)
        }();

        window.amo_forms_load = window.amo_forms_load || function(f){
            if (typeof f === "function") {
                window.amo_forms_load.f = window.amo_forms_load.f || [];
                window.amo_forms_load.f.push(f);
            }
        };

        window.amo_forms_loaded = true;

        document.addEventListener("DOMContentLoaded", function(){
            var formId = "1511550";
            if (!document.getElementById("amoforms_script_" + formId)) {
                var s = document.createElement("script");
                s.async = true;
                s.charset = "utf-8";
                s.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js";
                s.id = "amoforms_script_" + formId;
                document.body.appendChild(s);
            }
        });
    }();
})();


